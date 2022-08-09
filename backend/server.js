require('dotenv').config()

const express =  require('express')
const multer = require('multer')
const mongoose = require('mongoose')
const projectRoutes = require('./routes/projects')

// express app
const app = express()

// multer app engine
const fileStorageEngine = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, "./files")
    },
    filename: (req, file, cb) => {
        cb(null, Date.now() + '--' + file.originalname)
    }
})
const upload = multer({ storage: fileStorageEngine })

app.post("/single", upload.single("file"), (req, res) => {
    console.log(req.file);
    res.send('Single file upload success');
})

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



