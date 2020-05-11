function markets(input) {
    let register = {};
    for (const line of input) {
        let [town, product, data] = line.split(' -> ');
        let [amount, price] = data.split(' : ');
        if (!register.hasOwnProperty(town)) {
            register[town] = [];
        }
        register[town].push({ product, income: Number(amount) * Number(price) });
    }
    for (const key in register) {
        console.log(`Town - ${key}`);
        for (const object of register[key]) {
            console.log(`$$$${object.product} : ${object.income}`);
        }
    }
}

markets(['Sofia -> Laptops HP -> 200 : 2000',

    'Sofia -> Raspberry -> 200000 : 1500',

    'Sofia -> Audi Q7 -> 200 : 100000',

    'Montana -> Portokals -> 200000 : 1',

    'Montana -> Qgodas -> 20000 : 0.2',

    'Montana -> Chereshas -> 1000 : 0.3']);