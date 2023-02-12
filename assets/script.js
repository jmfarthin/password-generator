// The following code adds functionality to the password generator

//The object below contatins all of the possible characters for the password generator
let characterTypes = {
  special: " !@#$%^&*()~?/`-_=+[{]};:,.\'<>|",
  numbers: "0123456789",
  lowerCaseLetters: "abcdefghijklmnopqrstuvwxyz",
  upperCaseLetters: "ABCDEFGHIJKLMNOPQRSTUVWXYZ",
}

// The following function prompts the user through a series of questions to customize their password after the user clicks 'generate password'
function generatePassword() {
  let randomPassword = ""
  let useCharacters = ""
  let numCharacters = prompt("How many characters would you like your password to be? \nMinimum: 8 \nMaximum: 128");

  numCharacters = parseInt(numCharacters)

  // Cancels the function if the user clicks cancel 
  if (!numCharacters) {
    return;
  }

  // Check to see if the user picked a character within the length and type guidelines
  if (typeof numCharacters === 'number' && numCharacters >= 8 && numCharacters <= 128) {
    alert("Your password will be " + numCharacters + " characters long.");

    // the following if statements allow the user to customize their password by deciding what type of characters to include
    // if the user decides to include a group of characters, the corresponding key is then added to the variable 'useCharacters' to be used for password generation
    let characterSelect = confirm("Would you like to use special characters?")

    if (characterSelect) {
      useCharacters += characterTypes.special
      console.log(useCharacters);
    }

    characterSelect = confirm("Would you like to use numbers?")

    if (characterSelect) {
      useCharacters += characterTypes.numbers
      console.log(useCharacters);
    }
    characterSelect = confirm("Would you like to use lowercase letters?")

    if (characterSelect) {
      useCharacters += characterTypes.lowerCaseLetters
      console.log(useCharacters);
    }
    characterSelect = confirm("Would you like to use uppercase letters?")

    if (characterSelect) {
      useCharacters += characterTypes.upperCaseLetters
      console.log(useCharacters);
    }
    // creates the password--using Math.random to randomize the character selection from useCharacters
    for (var i = 0; i < numCharacters; i++) {
      let randomNum = Math.floor(Math.random() * useCharacters.length);
      randomPassword += useCharacters.substring(randomNum, randomNum + 1)
    }
    //Write password to the #password input
    var passwordText = document.querySelector("#password")
    passwordText.value = randomPassword
    // if user doesn't select between 8-128 characters, they are returned to the start of the function
  } else {
    alert("You need at least 8 characters!");
    generatePassword();
  }
}

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Add event listener to generate button
generateBtn.addEventListener("click", generatePassword);
