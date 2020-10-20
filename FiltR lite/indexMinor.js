let title = document.querySelector('#formTitle')
let Description = document.querySelector('#formDescript')
let date = document.querySelector('#formDate')
let time = document.querySelector('#formTime')

let addTask = document.querySelector('#addTask')
addTask.addEventListener('click',addTaskFunc)

//----------axios----------------//
function addTaskFunc(){
    axios.post('localhost:1010/post_data',{
        postData})
    .then(function(response){
        console.log(response)
    })
}

module.exports = {

}
