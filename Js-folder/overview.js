function text (){
   let form1 = document.getElementById("New Company").value;
   let form2 = document.getElementById(" Existing Company").value;
   let form3 = document.getElementById("Consumer Service").value;
   let form4 = document.getElementById("Arts & Entertainment").value;
   let form5 = document.getElementById("Automotive").value;
   let form6 = document.getElementById("Bar & Nightclub").value;
   let form7 = document.getElementById("Beauty/Hair Salon & Day Spa").value;
   let form8 = document.getElementById("Business Service").value;
   let form9 = document.getElementById("Yes").value;
   let form10 = document.getElementById("No").value;
   let form11 = document.getElementById("Not Sure").value

   
//    storing the data
   
   localStorage.setItem("form1", form1)
   localStorage.setItem("form2", form2)
   localStorage.setItem("form3", form3)
   localStorage.setItem("form4", form4)
   localStorage.setItem("form5", form5)
   localStorage.setItem("form6", form6)
   localStorage.setItem("form7", form7)
   localStorage.setItem("form8", form8)
   localStorage.setItem("form9", form9)
   localStorage.setItem("form10", form10)
   localStorage.setItem("form11", form11)
}


  PyramidRepeat(6);
 
 // Call the function with the desired number of rows
 printPyramid(5);

function  reDirecttoPage1() {
   window.location.href = "http://127.0.0.1:5500/First-Project/views/Dashboard.html";
}

function  reDirecttoPage2() {
   window.location.href = "http://127.0.0.1:5500/First-Project/views/cover.html";
}


function reDirecttoPage2() {
   // Get all radio buttons for industry selection
   let industryfirstselected = document.querySelector('input[name="firstGender"]:checked');
   let industrySelected = document.querySelector('input[name="gender"]:checked');
   let industrySelecteds = document.querySelector('input[name="genders"]:checked');

   // Get all funding buttons (Yes, No, Not Sure)
   // let fundingSelected = document.querySelector('.form2 .btn.selected');
   

   // Validation check
   if (!industryfirstselected) {
      alert("Please Choose if your company is new or an existing one.");
      return;
  }
   
   if (!industrySelected) {
       alert("Please select your industry before proceeding.");
       return;
   }
   

   if (!industrySelecteds){
      alert("Will you be seeking funding for your business plan?");
      return;
   }

   // if (!fundingSelected) {
   //     alert("Please select if you will be seeking funding.");
   //     return;
   // }

   // Redirect if all conditions are met
   window.location.href = "http://127.0.0.1:5500/First-Project/views/cover.html";
}


//  Saving all input in the localStorage


document.addEventListener("DOMContentLoaded", function () {
   // Select all radio buttons inside the dropdown
   const radioButtons = document.querySelectorAll("input[type='radio'][name='gender']");

   // Function to save the selected value to localStorage
   function saveSelection() {
       // Find the selected radio button
       const selectedRadio = document.querySelector("input[type='radio'][name='gender']:checked");
       
       if (selectedRadio) {
           // Save the selected value in localStorage
           localStorage.setItem("selectedIndustry", selectedRadio.value);
           console.log("Saved:", selectedRadio.value); // Debugging
       }
   }

   // Attach event listeners to all radio buttons
   radioButtons.forEach((radio) => {
       radio.addEventListener("change", saveSelection);
   });

   // Load saved value when page reloads
   const savedValue = localStorage.getItem("selectedIndustry");
   if (savedValue) {
       const savedRadio = document.querySelector(`input[type='radio'][name='gender'][value='${savedValue}']`);
       if (savedRadio) {
           savedRadio.checked = true; // Restore the selected value
       }
   }
});

console.log(localStorage.getItem("selectedIndustry"));



