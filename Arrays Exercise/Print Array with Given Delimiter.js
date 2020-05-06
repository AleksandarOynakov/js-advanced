function print(array) {
    let delimiter = array.pop();
    return array.join(delimiter);
}


console.log(print(['test','test',', ']));