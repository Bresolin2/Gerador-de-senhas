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
let charsetSymbols = "!@#$%*|(){}[]/\\+-_";
let novaSenha = "";


sizePassword.innerHTML = sliderElement.value;

slider.oninput = function () {
    sizePassword.innerHTML = this.value;
}

function generatePassword() {
    let pass = "";
    let charset = "";
    
    if (document.querySelector("#numbers").checked) {
        charset += charsetNumbers;
    }
    
    if (document.querySelector("#lowercase").checked) {
        charset += charsetLetters;
    }
    
    if (document.querySelector("#uppercase").checked) {
        charset += charsetLettersUpper;
    }
    
    if (document.querySelector("#symbols").checked) {
        charset += charsetSymbols;
    }
    for (let i = 0, n = charset.length; i < sliderElement.value; ++i) {
        pass += charset.charAt(Math.floor(Math.random() * n));
    }

    containerPassword.classList.remove("hide");
    password.innerHTML = pass;

}

function copyPassword() {
    let textarea = document.createElement("textarea");
    textarea.value = password.innerHTML;
    document.body.appendChild(textarea);
    textarea.select();
    document.execCommand("copy");
    textarea.remove();
    alert("Senha copiada!");
}