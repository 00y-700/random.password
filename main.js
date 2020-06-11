//DOM Elements
var passOut = document.querySelector("#password");
var generateBtn = document.querySelector("#generate");
var passLength = document.querySelector("#passLen");
var LowC = document.querySelector("#lower-case");
var UpC = document.querySelector("#upper-case");
var Num = document.querySelector("#number");
var SC = document.querySelector("#special");


// Function Outputs
var lc = getLowerCaseRndm();
var uc = getUpperCaseRndm();
var nm = getNumRndm();
var sc = getSymbolRndm();

var receiveArr = [lc, uc, nm, sc];

console.log(receiveArr)

generateBtn.addEventListener("click", function writePass() {
    const length = +passLength.value;
    const lower = LowC.checked;
    const upper = UpC.checked;
    const number = Num.checked;
    const symbol = SC.checked;



    passOut.innerHTML = passwordOut(lower, upper, number. symbol );
    // console.log(length)
    // console.log(lower)
    // console.log(upper)
});



// const randomGens = {
//     lc: getLowerCaseRndm,
//     uc: getUpperCaseRndm,
//     nm: getNumRndm,
//     sc: getSymbolRndm
// }

// Random Functions
function getLowerCaseRndm() {
    return String.fromCharCode(Math.floor(Math.random() * 26) + 97);  
}

console.log(getLowerCaseRndm());

function getUpperCaseRndm() {
  return String.fromCharCode(Math.floor(Math.random() * 26) + 65);  
}

console.log(getUpperCaseRndm());

function getNumRndm() {
  return String.fromCharCode(Math.floor(Math.random() * 10) + 48);  
}

console.log(getNumRndm());

function getSymbolRndm() {
  const symbols = "!@#$%^&*(),.?/[]"
  return symbols[Math.floor(Math.random() * symbols.length)];  
}

console.log(getSymbolRndm());


