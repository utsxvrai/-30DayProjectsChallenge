const btnEl = document.querySelector(".btn");
const inputEl = document.getElementById("input");
const copyIconEl = document.querySelector(".fa-copy");
const alertContainerEl = document.querySelector(".alert-container");

btnEl.addEventListener("click", () => {
    createPassword();
});

copyIconEl.addEventListener("click", () => {
    copyPassword();
    if (inputEl.value) {
    alertContainerEl.classList.remove("active");
    setTimeout(() => {
    alertContainerEl.classList.add("active");
    }, 2000); // 2 seconds
    }
});

function createPassword() {
    const chars =
    "0123456789abcdefghijklmnopqrstuvwxtz!@#$%^&*()_+?:{}[]ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    const passwordLength = 14;
    let password = "";
    for (let index = 0; index < passwordLength; index++) {
    const randomNum = Math.floor(Math.random() * chars.length);
    password += chars.substring(randomNum, randomNum + 1);
    } 
    inputEl.value = password;
    alertContainerEl.innerText = password + " copied!"; // for mobile devices
}

function copyPassword() {
    inputEl.select(); // for desktop
    inputEl.setSelectionRange(0, 9999); // for mobile devices
    navigator.clipboard.writeText(inputEl.value);
    
}