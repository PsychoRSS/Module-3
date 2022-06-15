// Assignment code here


// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword(event) {
  event.preventDefault();

  let lengthinputquestion = window.prompt("what is the length of your string")

  let choosenOptions = [];

  let questionLoopArray = [
  "Do you want lowecase?", 
"Do you want UpperCase?", 
"Do you want numerics?", 
"Do you want special characters?"];

  for (let index = 0; index < questionLoopArray.length ; ++index)
  {
    let userPrompt = window.prompt(questionLoopArray[index] + " Type yes or no");
      
       if (userPrompt.toLowerCase() == "yes")
      {
        choosenOptions.push(index)
      }
  }

    var password = generatePassword(Number(lengthinputquestion), choosenOptions);
    var passwordText = document.querySelector("#password");
    
    passwordText.value = password;
}
  
function generatePassword(length , array)
{
  const lowercaseletters = "abcdefghijklmnopqrstuvwxyz"
  const uppercaseLetters = lowercaseletters.toUpperCase()
  const numbers = "0123456789"

  const sp = ['@', '%', '+', '\\', '/', '`', '!', '#', '$', '^', '?', ':', ',', ')', '(', '{', ']', '[', '}', '~', '_', ',', '-'].join("")

  
  let generateString = "";

  for (let index = 0; index < length; ++index)
  {
    let generateStringwithinrangeofoptions = array[Math.floor(Math.random() * array.length)];
    console.log(generateStringwithinrangeofoptions)
    switch(generateStringwithinrangeofoptions)
    {
    case 0:
       generateString += lowercaseletters[Math.floor(Math.random() * lowercaseletters.length)]
       break;
    case 1:
        generateString += uppercaseLetters[Math.floor(Math.random() * uppercaseLetters.length)]
       break
     case 2:
        generateString += numbers[Math.floor(Math.random() * numbers.length)]
        break
    case 3:
        generateString += sp[Math.floor(Math.random() * sp.length)]
        break
    default:
      console.log("error") 
    }
  }

  return generateString
}
// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
