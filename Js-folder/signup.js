

let signupform = document.querySelector("#btn-Signup")

console.log("Hello World")
        let usernameinput = document.getElementById("username")
        let passwordinput = document.getElementById("password")
        let confirm_passwordinput = document.getElementById("confirm_password")

          // User constructor function
          function User(username, password) {
            this.username = username;
            this.password = password; // In a real application, this should be hashed
            this.confirm_password = confirm_password;
        }

        console.log("USERNAMEINPUT: ",usernameinput.innerText)
        console.log("PASSWORDINPUT: ",passwordinput.value)
        
                // Function to add a user
                function addUser(username, password) {
                  // Validate input
                  if (!username || !password) {
                      console.error('All fields are required');
                      return;
                      
                  }


           
       function  signup () {

             

                let usernameValue = usernameinput.value
                let passwordValue = passwordinput.value
                let confirm_passwordValue = confirm_passwordinput.value
                

              

                  

                    // Check if passwords match
                    if (passwordValue !==  confirm_passwordValue ) {
                        console.error('Passwords do not match');
                        return;
                    }

                    // Create a new user object
                    let user = new User(usernameValue , passwordValue);

                    // Get existing users from localStorage or initialize an empty array
                    let users = JSON.parse(localStorage.getItem('users')) || [];
                     
                    console.log("NEW USER",users);

                    // Add the new user to the array
                    users.push(user);

                    // Store the updated array back in localStorage
                    localStorage.setItem('users', JSON.stringify(users));

                    console.log('USERS DATA: ', JSON.stringify(users));
                    alert('User added successfully');
                }
                signupform.addEventListener("submit",  (event) => {
                  event.preventDefault();
                  signup();
                }
                  
                  )
                

                // Example usage
                
                addUser(usernameValue, passwordValue)

            
              }

              // alert("Kindly Sign up to get started please do not miss any step." )


              // let  popup = document.getElementById("popup");

              // function openPopup() {
              //   popup.classList.add("open-popup");
              // }


              // function closePopup() {
              //   popup.classList.remove("open-popup");
              // }

              // const user = {
              //   firstname: "jonathan",
              //   lastname: "prosper",
              //   fullname: function (){
              //     return this.firstname + " " + this.lastname;
              //   }
              //  }

              //  console.log(user.fullname())


              

       
        
      

       