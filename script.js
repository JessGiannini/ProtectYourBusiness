// Assignment Code
var generateBtn = document.querySelector("#generate");


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

// var random = function(x){
//   var value = x[Math.floor(Math.random() * x.length)]
//   return value
// }

var userLength = prompt("Select length of password between 8-128.");
var userNumber = confirm("Do you want to include numbers?");
var userSpecial = confirm("Do you want to include special characters?");
var userAlpha = confirm("Do you want to include letters?");



// while statements
function generatePassword() {

  if (userLength === alphabet) {
array.push(alphabet)
  }

}


// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);


