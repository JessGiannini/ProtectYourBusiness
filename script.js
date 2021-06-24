// Assignment Code
var generateBtn = document.querySelector("#generate");

var validLength = [];
//var validInput = Range(8, 128)

passwordLength()

function passwordLength() {
 var userLength = prompt("Enter the length of password between 8 - 128.")
 console.log(userLength)
if (userLength>8 && userLength<128) {
  var userNumber = confirm("Do you want to include numbers?");
  var userSpecial = confirm("Do you want to include special characters?");
  var userAlphaUpper = confirm("Do you want to include upper case letters?");
  var userAlphaLower = confirm("Do you want to include lower case letters?");
if (userNumber === true || userSpecial === true || userAlphaUpper === true || userAlphaLower === true) {
  console.log("checking user entry") 
} else {
  alert("Please make at least one selection!")
}

}
else if(userLength === null){
console.log("i am a null")  
alert("Please enter a number between 8 - 128.")
} else {
    console.log("this is the else")
  passwordLength()
}
}

// function askAgain(){
//   var userLength = prompt("Enter the length of password between 8 - 128.")
//  console.log(userLength)
// if (userLength>8 && userLength<128) {
// console.log("i am here")}
// else if(userLength === null){
// console.log("i am a null")  
// alert("Please enter a number between 8 - 128.")
// } else {
//     console.log("this is the else")
//   askAgain()
// }
// }



 //functions used to create password characters
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



// for (let i = 0; i < userLength; i++){
//   while (userAlphaUpper === true) {
//     upperAlpha()
//   }
// }



// while statements
//  function generatePassword() {
  
//  }


// Write password to the #password input
// function writePassword() {
//   var password = generatePassword();
//   var passwordText = document.querySelector("#password");

//   passwordText.value = password;

// }

// Add event listener to generate button
//generateBtn.addEventListener("click", writePassword){}}