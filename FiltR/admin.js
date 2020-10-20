//declarations
let adminName = "Shane"

let welcome = document.querySelector("#welcome")
welcome.innerText = "Welcome, " + adminName
 
let clearBttn = document.querySelector("#clearBttn")
clearBttn.addEventListener("click", clearDdFunc)

    //dashes
let _dashOne = document.querySelector("click", "#_dashOne") 
let _dashTwo = document.querySelector("click", "#_dashTwo")
let _dashThree = document.querySelector("click", "#_dashThree")
let _dashFour = document.querySelector("click", "#_dashFour")
let _dashFive = document.querySelector("click", "#_dashFive")
let _dashSix = document.querySelector("click", "#_dashSix")
let _dashSeven = document.querySelector("click", "#_dashSeven")


//functions
function hideFunc(){
    drilldownDisplay.style.display = "none"
}
hideFunc()

function ddDisplayFunc(){
   drilldownDisplay.style.display = "block" 
}

function clearDdFunc(){
drilldownDisplay.style.display = "none"
}

console.log("running")
let name = "Shane"