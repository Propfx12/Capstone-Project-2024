


let User_name = document.getElementById("username")
let pass_word = document.getElementById("password")


username.onchange = function() {
let usernamevalue = username.value
let value = localStorage.setItem("username", usernamevalue);
let result = localStorage.getItem("username")
console.log(usernamevalue)
}

password.onchange = function() {
let passwordvalue = password.value
let value = localStorage.setItem("password", passwordvalue);
let result = localStorage.getItem("password")
console.log(passwordvalue)
}

// section storage

// function createSessionToken() {
//     const randomChars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0810700435';
//     const tokenLength = 40;
//     let token = '';
//     for (let i = 0; i < tokenLength; i++) {
//         token += randomChars.charAt(Math.floor(Math.random() * randomChars.length));
//     }
//     createSessionToken += randomChars    
//     return token;
// }