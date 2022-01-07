const dotenv = require('dotenv');
dotenv.config();

var path = require('path')
const express = require('express')
const mockAPIResponse = require('./mockAPI.js')
//const fetch = require('node-fetch')
const fetch = (...args) => import('node-fetch').then(({default: fetch}) => fetch(...args));


const app = express()
const bodyParser= require("body-parser")
const cors = require("cors")

app.use(express.static('dist'))
app.use(bodyParser.json())
app.use(cors())


console.log(__dirname)

app.get('/', function (req, res) {
    // res.sendFile('dist/index.html')
    res.send("I am hereeeee")
    res.sendFile(path.resolve('src/client/views/index.html'))
})
//here


// designates what port the app will listen to for incoming requests
app.listen(8080, function () {
    console.log('Example app listening on port 8080!')
})

// app.get('/test', function (req, res) {
//     res.send(mockAPIResponse)
// })

app.post('/test' , async function(req,res){
    const url = req.body.url
    const key = process.env.key
    console.log("url : " , url , " key " , key)
    const api= await fetch(`https://api.meaningcloud.com/sentiment-2.1?key=${key}&url=${url}&lang=en`)
    const data = await api.json()
    console.log(data)
    res.send(data)
} )
