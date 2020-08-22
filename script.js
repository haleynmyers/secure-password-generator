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

var values = {
  charLength: 8,
  includeLower: true,
  includeUpper: true,
  includeNumber: true,
  includeSpecial: true,
}

//User answers a series of questions to establish the parameters of the password needed.
function generatePassword(){
  values.charLength = parseInt(prompt("How many characters would you like in your password? Enter a number between 8 and 128."));
  values.includeLower = confirm("Would you like to include lowercase letters?");
  values.includeUpper = confirm("Would you like to include uppercase letters?");
  values.includeNumber = confirm("Would you like to include numbers?");
  values.includeSpecial = confirm("Would you like to include special characters?");

  //Log for answers
  console.log(values.charLength);
  console.log(values.includeLower);
  console.log(values.includeUpper);
  console.log(values.includeNumber);
  console.log(values.includeSpecial);


  var lowerOptions = "abcdefghijklmnopqrstuvwxyz";
  var upperOptions = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  var numberOptions = "1234567890";
  var specialOptions = "~!@#$%^&*()?><{}";
  
  //Concat all elements that user wants in desired password
  
  var desiredCharacters = [];

  if (values.includeLower) {
    desiredCharacters = desiredCharacters.concat(lowerOptions.split(""));
  }
  
  if (values.includeUpper) {
    desiredCharacters = desiredCharacters.concat(upperOptions.split(""));
  }
  
  if (values.includeNumber) {
    desiredCharacters = desiredCharacters.concat(numberOptions.split(""));
  }
  
  if (values.includeSpecial) {
    desiredCharacters = desiredCharacters.concat(specialOptions.split(""));
  }

  console.log(desiredCharacters);
  console.log(values.charLength);
  var passwordText = "";
  
  for (var i = 0; i < values.charLength; i++) {
    console.log(i);
    var randomNumber = Math.floor(Math.random() * desiredCharacters.length);
    passwordText = passwordText.concat(desiredCharacters[randomNumber]);
    console.log(desiredCharacters[randomNumber]);
  }

  return passwordText;
}

  

// WHEN I click the button to generate a password
// THEN I am presented with a series of prompts for password criteria
// WHEN prompted for password criteria
// THEN I select which criteria to include in the password
// WHEN prompted for the length of the password
// THEN I choose a length of at least 8 characters and no more than 128 characters
// WHEN prompted for character types to include in the password
// THEN I choose lowercase, uppercase, numeric, and/or special characters
// WHEN I answer each prompt
// THEN my input should be validated and at least one character type should be selected
// WHEN all prompts are answered
// THEN a password is generated that matches the selected criteria
// WHEN the password is generated
// THEN the password is either displayed in an alert or written to the page