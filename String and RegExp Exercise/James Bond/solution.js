function solve() {
    let inputArr = JSON.parse(document.getElementById('array').value);
    let key = inputArr.shift();
    String.prototype.replaceAll = function(obj) {
        let currentString = this;
        for (const key in obj) {
            currentString = currentString.replace(new RegExp(`\\${key}`, 'g'), obj[key]);
        }
        return currentString;
    };
    for (let message of inputArr) {
        let modifiedMessage = message.replace(new RegExp(`${key}`, 'gi'), key.toLowerCase());
        let messagePattern = new RegExp(`${key.toLocaleLowerCase()}[\\ ]+([A-Z\\!\\%\\$\\#]{8,})([\\.\\,\\ ]|\$)`, 'g');
        let matchedMessage;
        while (matchedMessage = messagePattern.exec(modifiedMessage)) {
            let temp = matchedMessage[1];
            let replaced = matchedMessage[1].replaceAll({ '!': '1', '%': '2', '#': '3', '$': '4' });
            temp = temp.replaceAll({ '$': '\\$', '!': '\\!', '#': '\\#', '%': '\\%' });
            let pattern = new RegExp(`${temp}`);
            message = message.replace(pattern, replaced.toLocaleLowerCase());
        }
        let newP = document.createElement('p');
        newP.textContent = message;
        document.getElementById('result').appendChild(newP);
    }
}