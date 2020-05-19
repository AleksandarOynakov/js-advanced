function solve() {
  let links = document.getElementsByClassName('link-1');
  for (let link of Array.from(links)) {
    link.children[0].addEventListener('click', increase);
  }

  function increase() {
    let text = this.parentElement.children[1];
    let digitPattern = /\d+/g;
    if (validDigit = digitPattern.exec(text.textContent)) {
      validDigit[0]++;
      text.textContent = `visited ${validDigit[0]} times`;
    }
  }
}