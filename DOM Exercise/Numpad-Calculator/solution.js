function solve() {
    let operations = {
        '+': (a, b) => a + b,
        '-': (a, b) => a - b,
        '*': (a, b) => a * b,
        '/': (a, b) => a / b
    }
    let buttons = document.getElementsByClassName('keys')[0].children;

    for (let button of Array.from(buttons)) {
        button.addEventListener('click', display);
    }

    let clearButton = document.getElementsByClassName('clear')[0];
    clearButton.addEventListener('click', clear);

    let firstNum = '';
    let secNum = '';
    let operator = '';

    function display() {
        if ((isFinite(Number(this.value)) || (String(this.value) === '.' && firstNum !== '')) && operator === '') {
            document.getElementById('expressionOutput').textContent += this.value;
            firstNum += this.value;

        }
        else if (/[^d=.]/.test(String(this.value)) && firstNum !== '' && operator === '') {
            document.getElementById('expressionOutput').textContent += ` ${this.value} `;
            operator += this.value;

        }
        else if (isFinite(Number(this.value)) || (String(this.value) === '.' && secNum !== '') && operator != '') {
            document.getElementById('expressionOutput').textContent += this.value;
            secNum += this.value;

        }
        else if (/=/.test(String(this.value))) {
            if (firstNum !== '' && secNum !== '' && operator !== '') {
                document.getElementById('resultOutput').textContent = operations[operator](Number(firstNum), Number(secNum));
            }
            else {
                document.getElementById('resultOutput').textContent = 'NaN';
            }
        }
    }

    function clear() {
        document.getElementById('expressionOutput').textContent = '';
        document.getElementById('resultOutput').textContent = '';
        firstNum = '';
        secNum = '';
        operator = '';
    }
}