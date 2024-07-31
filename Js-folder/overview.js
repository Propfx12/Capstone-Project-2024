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

