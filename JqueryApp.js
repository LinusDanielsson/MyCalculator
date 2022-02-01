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

  textInputField.val(""); //Tömmer inmatingsfältet
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

  textInputField.val(""); //Tömmer inmatingsfältet
});

//Eval(=) button function
buttonEval.on("click", function () {
  calcDisplayer.empty(); // .empty() som Tömmer vår calculation display.

  result = calcArray.reduce((a, b) => a + b, 0); // .reduce((a, b) => a + b, 0)) för att räkna ut vår array

  resultDisplayer.append(" " + result);

  calcArray = [];

  textInputField.val(""); //Tömmer inmatingsfältet
});

//Clear(C) button function

buttonClear.on("click", function () {
  textInputField.val("");
});

//Keyboard restriction function
//KeyCode: 48-57 = 0-9
//KeyCode: 8 = Backspace
textInputField.keypress(function (key) {
  if (key.charCode < 48 || (key.charCode > 57 && key.charCode != 8)) {
    return false;
  }
});

//Keyboard functions
//KeyCode: 13 = Enter
//KeyCode: 43 = +
//KeyCode: 45 = -
//KeyCode: 46 = Delete

textInputField.keypress(function (key) {
  if (key.which == 13) {
    buttonEval.click();
  }
  else if (key.which == 43) {
    buttonAdd.click();
  } 
  else if (key.which == 45) {
    buttonSub.click();
  } 
});

//Delete funkar inte på keypress utan bara på keydown/keyup. Något med printable characters att göra??
textInputField.keydown(function (key) {
    if (key.which == 46) {
      buttonClear.click();
    }
  });
