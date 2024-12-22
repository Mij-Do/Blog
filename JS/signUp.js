// Regex
// 1-email
const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
// 2-phone number
const phoneRegex = /^\+?[0-9]{10,15}$/;
// 3-password
const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*])[A-Za-z\d!@#$%^&*]{8,}$/;
// Sign Up btn
let userInput = document.getElementById("userInput");
let gmailInput = document.getElementById("gmailInput");
let phoneInput = document.getElementById("phoneInput");
let passwordInput = document.getElementById("passwordInput");
let signUpBtn = document.getElementById("signUp-btn");
signUpBtn.addEventListener("click", function () {
    if (emailRegex.test(gmailInput.value) && 
        phoneRegex.test(phoneInput.value) && 
        passwordRegex.test(passwordInput.value)) {
        console.log("true");
    } else {
        console.log(Error("invalid data"));
    }
    // put data inside object
    const user = {
        id: 1,
        userName: userInput.value,
        gmailInput: gmailInput.value,
        phoneInput: phoneInput.value,
        passwordInput: passwordInput.value,
    };
    // storage data
    sessionStorage.setItem("userData", JSON.stringify(user));
    
    // convert object to json 
    const jsonData = JSON.stringify(user);
    console.log(jsonData);
});
