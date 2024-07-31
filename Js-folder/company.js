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