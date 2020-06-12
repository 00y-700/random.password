// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

// user answers to password parameters function

function generatePassword() {
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
    getLowerCaseRndm()
    console.log("lower confrimed")
  }
  else {
    console.log("no lower")
  }
  const inputUC = confirm("Would you like upper case letters in your password?");
  if (inputUC === true) {
    getUpperCaseRndm()
    console.log("upper confirmed")
  }
  else {
    console.log("no upper")
  }
  const inputNum = confirm("Would you like numbers in your password?");
  if (inputNum === true) {
    getNumRndm()
    console.log("number confirmed")
  }
  else {
    console.log("no number")
  }
  const inputSym = confirm("Would you like special characters in your password?");
  if (inputSym === true) {
    getSymbolRndm()
    console.log("symbol confirmed")
  }
  else {
    console.log("no symbol")
  }
  // genaratePassword(passLength, inputLC, inputUC, inputNum, inputSym);
};

function getLowerCaseRndm() {
  const lowercase = "abcdefghijklmnopqrstuvwxyz"
  return lowercase[Math.floor(Math.random() * lowercase.length)];
}

function getUpperCaseRndm() {
  const uppercase = "QWERTYUIOPASDFGHJKLZXCVBNM"
  return lowercase[Math.floor(Math.random() * lowercase.length)];
}

function getNumRndm() {
  const numbers = "1234567890"
  return numbers[Math.floor(Math.random() * numbers.length)];
}

function getSymbolRndm() {
  const symbols = "!@#$%^&*()_-[]/?"
  return symbols[Math.floor(Math.random() * symbols.length)];
}