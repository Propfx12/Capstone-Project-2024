let currentStep = 0;
const steps = document.querySelectorAll(".step");
const stepIndicator = document.getElementById("stepIndicator");

function updateStep() {
    steps.forEach((step, index) => {
        step.style.display = index === currentStep ? "block" : "none";
    });
    stepIndicator.textContent = `Step ${currentStep + 1} of ${steps.length}`;
    document.getElementById("prevBtn").disabled = currentStep === 0;
    document.getElementById("nextBtn").textContent = currentStep === steps.length - 1 ? "Submit" : "Next";

    // Update progress bar
    document.documentElement.style.setProperty("--progress-step", currentStep + 1);
}

function changeStep(step) {
    if (step === 1 && !validateStep()) return;
    currentStep += step;
    if (currentStep >= steps.length) {
        document.getElementById("businessPlanForm").submit();
        return;
    }
    updateStep();
}

function validateStep() {
    const inputs = steps[currentStep].querySelectorAll("input, textarea");
    for (let input of inputs) {
        if (!input.checkValidity()) {
            alert("Please fill all required fields.");
            return false;
        }
    }
    return true;
}

updateStep();





const overviewField = document.getElementById("Overview");
const coverField = document.getElementById("cover");
const companyField = document.getElementById("company");
const businessField = document.getElementById("business");
const industryField = document.getElementById("Industry");

function storeInLocal() {
    // Get trimmed values from inputs
    const over = overviewField.value.trim();
    const cov = coverField.value.trim();
    const com = companyField.value.trim();
    const bus = businessField.value.trim();
    const ind = industryField.value.trim();

    let userData = {};
    userData["over"] = over
    userData["cov"]  = cov
    userData["com"]  = com
    userData["bus"]  = bus
    userData["ind"]  = ind 
    console.log("INPUT1: ", over)

console.log("USERDATA: ", Object.keys(userData));
console.log("STRINGIFY: ", JSON.stringify(userData));

 

    console.log("USERDATA: ", userData);
    console.log("STRINGIFY: ", JSON.stringify(userData));

    // Save to localStorage with a fixed key
    localStorage.setItem("businessPlanData", JSON.stringify(userData));
}

// Call the function when needed, e.g., on form submission
document.getElementById("nextBtn").addEventListener("click", storeInLocal);

// window.location.href = "Dashboard.html"


