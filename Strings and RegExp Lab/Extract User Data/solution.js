function solve() {
    let inputArr = JSON.parse(document.getElementById('arr').value);
    let validPattern = /^([A-Z][a-z]*\ [A-Z][a-z]*)\ (\+359([\ \-])\d\3\d{3}\3\d{3})\ ([a-z0-9]+\@[a-z]+\.[a-z]{2,3})$/;
    for (const record of inputArr) {

        let valid;
        if (valid = record.match(validPattern)) {
            let newNameP = document.createElement('p');
            let newPhoneP = document.createElement('p');
            let newEmailP = document.createElement('p');
            newNameP.innerHTML = `Name: ${valid[1]}`;
            newPhoneP.innerHTML = `Phone Number: ${valid[2]}`;
            newEmailP.innerHTML = `Email: ${valid[4]}`;
            document.getElementById('result').appendChild(newNameP);
            document.getElementById('result').appendChild(newPhoneP);
            document.getElementById('result').appendChild(newEmailP);
        } else {
            let newInvalidP = document.createElement('p');
            newInvalidP.innerHTML = `Invalid data`;
            document.getElementById('result').appendChild(newInvalidP);
        }
        let newSeparatorP = document.createElement('p');
        newSeparatorP.innerHTML = '- - -';
        document.getElementById('result').appendChild(newSeparatorP);
    }
}