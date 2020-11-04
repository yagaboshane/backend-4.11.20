
//calls express 
const express = require ('express')

//calls path and allows accessibility to the local drive
const path = require ('path')
//Not really sure what this is
const { stringify } = require('querystring')

//ties express to app and creates an express application
const app = express()

//ties the port number to a variable 'port'
const port = 3000

//parsing html data into the body obejct in 'req'
app.use(express.urlencoded({extended: true}))

//temp data holder
const db = []

//reders home page
app.get('/', function(req,res){
    console.log('home page was hit')
    let home = path.join(__dirname,'home.html')
    res.sendFile(home)
})

//renders count page
app.get('/count', function(req, res){
    console.log('Counter was hit')
    let home = path.join(__dirname,'count.html')
    res.sendFile(count)
})

//saves html object into temp data holder
app.post('/sign_up', function(req, res){
    console.log('Sign up was hit')
    console.log(req.body)
    db.push(req.body)

})

//serves the app to the port property and logs feedback for success confirmation 
app.listen(port, function(){
    console.log(`Server is running on http://${port}`)
})
