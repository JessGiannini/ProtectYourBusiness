// Assignment Code
var specialCharacter = " !#$%&'()*+,-./:;<=>?@[\]^_`{|}~"
var randomNumber = "0123456789"
var upperAlpha = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
var lowerAlpha = "abcdefghijklmnopqrstuvwxyz"
var generateBtn = document.querySelector("#generate");

var userLength = [];
//var userLength = Range(8, 128)parce javascript
var passwordCharacters = [];
var password = "";


passwordLength()

function passwordLength() {
  passwordCharacters = [];
 var userLength = prompt("Enter the length of password between 8 - 128.")
 console.log(userLength)
if (userLength>8 && userLength<128) {
  var userNumber = confirm("Do you want to include numbers?");
  if (userNumber){
    passwordCharacters.push(randomNumber)
  }
  var userSpecial = confirm("Do you want to include special characters?");
  if (userSpecial){
    passwordCharacters.push(specialCharacter)
  }
  var userAlphaUpper = confirm("Do you want to include upper case letters?");
  if (userAlphaUpper){
    passwordCharacters.push(upperAlpha)
  }
  var userAlphaLower = confirm("Do you want to include lower case letters?");
  if (userAlphaLower){
    passwordCharacters.push(lowerAlpha)
  }
if (userNumber === true || userSpecial === true || userAlphaUpper === true || userAlphaLower === true) {
  console.log("checking user entry") 
} else {
  alert("Please make at least one selection!")
}

}
}


// while statements
function generatePassword() {
  
  for (let i = 0; i < userLength; i++){
  password = passwordCharacters[Math.floor(Math.random() * passwordCharacters.length)];
  
  
  }
  
  return password
}


//Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

//Add event listener to generate button
generateBtn.addEventListener("click", writePassword)

 //functions used to create password characters


//String.fromCharCode(Math.floor(Math.random() *26) +97) 
// console.log(lowerAlpha);



//   return String.fromCharCode(Math.floor(Math.random() * 26) +65)
// }


//   return String.fromCharCode(Math.floor(Math.random() *10) +48);
// }

// function RandomSpecial() {

//   return specialCharacter[Math.floor(Math.random() * specialCharacter.length)];
// }
