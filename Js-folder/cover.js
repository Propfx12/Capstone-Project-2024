
document.getElementById('formValidation').addEventListener('submit', validateForm);

function validateForm(event) {
    event.preventDefault(); // Prevent form submission

    const nameInput = document.getElementById('name').value.trim();
    const companyInput = document.getElementById('company').value.trim();
    const emailInput = document.getElementById('email').value.trim();
    const nameerrorDiv = document.getElementById('name-error-message');
    const companyerrorDiv = document.getElementById('company-error-message');
    const emailerrorDiv = document.getElementById('email-error-message');
    const nameRegex = /^[A-Za-z]+(?: [A-Za-z]+)*$/;
    const companyRegex = /^[A-Za-z]+(?: [A-Za-z]+)*$/;
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/

    let form = document.getElementById("formValidation");
    let isValid = true; // Track validation status

    // Clear previous error message
    nameerrorDiv.textContent = '';
    companyerrorDiv.textContent = '';
    emailerrorDiv.textContent = '';

    // Validate name input
    if (!nameRegex.test(nameInput)) {
      // alert('Invalid name. Please enter letters and spaces only.'); // Show alert
      nameerrorDiv.textContent = 'Invalid name. Please enter letters and spaces only.'; // Keep error message separate
      isValid = false;
  }

   // Validate company input
   if (!companyRegex.test(companyInput)) {
    // alert('Invalid company name. Use letters, numbers, spaces, &, and - only.');
    companyerrorDiv.textContent = 'Invalid company name. Use letters, numbers, spaces, &, and - only.';
    isValid = false;
}
  

  //  Validate email input
  if (!emailRegex.test(emailInput)){
    emailerrorDiv.textContent = 'Invalid email. Please make sure your email is correct.';
    isValid = false;
  }

   // Prevent submission if any field is invalid
   if (!isValid) return;


    // Check if all fields are valid
    if (!form.checkValidity()) {
        alert("Please fill in all required fields.");
        return;
    }

    alert("Form is valid! Redirecting...");

    // Check which button was clicked
    let clickedButton = event.submitter;

    if (clickedButton.id === "saveNextBtn") {
        window.location.href = "http://127.0.0.1:5500/First-Project/views/company.html";
    } else {
        window.location.href = "http://127.0.0.1:5500/First-Project/views/Overview.html";
    }
}

// JavaScript code to redirect users to a different web page
function reDirecttoPage1() {
    window.location.href = "http://127.0.0.1:5500/First-Project/views/Overview.html";
}
