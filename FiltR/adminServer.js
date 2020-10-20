const express = require('express')
const dbIndex = require('./db.js')

// let index = require('/.index')

const app = express()
const port = 3002

console.log(`Your server is running on Port: ${port}`)

app.get('/',(req, res)=>{
res.send('test')
}) 
//put in query strings to retreive data 
//and send to front end