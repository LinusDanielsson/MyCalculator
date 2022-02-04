var buttonAdd = $("#add");
var buttonSub = $("#sub");
var buttonEval = $("#eval");
var buttonClear = $("#clear");

var textInputField = $("#inputField");
var calcDisplayer = $("#numDisplay");
var resultDisplayer = $("#calcResultDisplay");

var calcArray = [];

//Add(+) button function
buttonAdd.on("click", function () {
  resultDisplayer.empty(); // .empty() som Tömmer vår result display.

  textToNumber = Number(textInputField.val()); // Gör om vår text till ett nummer value

  calcArray.push(textToNumber); // .push() för att få in det inmatade nummret till Array

  if (calcArray.length == 1) {
    //IF sats för att förhindra en operator från att visas först i vår calcDisplayer
    calcDisplayer.append(textToNumber);
  } else {
    calcDisplayer.append(" + " + textToNumber);
  }

  textInputField.val(""); //Tömmer inmatingsfältet med att lägga en tom sträng
});

//Sub(-) button function
buttonSub.on("click", function () {
  resultDisplayer.empty(); // .empty() som Tömmer vår result display.

  textToNumber = Number(textInputField.val()); // Gör om vår text till ett nummer value

  calcArray.push(-textToNumber); // .push() för att få in det inmatade nummret till Array

  if (calcArray.length == 1) {
    //IF sats för att förhindra en operator från att visas först i vår calcDisplayer
    calcDisplayer.append(textToNumber);
  } else {
    calcDisplayer.append(" - " + textToNumber);
  }

  textInputField.val(""); //Tömmer inmatingsfältet med att lägga en tom sträng
});

//Eval(=) button function
buttonEval.on("click", function () {
  calcDisplayer.empty(); // .empty() som Tömmer vår calculation display.

  if (calcArray.length <= 0 ){
      return;
  }
  else {
    result = calcArray.reduce((a, b) => a + b, 0); // .reduce((a, b) => a + b, 0)) för att räkna ut vår array

    resultDisplayer.append(result);

    calcArray = [];

    textInputField.val(""); //Tömmer inmatingsfältet med att lägga en tom sträng
  }
});

//Clear(C) button function
buttonClear.on("click", function () {
  textInputField.val("");
  calcArray = [];
  resultDisplayer.empty();
  calcDisplayer.empty();
});

//Keyboard restriction function
// https://keycode.info/ 
//KeyCode: 48-57 = 0-9
//KeyCode: 46 = . och Delete
//KeyCode: 8 = backspace
//KeyCode: 13 = Enter
//KeyCode: 43 = +
//KeyCode: 45 = -

textInputField.keypress(function (key) {
  if ((key.which < 48 || key.which > 57) && key.which != 46) {
    return false;
  }
});

textInputField.keypress(function (key) {
  if (key.which == 13) { //If key pressed trigger click on button
    buttonEval.click();
  }
  else if (key.which == 43) {
    buttonAdd.click();
  } 
  else if (key.which == 45) {
    buttonSub.click();
  } 
});

//Delete funkar inte på keypress utan bara på keydown/keyup. Något med printable characters att göra vad jag kunde hitta.
textInputField.keydown(function (key) {
    if (key.which == 46) {
      buttonClear.click();
    }
  });
