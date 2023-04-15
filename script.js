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

//Generate Password per User's criteria.
function generatePassword() 
{
  //declear arrays
  var specialChar =
    "!,\",#,$,%,&,',(,),*,+,,,-,.,,:,;,<,=,>,?,@,[,\\,],^,_,`,{,|,},~";
  var upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZz";
  var lowerCase = "abcdefghijklmnopqrstuvwxy";
  var numeric = "0123456789";
  var finalCharacters = ""; 
  
  var charactersLength = prompt(
    "How many characters you want to have in your password?(8-128 characters)"
  );

  if (charactersLength < 8 || charactersLength > 128) {
    alert(
      "Invalid input. Password length must be between 8 and 128 characters."
    );
    ProcessingInstructon.exit(0);
  }

  var numOfTypes = 0;
  CharTypes();
  function CharTypes()
  {
  
    if (confirm("Do you want uppercase in your passowrd?")) {
      finalCharacters += upperCase;
      numOfTypes++;
    }

    if (confirm("Do you want lowercase in your passowrd?")) {
      finalCharacters += lowerCase;
      numOfTypes++;
    }

    if (confirm("Do you want numeric charaters in your passowrd?")) {
      finalCharacters += numeric;
      numOfTypes++;
    }

    if (confirm("Do you want Special charaters in your passowrd?")) {
      finalCharacters += specialChar;
      numOfTypes++;
    }
    return finalCharacters;
  }
  

  var password = "";

  if(numOfTypes > 0)
  {
    for (var step = 0; step < charactersLength; step++) 
    {
      var randomIdex = Math.floor(Math.random() * finalCharacters.length);
      password += finalCharacters[randomIdex];
    }
    return password;
  }
  else
  {
      alert("Please select to include at last one type of character for your password!");
      CharTypes();
  }

}

