// const params = new URLSearchParams(window.location.search);
// const value = params.get('email'); // Replace 'key' with the actual parameter name
// console.log("PARAMS: ", value);

// Get the full URL of the current page
const currentURL = window.location.href;
console.log("Current URL:", currentURL);

// Extract query parameters from the URL
const params = new URLSearchParams(window.location.search);

// Get a specific parameter (e.g., 'email')
const email = params.get('email');

console.log("Email Parameter:", email);




let subMenu = document.getElementById("subMenu");

    function toggleMenu() {
        subMenu.classList.toggle("open-menu");
    }
        
let sidemeu = document.getElementById("sidemenu");

function openmenu(){
    sidemeu.style.right = "0";
}


function closemenu(){
    sidemeu.style.right = "-200px";
}


// Function to periodically check and update the dashboard image
function monitorImageChange(imageElementId, localStorageKey, interval = 1000) {
    // Get the image element by ID
    const imageElement = document.getElementById(imageElementId);

    if (!imageElement) {
        console.error(`Element with ID '${imageElementId}' not found.`);
        return;
    }

    let lastImageValue = localStorage.getItem(localStorageKey);

    // Set the initial image if the value exists
    if (lastImageValue) {
        imageElement.src = lastImageValue;
    }

    // Periodically check for changes
    setInterval(() => {
        const currentImageValue = localStorage.getItem(localStorageKey);

        // Check if the value has changed
        if (currentImageValue && currentImageValue !== lastImageValue) {
            imageElement.src = currentImageValue;
            lastImageValue = currentImageValue;
        }
    }, interval);
}

// Example usage:
// monitorImageChange('dashboardImage', 'dashboardImageSrc');

monitorImageChange('imageElementId', 'profileImage');




// Function to periodically check and update the dashboard image
function monitorImageChange(imageElementId2, localStorageKey, interval = 1000) {
    // Get the image element by ID
    const imageElement = document.getElementById(imageElementId2);

    if (!imageElement) {
        console.error(`Element with ID '${imageElementId2}' not found.`);
        return;
    }

    let lastImageValue = localStorage.getItem(localStorageKey);

    // Set the initial image if the value exists
    if (lastImageValue) {
        imageElement.src = lastImageValue;
    }

    // Periodically check for changes
    setInterval(() => {
        const currentImageValue = localStorage.getItem(localStorageKey);

        // Check if the value has changed
        if (currentImageValue && currentImageValue !== lastImageValue) {
            imageElement.src = currentImageValue;
            lastImageValue = currentImageValue;
        }
    }, interval);
}

// Example usage:
// monitorImageChange('dashboardImage', 'dashboardImageSrc');

monitorImageChange('imageElementId2', 'profileImage');

//  Checking and retrieving the name

// Function to periodically check and update the dashboard name
function monitorNameChange(dashboardName, localStorageKey, interval = 1000) {
    // Get the name element by ID
    const nameElement = document.getElementById(dashboardName);

    if (!nameElement) {
        console.error(`Element with ID '${dashboardName}' not found.`);
        return;
    }

    let lastNameValue = localStorage.getItem(localStorageKey);

    // Set the initial name if the value exists
    if (lastNameValue) {
        nameElement.textContent = lastNameValue;
    }

    // Periodically check for changes
    setInterval(() => {
        const currentNameValue = localStorage.getItem(localStorageKey);

        // Check if the value has changed
        if (currentNameValue && currentNameValue !== lastNameValue) {
            nameElement.textContent = currentNameValue;
            lastNameValue = currentNameValue;
        }
    }, interval);
}

// Example usage:
// Assuming there is an element with ID 'dashboardName' and a value stored in localStorage with key 'userName'
monitorNameChange('dashboardName', 'inputName');




// Create an empty object
let storageData = {};

// Check if localstorage is empty

// Loop through all localStorage items
for (let i = 0; i < localStorage.length; i++) {
    let key = localStorage.key(i);  // Get key name
    let value = localStorage.getItem(key); // Get value

    // Add key-value pair to the object
    storageData[key] = value;
}

// Console log the object with all localStorage data
console.log(storageData);









// Select the card container
let cardContainer = document.getElementById("overAllcard");

// Check if "formData" exists in localStorage and has a value
if (localStorage.getItem("businessPlanData") === null || localStorage.getItem("businessPlanData") === "") {
    // Hide the card if "formData" is empty or doesn't exist in localStorage
    cardContainer.style.display = "none";
} else {
    // Show the card if "formData" exists and is not empty
    cardContainer.style.display = "block";
}



// JavaScript Code that shows create business if the localstorage is empty


// Select the plan container
let planContainer = document.querySelector(".plan");

// Check if "formData" exists in localStorage
if (localStorage.getItem("businessPlanData")) {
    // Hide the plan div if "formData" key exists in localStorage
    planContainer.style.display = "none";
}


let createNewplan = document.querySelector(".submitBtn1")

// Check if localStorage is empty
if (localStorage.getItem("businessPlanData") === null || localStorage.getItem("businessPlanData") === ""){
    // Hide the create new business button
    createNewplan.style.display = "none";
} else {
    // Show the create new business if the localStorage has data
    createNewplan.style.display = "block";
}




// // Function to check if the page is still loading or has finished
// function checkBeforePageLoad() {
//       const userData = localStorage.getItem(user);
//       const userData_Obj = JSON.parse(userData);
//     // Get the authentication token from localStorage
//     const authToken = localStorage.getItem('authToken');
//     // Get the session token from sessionStorage
//     const sessionToken = sessionStorage.getItem('session_token');

//     console.log('authToken:', authToken); // Debugging line to check the token value
//     console.log('sessionToken:', sessionToken); // Debugging line to check the token value

//     // Check if both tokens exist and are not empty
//     if (!authToken || !sessionToken || authToken.trim() === '' || sessionToken.trim() === '') {
//         console.log('Either authToken or sessionToken is missing or invalid');
//         // If either token is missing, redirect to the signup page
//         window.location.href = 'http://127.0.0.1:5500/First-Project/views/sign-up.html';  // Change '/login' to your login page URL
//     } else {
//         // Both tokens exist, grant access to the dashboard
//         console.log('Access granted to the dashboard.');
//         // Optionally, you can show the dashboard or perform further checks
//     }
// }

// // Execute the function immediately (before DOM is fully loaded)
// checkBeforePageLoad();


function decryptData(encryptedData) {
    const bytes = CryptoJS.AES.decrypt(encryptedData, "mySecretKey145");
    return JSON.parse(bytes.toString(CryptoJS.enc.Utf8));
}

function getQueryParam(param) {
    const urlParams = new URLSearchParams(window.location.search);
    return urlParams.get(param);
}

function checkUserSession() {
    // Get encrypted data from URL
    const encryptedData = getQueryParam("data");
    console.log("ECRYPT DATA: ", encryptedData );
    
    if (!encryptedData) {
        alert("Unauthorized access! Please log in.");
        window.location.href = "login.html";
        return;
    }
  

    try {
        // Decrypt user data
        
        console.log("Decoded Encrypted Data:", decodeURIComponent(encryptedData));

        const userData = decryptData(decodeURIComponent(encryptedData));
        console.log("Decrypted User Data:", userData);
        
       
        


        // const storedToken = sessionStorage.getItem("sessionToken");

        if (!!userData.authToken) {
            alert("Session expired or invalid. Please log in again.");
            window.location.href = "login.html";
        } else {
            document.getElementById("welcomeMessage").innerText = `Welcome, ${userData.email}`;
        }
    } catch (error) {
        // alert("Error decoding data. Redirecting to login...");
        // console.log("ERROR DECODING DATA: ")
        // window.location.href = "login.html";
    }
}

// Run session check when the dashboard loads
// checkUserSession();



