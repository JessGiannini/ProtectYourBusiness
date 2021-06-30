// Assignment Code
var specialCharacter = " !#$%&'()*+,-./:;<=>?@[]^_`{|}~".split();
var randomNumber = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
var upperAlpha = [
  "A",
  "B",
  "C",
  "D",
  "E",
  "F",
  "G",
  "H",
  "I",
  "J",
  "K",
  "L",
  "M",
  "N",
  "O",
  "P",
  "Q",
  "R",
  "S",
  "T",
  "U",
  "V",
  "W",
  "X",
  "Y",
  "Z",
];
var lowerAlpha = upperAlpha.map((name) => name.toLowerCase());
var generateBtn = document.querySelector("#generate");

var userLength = [];
//var userLength = Range(8, 128)parce javascript

//var password = "";

function generatePassword() {
  userLength = prompt("Enter the length of password between 8 - 128.");
  //console.log(userLength);
  while (
    userLength < 8 ||
    userLength > 128 ||
    userLength === null ||
    userLength === "" ||
    isNaN(userLength)
  ) {
    userLength = prompt(
      "Enter the correct length of password between 8 - 128."
    );
  }

  var userNumber = confirm("Do you want to include numbers?");
  var userSpecial = confirm("Do you want to include special characters?");
  var userAlphaUpper = confirm("Do you want to include upper case letters?");
  var userAlphaLower = confirm("Do you want to include lower case letters?");

  var passwordCharacters = [];
  console.log(passwordCharacters);
  if (userNumber) {
    passwordCharacters = passwordCharacters.concat(randomNumber);
  }
  console.log(passwordCharacters);
  if (userSpecial) {
    for (var i = 0; i < specialCharacter.length; i++) {
      passwordCharacters.push(specialCharacter[i]);
    }
  }

  if (userAlphaUpper) {
    for (var i = 0; i < upperAlpha.length; i++) {
      passwordCharacters.push(upperAlpha[i]);
    }
  }

  if (userAlphaLower) {
    for (var i = 0; i < lowerAlpha.length; i++) {
      passwordCharacters.push(lowerAlpha[i]);
    }
  }
  if (
    userNumber === true ||
    userSpecial === true ||
    userAlphaUpper === true ||
    userAlphaLower === true
  ) {
    console.log("checking user entry");
  } else {
    alert("Please make at least one selection!");
  }

  // while statements
  var password = [];

  for (var i = 0; i < userLength; i++) {
    password = password.concat(
      passwordCharacters[Math.floor(Math.random() * passwordCharacters.length)]
    );

    console.log(password);
  }

  return password.join("");
}
console.log(password);

//Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

//Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
