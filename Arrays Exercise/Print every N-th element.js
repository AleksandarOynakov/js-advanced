function print(array) {
    let step = Number(array.pop());
    for (let index = 0; index < array.length; index += step) {
        console.log(array[index]);
    }
}