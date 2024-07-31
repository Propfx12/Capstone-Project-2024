function txt(){
    let form1 = document.getElementById("Company Name").value;
    let form2 = document.getElementById("Full Name").value;
    let form3 = document.getElementById("Title").value;
    let form4 = document.getElementById("Email").value;
    let form5 = document.getElementById("Street Address").value;
    let form6 = document.getElementById("City").value;
    let form7 = document.getElementById("State").value;
    let form8 = document.getElementById("Code").value
    
    
    // storing the data
    
    localStorage.setItem("form1", form1)
    localStorage.setItem("form2", form2)
    localStorage.setItem("form3", form3)
    localStorage.setItem("form4", form4)
    localStorage.setItem("form5", form5)
    localStorage.setItem("form6", form6)
    localStorage.setItem("form7", form7)
    localStorage.setItem("form8", form8)
}