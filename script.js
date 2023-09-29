let sliderElement = document.querySelector("#slider");
let buttonElement = document.querySelector("#button");

let sizePassword = document.querySelector("#valor");
let password = document.querySelector("#password");

let containerPassword = document.querySelector("#container-password");

// let charset = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%*|(){}[]/+-_";
let charset = ""; 
let charsetNumbers = "0123456789";
let charsetLetters = "abcdefghijklmnopqrstuvwxyz";
let charsetLettersUpper = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
let charsetSymbols = "!@#$%*|(){}[]/+-_";
let novaSenha = "";


sizePassword.innerHTML = sliderElement.value;

slider.oninput = function() {
    sizePassword.innerHTML = this.value;
}

if(document.querySelector("#numbers").checked) {
    charset += charsetNumbers;
}

if(document.querySelector("#letters").checked) {
    charset += charsetLetters;
}

if(document.querySelector("#symbols").checked) {
    charset += charsetSymbols;
}

function generatePassword() {
    let pass = "";

    for(let i = 0, n = charset.length; i < sliderElement.value; ++i) {
        pass += charset.charAt(Math.floor(Math.random() * n));
    } 

    containerPassword.classList.remove("hide");
    password.innerHTML = pass;

}