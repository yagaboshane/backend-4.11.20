const express = require("express")
const index = require('./index')

const app = express()
const port = 3003

// app.use(express.static('public'))

app.get('/',function(req,res){
    res.sendFile(index.home)
})

app.listen(port,function (){
    console.log(`Your app is listening at http://localhost: ${port}`)
})



