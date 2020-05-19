function solve() {
  let textSentences = document.getElementById('input').textContent.split('.');
  let outputDiv = document.getElementById('output');
  let toP = [];
  for (const sentence of textSentences) {
    if (toP.length === 3 || textSentences.indexOf(sentence) === textSentences.length - 1) {
      let newP = document.createElement('p');
      newP.textContent = toP.join('. ') + '.';
      outputDiv.appendChild(newP);
      toP = [];
    }
    toP.push(sentence);
  }
}