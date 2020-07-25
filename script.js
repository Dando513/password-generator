//Generator Functions




// Assignment Code
var generateBtn = document.querySelector("#generate");

function generatePassword(){
var pwLength = prompt("Enter pw length(8-128 characters)");
    var caps = confirm("Do you want capital letters?");
    var lcase = confirm("Do you want lower case letters?");
    var nums = confirm("Do you want numbers?");
    var chars = confirm("Do you want special characters?");

      var criteria = "";

      if (caps===true) {
        criteria += 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
      }
     
      if (lcase===true) {
        criteria += 'abcdefghijklmnopqrstuvwxyz';
      }
     
      if (nums===true){
       criteria += '0123456789';
      }
      
      if (chars===true){
        criteria +=  '@#$!@#$%^&*(';
      }
  
        console.log(criteria)

      var password ="";
      for(i=0;i<pwLength;i++){
          password+= criteria.charAt(Math.floor(Math.random()*criteria.length))
        console.log(password)
      }
      console.log(password)
      return password
    }


// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");


  
  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

