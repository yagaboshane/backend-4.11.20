// const indexMinor = require("./indexMinor");

const path = require('path')
const { stringify } = require('querystring')

let home = path.join(__dirname,'toDo.html')

function addTaskFunc(){
    axios.post('localhost:1010/post_data',{
        postData})
    .then(function(response){
        console.log(response)
    })
}


module.exports = {
    home: home
}
