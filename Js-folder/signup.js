



// Regular expression for email validation
const signup_regex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

// Regular expression for password validation
const signup_regex_password = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).{8,}$/;

// DOM elements
const emailField = document.getElementById("username");
const emailLabel = document.getElementById("email");
const passwordField = document.getElementById("password");
const passwordLabel = document.getElementById("pass_words");
const confirmPasswordField = document.getElementById("confirm_password");
const confirmPasswordLabel = document.getElementById("cofirm_passwords");

// Function to generate an authentication token
function generateAuthToken(email) {
  let timestamp = new Date().getTime(); // Current timestamp
  let randomString = Math.random().toString(36).substring(2, 12); // Random string
  let token = btoa(email + timestamp + randomString); // Encode in Base64
  return token;
}

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
function validateAndSubmit() {
  const user = emailField.value.trim();
  const pass = passwordField.value.trim();
  const confirm = confirmPasswordField.value.trim();
  console.log(" EMAIL: ", typeof(user))
  console.log(user);

  // Flag to track overall validity
  let isValid = true;

  // Validate email
  if (!signup_regex.test(user)) {
    addError(emailField, emailLabel);
    isValid = false;
  } else {
    removeError(emailField, emailLabel);
  }

  // Validate password
  if (!signup_regex_password.test(pass)) {
    addError(passwordField, passwordLabel);
    alert("Password must contain at least one uppercase letter, one number, and be at least 8 characters long.");
    isValid = false;
  } else {
    removeError(passwordField, passwordLabel);
  }

  // Validate confirm password
  if (pass !== confirm) {
    addError(confirmPasswordField, confirmPasswordLabel);
    isValid = false;
  } else {
    removeError(confirmPasswordField, confirmPasswordLabel);
  }

  // If all fields are valid, store data in localStorage
  if (isValid) {
    let authToken = generateAuthToken(user); // Generate authentication token

    //  JavaScript code that joins all localstorage keys and convert them to an object.
   let userData = {};
   userData["user"] = emailField.value.trim();
   userData["pass"] = passwordField.value.trim();
   userData["confirm"] = confirmPasswordField.value.trim();
   userData["authToken"] = authToken;

   console.log("USERDATA: ", Object.keys(userData));
   console.log("STRINGIFY: ", JSON.stringify(userData));

    
    localStorage.setItem(user, JSON.stringify(userData));
    // localStorage.setItem("pass", pass);
    // localStorage.setItem("confirm", confirm);
    // localStorage.setItem("authToken", authToken); // Store token

    // Trigger success popup
    // alert("Sign-up successful! Authentication token generated.");

    window.location.href = "http://127.0.0.1:5500/First-Project/views/login.html";
  }
}

// Event listener for form submission
document.getElementById("signup-form").addEventListener("submit", function (event) {
  event.preventDefault(); // Prevent default form submission
  validateAndSubmit(); // Call validation and submission function
});



const  businessData = {}

//  Add Properties to this object

businessData["overview"] = "email"
businessData["company"] = "formInput"

//  Adding a nested object 

businessData["myBusiness"] = {
  name: "Skytech",
  product: "Phones",

}


