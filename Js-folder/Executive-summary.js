function isTextareaFilled() {
    const textarea = document.querySelector("textarea");
    return textarea.value.trim() !== "";
}

function ValidtextareaNext() {
    if (!isTextareaFilled()) {
        alert("Please fill out the message field before proceeding.");
    } else {
        window.location.href = "http://127.0.0.1:5500/First-Project/views/industry.html"; // Change to your actual URL
    }
}

function ValidTextarea(){
    window.location.href = "http://127.0.0.1:5500/First-Project/views/company.html"
}