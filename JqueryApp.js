var buttonAdd = $("#add");
var buttonSub = $("#sub");
var buttonEval = $("#eval");

var textInputField = $("#inputField");

var calcDisplayer = $("#numDisplay");
var resultDisplayer = $("#calcResultDisplay");

var calcArray = [];


//Add(+) button function
buttonAdd.on("click", function(){

    resultDisplayer.empty(); // .empty() som Tömmer vår result display.

    textToNumber = Number(textInputField.val()); // Gör om vår text till ett nummer value

    calcArray.push(textToNumber); // .push() för att få in det inmatade nummret till Array

    if (calcArray.length == 1) {    //IF sats för att förhindra en operator från att visas först i vår calcDisplayer
        calcDisplayer.append(textToNumber); 
    }

    else {
        calcDisplayer.append(" + " + textToNumber);
    }

    textInputField.val(""); //Tömmer inmatingsfältet

});

//Sub(-) button function
buttonSub.on("click", function(){

    resultDisplayer.empty(); // .empty() som Tömmer vår result display.

    textToNumber = Number(textInputField.val()); // Gör om vår text till ett nummer value

    calcArray.push(-textToNumber); // .push() för att få in det inmatade nummret till Array

    if (calcArray.length == 1) {    //IF sats för att förhindra en operator från att visas först i vår calcDisplayer
        calcDisplayer.append(textToNumber); 
    }

    else {
        calcDisplayer.append(" - " + textToNumber);
    }

    textInputField.val(""); //Tömmer inmatingsfältet

});