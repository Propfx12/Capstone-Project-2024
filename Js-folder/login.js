


// let User_name = document.getElementById("username")
// let pass_word = document.getElementById("password")


// username.onchange = function() {
// let usernamevalue = username.value
// let value = localStorage.setItem("username", usernamevalue);
// let result = localStorage.getItem("username")
// console.log(usernamevalue)
// }

// password.onchange = function() {
// let passwordvalue = password.value
// let value = localStorage.setItem("password", passwordvalue);
// let result = localStorage.getItem("password")
// console.log(passwordvalue)
// }

// // section storage

// // function createSessionToken() {
// //     const randomChars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0810700435';
// //     const tokenLength = 40;
// //     let token = '';
// //     for (let i = 0; i < tokenLength; i++) {
// //         token += randomChars.charAt(Math.floor(Math.random() * randomChars.length));
// //     }
// //     createSessionToken += randomChars    
// //     return token;
// // }



  // Regular expression for email validation
  const login_regex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

  // Regular expression for password validation
  const login_regex_password = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).{8,}$/;

  // DOM elements
  const emailField = document.getElementById("username");
  const emailLabel = document.getElementById("email");
  const passwordField = document.getElementById("password");
  const passwordLabel = document.getElementById("pass_words");
  
  // Helper function to add and remove error classes
  function addError(element, label) {
    if (element) element.classList.add("error");
    if (label) label.classList.add("error");
  }
  
  function removeError(element, label) {
    if (element) element.classList.remove("error");
    if (label) label.classList.remove("error");
  }
  
  // Form validation and submission
  function validateAndSubmit() {
    const user = emailField.value.trim();
    const pass = passwordField.value.trim();
  
    // Flag to track overall validity
    let isValid = true;
  
    // Validate email
    if (!login_regex.test(user)) {
      addError(emailField, emailLabel);
      isValid = false;
    } else {
      removeError(emailField, emailLabel);
    }
  
    // Validate password
    if (!login_regex_password.test(pass)) {
      addError(passwordField, passwordLabel);
      alert("Password Must Contain Uppercase, Number and @ sign ")
      isValid = false;
    } else {
      removeError(passwordField, passwordLabel);
    }
  
    
  
    // If all fields are valid, store in localStorage
    if (isValid) {
   const localEmail = localStorage.getItem("user");
   const localPass  = localStorage.getItem("pass");
  //  alert (localEmail);
  //  alert(localPass);
   if(user == localEmail && pass == localPass){
           alert("Login Successful")
           window.location.href = "Dashboard.html";
   }else{
       alert("Login Credencials Not Found")
   }
  
      // // Trigger success popup
      // alert("Sign-up successful!");
    
      
    }
  
   
  }
  
  // Event listener for form submission
  document.getElementById("login-form").addEventListener("submit", function (event) {
    event.preventDefault(); // Prevent default form submission
    validateAndSubmit(); // Call validation and submission function
  });    