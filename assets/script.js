// Assignment code here
function generatePassword() {
  let randomPassword = ""

  let numCharacters = prompt("How many characters would you like your password to be? \nMinimum: 8 \nMaximum: 128");

  numCharacters = parseInt(numCharacters)

  if (!numCharacters) {
    return;
  }

  if (typeof numCharacters === 'number' && numCharacters >= 8 && numCharacters <= 128) {
    alert("Thank you!");
  } else {
    alert("You need at least 8 characters!");
    return;
  }

  return numCharacters;
}

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
