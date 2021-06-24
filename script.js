// Assignment Code
var generateBtn = document.querySelector("#generate");

var validLength = [];
var validInput = Range(8, 128)

var userLength = prompt("Enter the length of password between 8 - 128.");
passwordLength()

function passwordLength() {
userLength = prompt("Enter the length of password between 8 - 128.");
if (userLength<8||userLength>128||userLength==isNaN(userLength)===true)
  var userLength
else if(userLength === null)
  alert("Please enter a number between 8 - 128.")
else
    askAgain()
}

function askAgain(){
  userLength = prompt("Enter the length of password between 8 - 128.");
if (userLength<8||userLength>128||userLength==isNaN(userLength)===true)
  var userLength
else if(userLength === null)
  alert("Please enter a number between 8 - 128.")
else
    askAgain()
}



function lowerAlpha() {
  return String.fromCharCode(Math.floor(Math.random() *26) +97) 
}

function upperAlpha() {
  return String.fromCharCode(Math.floor(Math.random() * 26) +65)
}

function RandomNumber() {
  return String.fromCharCode(Math.floor(Math.random() *10) +48);
}

function RandomSpecial() {
  const specialCharacter = " !#$%&'()*+,-./:;<=>?@[\]^_`{|}~"
  return specialCharacter[Math.floor(Math.random() * specialCharacter.length)];
}



//for (let i = 0; i < userLength; i++){
  




// while statements
 function generatePassword() {

 }


// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

