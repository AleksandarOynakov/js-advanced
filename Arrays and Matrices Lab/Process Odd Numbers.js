function oddNum(array) {
    const result = [];
    for (let index = 0; index < array.length; index++) {
        if (index % 2 !== 0) {
            result.unshift(array[index] * 2);
        }
    }
    return result.join(' ');
}

console.log(oddNum([10, 15, 20, 25, 5]));