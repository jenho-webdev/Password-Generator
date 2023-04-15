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
  var specialChar = '\!,\",\#,\$,\%,\&,\',\(,\),\*,\+,\,,\-,\.,\,\:,\;,\<,\=,\>,\?,\@,\[,\\,\],\^,\_,\`,\{,\|,\},\~';
  var upperCase = 'ABCDEFGHIJKLMNOPQRSTUVWXYZz';
  var lowerCase = 'abcdefghijklmnopqrstuvwxy';
  var numeric = '0123456789';
  var charactersLength = prompt("How many characters you want to have in your password?(8-128 characters)");
  var finalCharacters = '';
  var result = '';

  If(confirm("Do you want uppercase in your passowrd?"))
    {
      finalCharacters = finalCharacters + upperCase;
    }
    else if(confirm("Do you want lowercase in your passowrd?")
    {
      finalCharacters = finalCharacters + lowerCase;

    }
    else if(confirm("Do you want numeric charaters in your passowrd?")
    {
      finalCharacters = finalCharacters + numeric;
    }

  if(charactersLength <= 128 && charactersLength >= 8 )
  {
    for (let step = 0; step < charactersLength; step++)
    { 
      result = result + finalCharacters[step];
    }
    
  }
  return result;
}