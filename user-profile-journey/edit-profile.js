// Get Element From The Html.
const profileImageInput = document.getElementById('profileImage');
const profilePicture = document.getElementById('profilePicture');
const profileForm = document.getElementById('profileForm');
// const dashboardName = document.getElementById('dashboardName');

// Code for changing of picture 
profileImageInput.addEventListener('change', (event) => {
    const file = event.target.files[0];
    if (file) {
        const reader = new FileReader();
        reader.onload = (e) => {
            const ImgStore = e.target.result;
            profilePicture.src = ImgStore;

            // set the image to the localStorage 

            localStorage.setItem("profileImage",  ImgStore )
            // alert ( typeof e.target.result);
            alert('Image stored in localStorage');
        };
        reader.readAsDataURL(file);
        
    }
});

profileForm.addEventListener('submit', (event) => {
    event.preventDefault();

    const name = document.getElementById('name').value;
    // const email = document.getElementById('email').value;
    // const password = document.getElementById('password').value;

    const inputElement = document.getElementById('name');
   
    localStorage.setItem('inputName', inputElement.value);

    // dashboardName.textContent = `Name: ${name}`;

    console.log('User Details:', {
        name,
        // email,
        // password,
    });

    alert('Profile updated successfully!');
});