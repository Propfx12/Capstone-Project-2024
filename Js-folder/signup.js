
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
  const confirm = confirmPasswordField.value.trim();

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
    alert("Password Must Contain Uppercase, Number and @ sign ")
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

  // If all fields are valid, store in localStorage
  if (isValid) {
    localStorage.setItem("user", user);
    localStorage.setItem("pass", pass);
    localStorage.setItem("confirm", confirm);

    // Trigger success popup
    alert("Sign-up successful!");
  
    window.location.href = "login.html";
  }

 
}

// Event listener for form submission
document.getElementById("signup-form").addEventListener("submit", function (event) {
  event.preventDefault(); // Prevent default form submission
  validateAndSubmit(); // Call validation and submission function
});    

