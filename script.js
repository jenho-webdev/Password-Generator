// Assignment Code
var generateBtn = document.querySelector("#generate");

//declear arrays
var specialChar ="!\"#$%&'()*+,-./:;<=>?@[\\]^_`{|}~";
var upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZz";
var lowerCase = "abcdefghijklmnopqrstuvwxy";
var numeric = "0123456789";




// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

//Generate Password per User's criteria.
function generatePassword() 
{
  // Prompt the user for password charslength and character types
  var charslength = parseInt(prompt("Enter the charslength of the password (between 8 and 128 characters):"));
  // validator for user's request on password length. must be between 8-128 chars.
  if (charslength < 8 || charslength > 128) {
    alert(
      "Invalid password length. Password length must be between 8 and 128 characters."
    );
    // if(false); break the program.
    return "";
  }
  // Declear var to store user's input on char types.
  var useLower = confirm("Include lowercase?");
  var useUpper = confirm("Include uppercase?");
  var useDigits = confirm("Include numbers?");
  var useSpecial = confirm("Include special characters?");
  // var for storing characters pool that will be created based on user-selected criteria.
  var finalCharacters = ""; 

  // check at least one type was selected. If not, alert msg and break program.
  if (!useLower && !useUpper && !useDigits && !useSpecial) {
    alert("At least one character type must be slected");
    return "";
  }

  // Create a characters pool based on user-selected criteria
  if (useUpper) {
    finalCharacters += upperCase;
  }
 
  if (useLower) {
    finalCharacters += lowerCase;
  }

  if (useDigits) {
    finalCharacters += numeric;
  }

  if (useSpecial) {
    finalCharacters += specialChar;
  }

  //var to store the password to be created
  var password = "";
  //for loop to go through number of time that user was given(password lenth - 1)
  //var act as a step up 
 
  for (var step = 0; step < charslength; step++) {

    //randomIdex to store each random number that the for loop generate each time it run throug.
    // Random number is generated base on the number of chars in the pool.
    var randomIdex = Math.floor(Math.random() * finalCharacters.length);


    password += finalCharacters[randomIdex];
  }
  return password;
}

