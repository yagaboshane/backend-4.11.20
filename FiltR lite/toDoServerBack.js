const express = require("express")
const cors = require('cors')
const multer = require('multer')

const data = require('./data.js')


const app = express()
const port = 1010

const upload = multer()
app.use(cors())
app.use(express.urlencoded({extended:true}))
app.use(upload.array())
app.use(express.json)

app.get('/', function(req,res){
    console.log('Routes are working?')
    res.send('Hello World')
})

app.get('/tasks', function(req, res){
    console.log('routes are working')
    res.send(data.albums)
})

app.post('/', function(req, res){
    
})


// app.get()   

app.listen(port,function (){
    console.log(`Your app is listening at http://localhost: ${port}`)
})