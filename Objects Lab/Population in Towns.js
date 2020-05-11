function population(input) {
    let register = {};
    for (const line of input) {
        let [city, population] = line.split(' <-> ');
        if (!register.hasOwnProperty(city)) {
            register[city] = Number(population);
        }
        else {
            register[city] += Number(population);
        }
    }

    for (const key in register) {
        console.log(`${key} : ${register[key]}`);
    }
}


population(['Sofia <-> 1200000',

    'Montana <-> 20000',

    'New York <-> 10000000',

    'Washington <-> 2345000',

    'Las Vegas <-> 1000000']);