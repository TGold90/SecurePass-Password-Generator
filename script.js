// Assignment Code
var generateBtn = document.querySelector("#generate");

//PSEUDO CODE COMMENTS
// function to start the process
// inside of this function I am expected to be presented with password criteria *prompts*
// user must select which criteria to include in password
// user must select a password length between 8 and 128
// user selects which char types to include (lowercase, uppercase, numeric, special chars)
// after the selection process we need ot validate that at least 1 has been selected
// after all prompts answered, a password that matches criteria will be generated
// after pw generation it is displayed in alert or written to the page


// these are all of the possible character options defined into separate variables
var enter;
var specialChar = ['@', '$', '*', '!', '%', '&', '#', '?', '>', '.', '=', '+', '(', '-', ')', '<', '/', '\\', ';', '[', ']', ':', '{', '}', '|', '"', "'", '_'];
var numbers = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', ];
var lowerCaseLetters = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
var upperCaseLetters = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];

function criteriaOptions() {
  var pwLength = parseInt(prompt("Please select the character length of your password: between 8 and 128 characters."));
  if (pwLength < 8 || pwLength > 128) {
    alert ("Password length must be between 8 and 128 characters.");
    return null;
  }
  var specialCharConfirm = confirm("Would you like to include special characters?")
  var numbersConfirm = confirm("Would you like to include numbers?")
  var lowerCaseConfirm = confirm("Would you like to include lower case letters?")
  var upperCaseConfirm = confirm("Would you like to include upper case letters?")

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
    upperCaseConfirm: upperCaseConfirm,
  };
  return criteriaSelection;
} 

// Write password to the #password input
//invokes generate password
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

function randomNum(arr) {
  //going to use Math.random and * by arr.length
  var randomIndex = Math.floor(Math.random() * arr.length);
  //grabbing random element based on array index
  var randomEl = arr[randomIndex];
  return randomEl;
}

//this function will generate a password based off of the criteria selected in the criteriaOptions (invokes criteriaOptions) function 
function generatePassword() {
  var options = criteriaOptions();
  //final result
  var finalResult = [];
  //array of all possible characters
  var allCharacters = [];
  //random amount of each character array
  var randomChars = [];
  //get a random selection of chars based on user input
  //concatenate all choices we made
  if (options.specialCharConfirm) {
    allCharacters = allCharacters.concat(specialChar);
    //will push a random amount of special characters using math.random
    randomChars.push(randomNum(specialChar));
    options.pwLength--
  }
  if (options.numbersConfirm) {
    allCharacters = allCharacters.concat(numbers);
    //will push a random amount of numbers using math.random
    randomChars.push(randomNum(numbers));
    options.pwLength--
  }
  if (options.lowerCaseConfirm) {
    allCharacters = allCharacters.concat(lowerCaseLetters);
    //will push a random amount of lower case letters using math.random
    randomChars.push(randomNum(lowerCaseLetters));
    options.pwLength--
  }
  if (options.upperCaseConfirm) {
    allCharacters = allCharacters.concat(upperCaseLetters);
    //will push a random amount of upper case letters using math.random
    randomChars.push(randomNum(upperCaseLetters));
    options.pwLength--
  }

  //need to write code that will take all of these if statements and the random values from each one and make a password at the length selected in pwLength

  for (let i = 1; i <= options.pwLength; i++) {
    randomChars.push(randomNum(allCharacters));
  }
  return randomChars.join('')

}


// Add event listener to generate button
//invokes writePassword function
generateBtn.addEventListener("click", writePassword);
