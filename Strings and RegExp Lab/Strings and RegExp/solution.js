function solve() {
    let testString = document.getElementById('text').value;
    let type = document.getElementById('naming-convention').value;
    let validPattern = /[a-z]+/gi;
    let result = [];
    let validString;
    if (!(type === 'Camel Case' || type === 'Pascal Case')) {
        document.getElementById('result').textContent = 'Error!';
    } else {
        while (validString = validPattern.exec(testString)) {
            if (result.length === 0) {
                if (type === 'Camel Case') {
                    result.push(validString[0].toLocaleLowerCase());
                    continue;
                }
            }
            let firstChar = validString[0].charAt(0).toUpperCase();
            result.push(`${firstChar}${validString[0].slice(1).toLocaleLowerCase()}`);
        }
        document.getElementById('result').textContent = result.join('');
    }
}