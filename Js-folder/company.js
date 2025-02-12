function text(){
    let form1 = document.getElementById("Yes").value;
    let form2 = document.getElementById("No").value;
    let form3 = document.getElementById("Date").value;
    let form4 = document.getElementById("Date1").value;
    let form5 = document.getElementById("Date2").value;

    // storing the data

    localStorage.setItem("form1", form1)
    localStorage.setItem("form2", form2)
    localStorage.setItem("form3", form3)
    localStorage.setItem("form4", form4)
    localStorage.setItem("form5", form5)
}

//  JavaScript Code that reDirects Users to another Web Page.

function reDirecttopageOne() {
    window.location.href = "http://127.0.0.1:5500/First-Project/views/cover.html"
}

function reDirecttopageTwo() {
    window.location.href = "http://127.0.0.1:5500/First-Project/views/Executive-summary.html";
}

// JavaScript Code that checks if user has selected any of the input before reDirecting them to the next page

function reDirecttopageTwo() {
    // Get  radio buttons for industry selection
   let industryfirstselected = document.querySelector('input[name="button"]:checked');


      // Validation check
      if (!industryfirstselected) {
        alert("Please Choose If Your Business is Already in Operation.");
        return;
    }

     // Redirect if all conditions are met
   window.location.href = "http://127.0.0.1:5500/First-Project/views/Executive-summary.html";

   alert("Redirecting You To A New Page.")
}