//Globals for CreditCard
let array = [];
var validcardStr = "";
var digit;

//Function tested & works fine
function checkValidity(){
    var number = Math.floor(Math.random() * 9999999999999999); //Generate a random 16 digit number

    var numberStr = number.toString();
    var value;

    for(var i = 0; i < numberStr.length; i++){ //copy string to an array
        array[i] = parseInt(numberStr.charAt(i));
    }

    for(var i = array.length -1; i >= 0; i-=2){ 
      value = array[i];
      value = value * 2;
      var valueStr = value.toString();
 
      if(valueStr.length == 2){
          digit = parseInt(valueStr.charAt(0)) + parseInt(valueStr.charAt(1));
      }
    }

    for(var i = array.length -1; i >= 0; i-=2){  //update array indexes with the corresponding digit value 
        array[i] = digit;
    }

    for(var i = 0; i < array.length; i++){
        validcardStr = validcardStr + array[i].toString(); 
    }

    for(var i = 0; i < array.length; i++){
        var sum = 0;
        sum = sum + array[i];
        if(sum % 10 == 0){
            console.log("Credit card number is valid");
            return validcardStr;
        }
    }
}

var strr = checkValidity();
console.log(strr);