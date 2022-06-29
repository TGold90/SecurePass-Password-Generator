// Assignment Code
var generateBtn = document.querySelector("#generate");

var enter;
var specialChar = ['@', '$', '*', '!', '%', '&', '#', '?', '>', '.', '=', '+', '(', '-', ')', '<', '/', '\\', ';', '[', ']', ':', '{', '}', '|', '"', "'", '_'];
var numbers = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', ];
var lowerCaseLetters = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
var upperCaseLetters = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];

function criteriaOptions() {
  var pwLength = parseInt(prompt("Please select the character lenght of your password: between 8 and 128 characters."));
  if (pwLength < 8 || pwLength > 128) {
    alert ("Password length must be between 8 and 128 characters.");
    return null;
  }
  var specialCharConfirm = confirm("Would you like to include special characters?")
  var numbersConfirm = confirm("Would you like to include special characters?")
  var lowerCaseConfirm = confirm("Would you like to include special characters?")
  var upperCaseConfirm = confirm("Would you like to include special characters?")

  if (
      specialCharConfirm === false &&
      numbersConfirm === false &&
      lowerCaseConfirm === false &&
      upperCaseConfirm === false) {
        alert("You must select at least 1 criteria");
        return null;
      }
    
  var criteriaSelection = {
    pwLength: pwLength,
    specialCharConfirm: specialCharConfirm,
    numbersConfirm: numbersConfirm,
    lowerCaseConfirm: lowerCaseConfirm,
    upperCaseConfirm: upperCaseConfirm
  }
  return criteriaSelection;
} 
criteriaOptions();
console.log(criteriaSelection);

// function to start the process
// inside of this function I am expected to be presented with password criteria *prompts*
// user must select which criteria to include in password
// user must select a password length between 8 and 128
//user selects which char types to include (lowercase, uppercase, numeric, special chars)
//after the selection process we need ot validate that at least 1 has been selected
// after all prompts answered, a password that matches criteria will be generated
// after pw generation it is displayed in alert or written to the page

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  // enter = userInput (prompt("How long would you like your password to be? Must be between 8 and 128 characters."))

  passwordText.value = password;

}

function generatePassword() {

}


// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
