function number(array) {
    const result = [];
    array.forEach(element => {
        if (element < 0) {
            result.unshift(element);
        }
        else{
            result.push(element);
        }
    });
    return result.join('\n');
}

console.log(number([3, -2, 0, -1]));