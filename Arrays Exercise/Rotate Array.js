function rotate(array) {
    let rotations = Number(array.pop()) % array.length;
    for (let rotation = 0; rotation < rotations; rotation++) {
        array.unshift(array.pop());
    }
    return array.join(' ');
}

console.log(rotate(['1','2','3','4']));