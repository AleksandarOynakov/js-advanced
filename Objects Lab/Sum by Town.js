function sumTown(input) {
    let register = {};
    for (let index = 0; index < input.length; index++) {
        if (index % 2 !== 0) {
            if (register.hasOwnProperty(input[index - 1])) {
                register[input[index - 1]] += Number(input[index]);
            }
            else {
                register[input[index - 1]] = Number(input[index]);
            }
        }
    }
    return JSON.stringify(register);
}

console.log(sumTown(['Sofia', '20', 'Varna', '3', 'Sofia', '5', 'Varna', '4']));