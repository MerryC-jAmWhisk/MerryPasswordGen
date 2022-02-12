// Assignment code here
const alphabetUpper = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"];
const alphabetLower = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
const numberArr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];
const specialCharArr = ["!","#","$","%","&","*"];
var allPossibleChars = [];
var generatedPassword = '';

// execute this function when click generate password button
function generatePassword(){
  // user determines the length of the password
  var passwordLength = window.prompt("Choose your password length. Please type a number between 8 and 128");
  var x = passwordLength;
  switch (true) {
    case (x < 8):
      window.alert("You did not pick a valid option. Try again.");
      generatePassword();
      break;
    case (x < 129):
      break;
    default:
      window.alert("You did not pick a valid option. Try again.");
      // call function again to force user pick a valid option
      generatePassword();
      break;
  }

  // ask what character types user want to include
  var lowerConfirm = window.confirm('Would you like to include lowercase in the password?');
  if(lowerConfirm) {
    allPossibleChars.push(alphabetLower);
  }else {}

  var upperConfirm = window.confirm('Would you like to include uppercase in the password?');
  if(upperConfirm) {
    allPossibleChars.push(alphabetUpper);
  }else {}

  var numericConfirm = window.confirm('Would you like to include numeric in the password?');
  if(numericConfirm) {
    allPossibleChars.push(numberArr)
  }else {}

  var specialConfirm = window.confirm('Would you like to include special characters in the password?');
  if(specialConfirm) {
    allPossibleChars.push(specialCharArr)
  }else {}

  console.log(allPossibleChars)

  var arrayIndex = 0;
  // loop through the user selected password length
  for(let i = 0; i < passwordLength; i++){
    console.log(arrayIndex)
    if(arrayIndex == allPossibleChars.length) {
      arrayIndex = 0;
    } 
    var passwordCharacterArr = allPossibleChars[arrayIndex];
    var index = Math.floor(Math.random()*passwordCharacterArr.length);
    var passwordCharacter = passwordCharacterArr[index];
    generatedPassword += passwordCharacter;
    arrayIndex++;
  }
  console.log(generatedPassword)

  writePassword();

}

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var passwordText = document.querySelector("#password");

  passwordText.value = generatedPassword;
}

// Add event listener to generate button
generateBtn.addEventListener("click", generatePassword);
