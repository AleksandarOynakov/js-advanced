function evenPos(array) {
    let result = '';
    for (let index = 0; index < array.length; index++) {
        if (index % 2 === 0){
            result += `${array[index]} `;
        }
    }
    return result;
}

console.log(evenPos(['20']));