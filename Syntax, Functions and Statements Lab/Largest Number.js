function maxNum(a, b, c) {
    let max = Number.MIN_SAFE_INTEGER;
    let arr = [a, b, c];
    arr.forEach(element => {
        if (max < element) {
            max = element;
        }
    });
    return `The largest number is ${max}.`;
}

console.log(maxNum(-3, 5, 1));