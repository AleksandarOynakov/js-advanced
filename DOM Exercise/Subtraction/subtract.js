function subtract() {
    let firstNum = Number(document.getElementById('firstNumber').value);
    let secNum = Number(document.getElementById('secondNumber').value);

    let resultDiv = document.getElementById('result');
    resultDiv.textContent = firstNum - secNum;
}