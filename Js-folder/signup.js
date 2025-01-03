const signup_regex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
const emailFeild = document.getElementById("username");
const email = document.getElementById("email");
const passwordFeild = document.getElementById("password");
const pass_words = document.getElementById("pass_words");
const confirm_passwordFeild = document.getElementById("confirm_password");
const cofirm_passwords = document.getElementById("cofirm_passwords");
// console.log(signup_regex.test("Hello"));
// console.log(signup_regex.test("Hello123"));
// console.log(signup_regex.test("12345"));
// console.log(signup_regex.test("hello world"));

function txt(){
   let user = document.getElementById("username").value;
   let pass = document.getElementById("password").value;
   let confirm = document.getElementById("confirm_password").value;
   console.log(signup_regex.test(user));
  //  alert(signup_regex.test(user));

  //  storing the data


  let User_name = localStorage.setItem("user", user);
  let pass_word = localStorage.setItem("pass", pass);
  let con_firm = localStorage.setItem("confirm", confirm); 

      // retrieving stored data

//   let Username = localStorage.getItem("user", user)
//   let password = localStorage.getItem("pass", pass)
//   let confirms = localStorage.getItem("confirm", confirm)

const true_regex = (signup_regex.test(user));
  

  if (true_regex && pass && pass == confirm){
      alert("Ok For Signup ")
  } else if (!pass){
    passwordFeild.classList.add('error');
    pass_words.classList.add('error')
  } else if (pass!= confirm){
    confirm_passwordFeild.classList.add('invalid');
    cofirm_passwords.classList.add('invalid');
  }else {
      //  alert("Not Ok For Signup")
      emailFeild.classList.add('error');
      email.classList.add('error');
      passwordFeild.classList.add('error');
      pass_words.classList.add('error');
      confirm_passwordFeild.classList.add('invalid');
      cofirm_passwords.classList.add('invalid');
  }

  // console.log(pass, confirm);

}        

       
        
      

       