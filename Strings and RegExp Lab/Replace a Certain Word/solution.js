function solve() {
    let wordForReplace = document.getElementById('word').value;
    let wordReplace = JSON.parse(document.getElementById('text').value)[0].split(' ')[2];
    let ArrOfStings = JSON.parse(document.getElementById('text').value);
    let pattern = new RegExp(`${wordReplace}`, 'i');
    for (let line of ArrOfStings) {
        let newP = document.createElement('p');
        newP.innerHTML = line.replace(pattern, wordForReplace);
        document.getElementById('result').appendChild(newP);
    }
}