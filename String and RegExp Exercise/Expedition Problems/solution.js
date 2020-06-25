function solve() {
    let separator = document.getElementById('string').value;
    let text = document.getElementById('text').value;
    let eastPattern = /(north|east).*?(\d{2})[^,]*?,[^,]*?(\d{6})/gi;

    let east = '';
    let north = '';
    while (valid = eastPattern.exec(text)) {
        if (valid[1].toLowerCase() === 'east') {
            east = `${valid[2]}.${valid[3]} E`;
        } else {

            north = `${valid[2]}.${valid[3]} N`;
        }
    }
    let message = new RegExp(`${separator}(.*)${separator}`);
    let matchedMessage = text.match(message);

    let messageResult = `Message: ${matchedMessage[1]}`;
    let newPEast = document.createElement('p');
    newPEast.innerHTML = east;
    let newPNorth = document.createElement('p');
    newPNorth.innerHTML = north;
    let newPMessage = document.createElement('p');
    newPMessage.innerHTML = messageResult;
    let resultOutput = document.getElementById('result');
    resultOutput.appendChild(newPNorth);
    resultOutput.appendChild(newPEast);
    resultOutput.appendChild(newPMessage);
}