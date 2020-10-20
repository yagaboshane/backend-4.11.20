function getDataFunc(){
    // creates request object
    UserRequest = new XMLHttpRequest()
    	// configures request object
			UserRequest.open("GET", "https://swapi.dev/api/people/1")
            
            // defines the behavior once response comes in
            request.addEventListener("load", function() {
                var data = JSON.parse(this.response);
                div.innerText = data.name
            })
            // actually sends the request
            request.send();
        }

console.log("run in")
console.log(serverImp.test)
console.log("run out")
//declarations
let searchUser = document.querySelector("#searchUser")
let searchBttn = document.querySelector('#searchBttn')
searchBttn.addEventListener("click",loadUserFunc)

let userName = document.querySelector("#userName")
let firstName = document.querySelector("#firstName")
let lastName = document.querySelector("#lastName")
let userAccess = document.querySelector("#userAccess")


//functions



function loadUserFunc() {
   console.log("test")
    let idx = serverImp.adminArray
    let searcher = searchUser.value

    idx.forEach(function(item){
        if (item.adminUser === searcher){
            alert(item.firstName + " " + item.lastName)
        }  
    })

}