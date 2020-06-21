function solve() {
    let text = document.getElementById('text').value;
    let number = document.getElementById('number').value;
    let result = document.getElementById('result');
    let i = 0;
    while (text.length % number !== 0) {
        text += text[i];
        i++;
    }
    let arr = text.match(new RegExp(`.{${number}}`, 'g'));
    result.innerHTML = arr.join(' ');

}