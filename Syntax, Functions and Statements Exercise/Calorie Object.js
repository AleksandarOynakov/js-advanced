function calorieObj(arr) {
    let reg = {};
    for (let index = 0; index < arr.length; index++) {
        if (index % 2 !== 0) {
            reg[arr[index-1]] = Number(arr[index]);
        }
    }
    return reg;
}

console.log(calorieObj(['Yoghurt', '48', 'Rise', '138', 'Apple', '52']));