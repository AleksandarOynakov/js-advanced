function add(num) {
    let sum = num;
    function add(num) {
        sum += num;
        return add;
    }

    add.toString = () => {
        return sum;
    }
    return add;
}

console.log(Number(add(1)(-1)(-1)));

