function solve() {
    let textInput = document.getElementById('input').value;
    let sum = 0;
    for (const character of textInput) {
        if (character === '1') {
            sum++;
        }
    }

    sum = convertSum(String(sum));

    textInput = textInput.slice(sum, textInput.length - sum);

    let splitedText = textInput.match(/.{1,8}/g);

    let result = '';
    for (const part of splitedText) {
        let convertedToDecimal = parseInt(part, 2);

        let convertedToAscii = String.fromCharCode(convertedToDecimal);
        console.log(convertedToAscii)
        if (/[A-Za-z ]+/.test(convertedToAscii)) {
            result += convertedToAscii;
        }
    }
    document.getElementById('resultOutput').textContent = result;

    function convertSum(sum) {
        while (sum.length > 1) {
            let ArrayFromSum = sum.split('');
            ArrayFromSum = ArrayFromSum.reduce((prev, cur) => prev + Number(cur), 0);
            sum = String(ArrayFromSum);
        }
        return sum;
    }
}