const lengthSelect = document.getElementById("length");
const includeNumbers = document.getElementById("include-numbers");
const includeLetters = document.getElementById("include-letters");
const includeSymbols = document.getElementById("include-symbols");
const generateBtn = document.getElementById("generate-btn");
const resultField = document.getElementById("result");
const copyBtn = document.getElementById("copy-btn");

const NUMBERS = "0123456789";
const LETTERS = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
const SYMBOLS = "!@#$%^&*()_+-=[]{}|;:<>?";



generateBtn.addEventListener("click", function () {
    const length = parseInt(lengthSelect.value);

    let pool = "";
    if (includeNumbers.checked) {
        pool += NUMBERS;
    }
    if (includeLetters.checked) {
        pool += LETTERS;
    }
    if (includeSymbols.checked) {
        pool += SYMBOLS;
    }

    if (pool === "") {
        pool = "abcdefghijklmnopqrstuvwxyz";
    }

    let password = "";
    for (let i = 0; i < length; i++) {
        const randomIndex = Math.floor(Math.random() * pool.length);
        password += pool[randomIndex];
    }

    resultField.value = password;
});

copyBtn.addEventListener("click", function () {
    if (resultField.value === "") {
        return;
    }
    navigator.clipboard.writeText(resultField.value);

    copyBtn.textContent = "Kopierat!";
    setTimeout(function () {
        copyBtn.textContent = "Kopiera";
    }, 1000);
});