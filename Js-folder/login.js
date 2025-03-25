
// Function to check if a variable matches any key in localStorage

  function isKeyInLocalStorage(variable) {
    return localStorage.getItem(variable) !== null;
}

const secretKey = "mySecretKey145"; // Keep this key private and consistent

function encryptData(data) {
  return CryptoJS.AES.encrypt(JSON.stringify(data), secretKey).toString();
}


  // Regular expression for email validation
const login_regex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

// Regular expression for password validation
const login_regex_password = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).{8,}$/;

// DOM elements
// const emailField = document.getElementById("username");
const email_element = document.getElementById("email");
const password_element = document.getElementById("password");
const passwordLabel = document.getElementById("pass_words");

// console.log("Email Feild: ", emailField);

// const email_string =  emailField.trim();
// const password_string =  passwordField.value.trim();
// console.log("EMAIL ENTERED: ", email_string);

// Helper functions to add/remove error classes
function addError(element, label) {
  if (element) element.classList.add("error");
  if (label) label.classList.add("error");
}

function removeError(element, label) {
  if (element) element.classList.remove("error");
  if (label) label.classList.remove("error");
}

// Form validation and submission
function validateAndSubmit(emailField, passwordField) {
  const user = emailField.value.trim();
  const pass = passwordField.value.trim();
  console.log("EMAIL VALID: ", user)


  // const email_string =  emailField.value.trim();
  // const password_string =  passwordField.value.trim();
  // console.log("EMAIL ENTERED: ", email_string);

  // Flag to track overall validity
  let isValid = true;

  // Validate email
  if (!login_regex.test(user)) {
    addError(emailField);
    isValid = false;
  } else {
    removeError(emailField);
  }

  // Validate password
  if (!login_regex_password.test(pass)) {
    addError(passwordField);
    alert("Password must contain at least one uppercase letter, one number, and be at least 8 characters long.");
    isValid = false;
  } else {
    removeError(passwordField);
  }
  console.log("STORED EMAIL EXIST: ", isKeyInLocalStorage(user))

  // If all fields are valid, check stored credentials
  if (isValid) {
    if (isKeyInLocalStorage(user)) {
    
      const userData = localStorage.getItem(user);
      const userData_Obj = JSON.parse(userData);
      const authToken2 = userData_Obj.authToken

      if (user === userData_Obj.user && pass === userData_Obj.pass) {
        if (authToken2 ) {
            // Encrypt data before redirecting
        //  const encryptedData = encryptData({ user, authToken2 });

          alert("Login Successful!");
          window.location.href = `dashboard.html?email=${user}`;
        } else {
          alert("Authentication token missing! Please sign up again.");
        }
      } else {
        alert("Login credentials not found!");
      }
      console.log(`${user} exists in localStorage.`);
     
  } else {
      console.log(`${user} does not exist in localStorage.`);
  }
 


  }
}

// Event listener for form submission
document.getElementById("login-form").addEventListener("submit", function (event) {
  event.preventDefault(); // Prevent default form submission
  validateAndSubmit(email_element, password_element); // Call validation function
});




// Section token 


// Function to generate a random token
function generateToken() {
  return Math.random().toString(36).substring(2); // Generate a random string token
}

// Function to store the token with an expiration time
function storeTokenWithExpiration(expirationSeconds = 3600) {
  const token = generateToken();
  const expirationTime = Date.now() + expirationSeconds * 1000; // Convert to milliseconds

  // Store the token and expiration time in sessionStorage
  sessionStorage.setItem('session_token', token);
  sessionStorage.setItem('token_expiration', expirationTime.toString());

  console.log('Token generated and stored:', token);
}

// Function to check if the token has expired
function isTokenExpired() {
  const expirationTime = sessionStorage.getItem('token_expiration');
  if (!expirationTime) {
      return true; // No expiration time stored means the token is not valid
  }

  const currentTime = Date.now();
  return currentTime > parseInt(expirationTime); // Compare current time with expiration time
}

// Function to retrieve the token if it's not expired
function getToken() {
  if (isTokenExpired()) {
      console.log('Token is expired or does not exist.');
      return null; // Token has expired or doesn't exist
  }

  return sessionStorage.getItem('session_token'); // Retrieve the valid token
}

// Usage example
storeTokenWithExpiration( 3600 ); // Store token with  3600 seconds expiration time

setTimeout(() => {
  const token = getToken();
  console.log('Retrieved Token:', token); // Will print "null" after  3600 seconds
},  6000); // Wait 6 seconds to check after expiration

