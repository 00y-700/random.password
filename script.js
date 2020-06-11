// Assignment Code
var generateBtn = document.querySelector("#generate");


// Functions defined
const randomGens = {
  LC: getLowerCaseRndm,
  UC: getUpperCaseRndm,
  NM: getNumRndm,
  SC: getSymbolRndm
};

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

// Write password to the #password input
function writePassword() {
  const parameters = userParameters();
  const password = generatePassword();
  const passwordText = document.querySelector("#password");

  passwordText.value = password;

}

function generatePassword(LC, UC, NM, SC, passLength) {
  let generatePassword = '';

  const typesCount = inputLC + inputUC
}

// user answers to password parameters function

function userParameters() {
  const passLength = parseInt(prompt("How long do you want your password? (8-128)"));
  if (typeof(passLength) === "number" && passLength >= 8 && passLength <= 128) {
    console.log(passLength)
    console.log("valid password length")
  }
  else {
    console.log("invalid password length")
    userParameters()
  }
  const inputLC = confirm("Would you like lower case letters in your password?");
  if (inputLC === true) {
    getLowerCaseRndm
    console.log("lower confrimed")
  }
  else {
    console.log("no lower")
  }
  const inputUC = confirm("Would you like upper case letters in your password?");
  if (inputUC === true) {
    getUpperCaseRndm
    console.log("upper confirmed")
  }
  else {
    console.log("no upper")
  }
  const inputNum = confirm("Would you like numbers in your password?");
  if (inputNum === true) {
    getNumRndm
    console.log("number confirmed")
  }
  else {
    console.log("no number")
  }
  const inputSym = confirm("Would you like special characters in your password?");
  if (inputSym === true) {
    getSymbolRndm
    console.log("symbol confirmed")
  }
  else {
    console.log("no symbol")
  }
  genaratePassword(passLength, inputLC, inputUC, inputNum, inputSym);
};

//Random Character Functions
//Functions adapted from Florian Pop https://codepen.io/FlorinPop17/pen/BaBePej?editors=0010

function getLowerCaseRndm() {
    return String.fromCharCode(Math.floor(Math.random() * 26) + 97);  
}

console.log(getRandomLowerCase);

function getUpperCaseRndm() {
  return String.fromCharCode(Math.floor(Math.random() * 26) + 65);  
}

console.log(getRandomUpperCase);

function getNumRndm() {
  return String.fromCharCode(Math.floor(Math.random() * 10) + 48);  
}

console.log(getRandomNumber);

function getSymbolRndm() {
  const symbols = "!@#$%^&*(),.?/[]"
  return symbols[Math.floor(Math.random() * symbols.length)];  
}

console.log(getRandomSymbol);






