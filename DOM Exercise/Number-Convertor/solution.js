function solve() {
    let menu = document.getElementById('selectMenuTo');

    let newOption = document.createElement('option');
    newOption.textContent = 'Hexadecimal';
    newOption.value = 'hexadecimal';
    menu.appendChild(newOption);

    let options = document.getElementById('selectMenuTo').children;

    options[0].textContent = 'Binary';
    options[0].value = 'binary';

    let button = document.getElementsByTagName('button')[0];
    button.addEventListener('click', convert);

    function convert() {
        let inputNum = document.getElementById('input').value;
        if (options[0].selected) {

            document.getElementById('result').value = Number(inputNum).toString(2);
        }
        else {
            document.getElementById('result').value = Number(inputNum).toString(16).toUpperCase();
        }
    }
}