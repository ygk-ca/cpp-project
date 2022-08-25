require('dotenv').config()

const express =  require('express')
const multer = require('multer')
const mongoose = require('mongoose')
const projectRoutes = require('./routes/projects')


// const bodyParser = require("body-parser")

// express app
const app = express()


// app.use(bodyParser.urlencoded(
//     { extended:true }
// ))

// // SET STORAGE
// var storage = multer.diskStorage({
//     destination: function (req, file, cb) {
//       cb(null, 'uploads')
//     },
//     filename: function (req, file, cb) {
//       cb(null, file.fieldname + '-' + Date.now())
//     }
//   })
 
// var upload = multer({ storage: storage })

// app.post("/uploadphoto",upload.single('preview_img'),(req,res)=>{
//     var img = fs.readFileSync(req.file.path);
//     var encode_img = img.toString('base64');
//     var final_img = {
//         contentType:req.file.mimetype,
//         image:new Buffer(encode_img,'base64')
//     };
//     imageModel.create(final_img,function(err,result){
//         if(err){
//             console.log(err);
//         }else{
//             console.log(result.img.Buffer);
//             console.log("Saved To database");
//             res.contentType(final_img.contentType);
//             res.send(final_img.image);
//         }
//     })
// })

// var storage = multer.diskStorage({
//     destination: function (req, file, cb) {
//       cb(null, 'uploads')
//     },
//     filename: function (req, file, cb) {
//       cb(null, file.fieldname + '-' + Date.now())
//     }
//   })
//   var upload = multer({ storage: storage })

// middleware
app.use(express.json())

const bodyParser = require("express").json
app.use(bodyParser())

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
        to: 'vs61@queensu.ca',
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