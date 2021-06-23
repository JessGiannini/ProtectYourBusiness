// Assignment Code
var generateBtn = document.querySelector("#generate");

var number = ["0", "1", "2", "3"..."9"]
var lowerCaseLetter
var upperCaseLetter
var specialCharacter
var random = function(x){
  var value = x[Math.floor(Math.random() * x.length)]
  return value
}
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


