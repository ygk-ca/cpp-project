require('dotenv').config()

const express =  require('express')
const mongoose = require('mongoose')
const projectRoutes = require('./routes/projects')


// const bodyParser = require("body-parser")

// express app
const app = express()


// image upload
const multer = require('multer')
const { v4: uuidv4 } = require('uuid');
const fileStorageEngine = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, './public')
    },
    filename: (req, file, cb) => {
        cb(null, uuidv4() + '--' + file.originalname)
    }
});

const upload = multer({ storage: fileStorageEngine });

app.post('/api/single', upload.single('image'), (req, res) => {
    console.log(req.file)
    // res.send("Single File upload success")
    res.json({filename: req.file.filename})
});

app.use('/images', express.static('public'))




// middleware
app.use(express.json())


app.use((req, res, next) => {
    console.log(req.path, req.method)
    next()
})

// routes
app.use('/api/projects', projectRoutes)

// connect to db
mongoose.connect(process.env.MONGO_URI)
    .then(() => {
        // listening to requests once connected to DB
        app.listen(process.env.PORT, () => {
            console.log('Connected to DB, listening on port 4000')
        })
    })
    .catch((error) => {
        console.log(error)
    })


// nodemailer config
const nodemailer = require("nodemailer")

const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
        user: process.env.AUTH_EMAIL,
        pass: process.env.AUTH_PASS // generated app password
    }
})

// testing nodemailer success
transporter.verify((error, success) => {
    if (error) {
        console.log(error)
    }
    else {
        console.log("ready for messages")
        console.log(success)
    }
})

app.post("/api/sendmail", (req, res) => {
    const {name, email, course, phone, message} = req.body;

    const mailOptions = {
        from: process.env.AUTH_EMAIL,
        to: process.env.CPP_EMAIL,
        subject: 'Community Partnership Project Contact Form Inquiry',
        html: `<div>
                    <strong>Name: </strong>${name}
                    <br/><hr/>
                    <strong>Email: </strong>${email}
                    <br/><hr/>
                    <strong>Course code: </strong>${course}
                    <br/><hr/>
                    <strong>Phone: </strong>${phone}
                    <br/><hr/>
                    <strong>Message: </strong>${message}
                </div>`
    }

    transporter.sendMail(mailOptions)
        .then(() => {
            res.json({
                status: "SUCCESS",
                message: "Message sent successfuly"
            })
        })
        .catch((error) => {
            //An error occured
            console.log(error);
            res.json({status: "FAILED", message: "An error occured!"})
        })
})