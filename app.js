document.getElementById("operator").addEventListener("click", add);
document.getElementById("eval").addEventListener("click", evalMe);

let calcArray = [];

function add() {
    let inputField = document.getElementById("inputField").value;
    let calcDisplay = document.getElementById("calcDisplay");
    calcDisplay.innerHTML += inputField + "+";
    calcArray.push(inputField);
    calcArray.push("+");
    resultDisplay.innerHTML = "";

    console.log(calcArray);
}

function evalMe() {
    let lastChar = calcArray[calcArray.length - 1];
    if (lastChar == "+") {
        calcArray.pop();
        document.getElementById("resultDisplay");
        let resultatet = eval(calcArray.join(""));
        document.getElementById("resultDisplay").innerHTML = resultatet;
        inputField.value = "";

        console.log(resultatet);


    } else if (calcArray.length == 0) {
        alert("Inga tal hittade");
        return;


    } else {
        let resultDisplay = document.getElementById("resultDisplay");
        let resultatet = eval(calcArray.join(""));
        resultDisplay.innerHTML = resultatet;
        resultDisplay.innerHTML = "";

        console.log(resultatet);

    }

    calcArray.splice(0, calcArray.length);
    inputField.value = "";
    calcDisplay.innerHTML = "";
}
