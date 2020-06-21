function solve() {
    let testText = document.getElementById('text').value;
    let result = document.getElementById('result');
    let output = '';
    for (const element of testText.split(' ').filter(el => el !== ' ')) {
        if (Number(element)) {
            output += String.fromCharCode(element);
        } else {
            let wordToNumber = [];
            for (const character of element) {
                wordToNumber.push(character.charCodeAt());
            }
            let newP = document.createElement('p');
            newP.innerHTML = wordToNumber.join(' ');
            result.appendChild(newP);
        }
    }
    let newP = document.createElement('p');
    newP.innerHTML = output;
    result.appendChild(newP);
}