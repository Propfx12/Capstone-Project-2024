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