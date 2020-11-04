let userName = document.querySelector('#userName')
let password = document.querySelector('#password')

let login = document.querySelector('#loginBttn')
login.addEventListener('click', loginFunc())
let signUp = document.querySelector('#signUpBttn')
signUp.addEventListener('click', )

const highScore = 1

function user(name, secrectword){
 this.name = name,
 this.secrectword = secrectword
}
let newUser = user(userName.innerText, password.innerText)

function loginFunc() {

} 

function signUpFunc() {

}

