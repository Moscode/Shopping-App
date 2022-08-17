const express = require("express")
const mongoose = require("mongoose")
const morgan = require("morgan")
const bodyParser = require("body-parser")
const cookieParser = require("cookie-parser")
const cors = require("cors")
const expressValidator = require("express-validator")
require("dotenv").config()

const app = express()
const port = 3000



app.get("/", (req, res)=>{
    res.send("Hi, you're doing great!")
})

app.listen(port, ()=>{
    console.log(`Runing on port ${port}`)
})