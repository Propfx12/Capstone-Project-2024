function isValidInputs() {
    // Select input fields using class selectors
    const inputText1 = document.querySelector(".txt1");
    const inputText2 = document.querySelector(".txt2");

    // // Check if elements exist (to avoid errors)
    // if (!inputText1 || !inputText2) {
    //     alert("Input fields are missing!");
    //     return false;
    // }

    // Trim and check if inputs are empty
    if (inputText1.value.trim() === "" || inputText2.value.trim() === "") {
        alert("Please fill in both fields before proceeding!");
        return false;
    }

    // Redirect if inputs are valid
    window.location.href = "http://127.0.0.1:5500/First-Project/index.html"; // Replace with your actual URL
}

// Attach function to the button
document.querySelector(".btn").addEventListener("click", function(event) {
    event.preventDefault(); // Prevent default form submission
    isValidInputs();
});

function itValidinput1(){
    window.location.href = "http://127.0.0.1:5500/First-Project/views/cover.html"
}
