//Globals for TCId
var arrayy = [];
var overallSum = 0;

//Tested & Works fine 
function generateTCIdentity() {
    var randomNo = Math.floor(Math.random() * 999999999); //Generate first 9 numbers in Identity
    TCStr = randomNo.toString();

    for (var i = 0; i < TCStr.length; i++) {
        if (parseInt(TCStr.charAt(0)) != 0) {// index0 != 0
            arrayy[i] = parseInt(TCStr.charAt(i));  //Copy digits into arrayy
        } else {
            console.console.error("Identity number is not valid");
        }
    }

    var tenthElementOne = ((arrayy[0] + arrayy[2] + arrayy[4] + arrayy[6] + arrayy[8]));
    var tenthElementTwo = (arrayy[1] + arrayy[3] + arrayy[5] + arrayy[7]);
    var tenthElement = (7 * tenthElementOne - tenthElementTwo) % 10;

    arrayy.push(tenthElement);

    var eleventhIndex;
    for (var i = 0; i < arrayy.length; i++)
        overallSum = (overallSum + arrayy[i]);

    eleventhIndex = overallSum % 10;
    arrayy.push(eleventhIndex);

    var result = "";
    for (var i = 0; i < arrayy.length; i++) {
        result = result + arrayy[i].toString();
    }
    return result;
}

console.log("Please enter y to generate a valid state id "
    + "or enter n to exit the program.");

// Get process.stdin as the standard input object.
var user_input = process.stdin;
// Set input character encoding.
user_input.setEncoding('utf-8');

user_input.on('data', function (data) {
    // User input exit.
    if (data === 'n\n') {
        // Program exit.
        console.log("Terminating program.");
        process.exit();
    } else {
        var state_id = generateTCIdentity();
        console.log("The generated state id is: " + state_id);
        process.exit();
    }
});