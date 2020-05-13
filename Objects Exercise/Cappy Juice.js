function bottle(input) {
    let juices = {};
    let bottles = new Map();
    for (const line of input) {
        let [juice, amount] = line.split(' => ');
        if (!juices.hasOwnProperty(juice)) {
            juices[juice] = Number(amount);
        }
        else {
            juices[juice] += Number(amount);
        }
        if (juices[juice] >= 1000) {
            let curr = bottles.get(juice);
            if (curr === undefined) {
                curr = 0;
            }
            bottles.set(juice, Math.floor(juices[juice] / 1000) + curr);

            juices[juice] -= Math.floor(juices[juice] / 1000) * 1000;
        }
    }
    for (const [key, value] of bottles) {
        console.log(`${key} => ${value}`);
    }
}

bottle([
    'Kiwi => 234',
    'Pear => 2345',
    'Watermelon => 3456',
    'Kiwi => 4567',
    'Pear => 5678',
    'Watermelon => 6789'
]);


