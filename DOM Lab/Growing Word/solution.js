function growingWord() {
  let colors = ['blue', 'green', 'red'];
  let growingP = document.getElementById('exercise').lastElementChild;
  let currentStyle = growingP.getAttribute('style');
  if (currentStyle !== null) {
    let digitPattern = /\d+/g;
    let colorPatten = /red|blue|green/g;
    let [color, font] = currentStyle.split('; ');
    if (validSize = digitPattern.exec(font)) {
      validSize[0] *= 2;
      if (validColor = colorPatten.exec(color)) {
        let index = colors.indexOf(validColor[0]);
        if (index === 2) {
          validColor[0] = colors[0];
        }
        else {
          validColor[0] = colors[index + 1];
        }
      }
      growingP.setAttribute('style', `color: ${validColor[0]}; font-size: ${validSize[0]}px`);
    }
  }
  else {
    growingP.setAttribute('style', 'color: blue; font-size: 2px');
  }
}