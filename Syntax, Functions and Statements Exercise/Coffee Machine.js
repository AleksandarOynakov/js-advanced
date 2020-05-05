function coffee(orders) {
    let prices = { 'coffee caffeine': 0.80, 'coffee decaf': 0.90, 'tea': 0.80 };
    let income = 0;
    for (const order of orders) {
        let elements = order.split(', ');
        let moneyInserted = Number(elements.shift());
        let sugar = Number(elements.pop());
        let moneyNeeded = 0;
        for (let index = 0; index < elements.length; index++) {
            if (elements[index] === 'caffeine' || elements[index] === 'decaf') {
                moneyNeeded += prices[elements[index - 1] + ' ' + elements[index]];
            }
            else if (elements[index] === 'tea') {
                moneyNeeded += prices[elements[index]];
            }
            else if (elements[index] === 'milk') {
                moneyNeeded += Number((moneyNeeded * 0.1).toFixed(1));
            }
        }
        if (sugar > 0) {
            moneyNeeded += 0.1;
        }
        if (moneyNeeded <= moneyInserted) {
            console.log(`You ordered ${elements[0]}. Price: $${moneyNeeded.toFixed(2)} Change: $${(moneyInserted - moneyNeeded).toFixed(2)}`);
            income += moneyNeeded;
        }
        else {
            console.log(`Not enough money for ${elements[0]}. Need $${(moneyNeeded - moneyInserted).toFixed(2)} more.`);
        }
    }
    console.log(`Income Report: $${income.toFixed(2)}`)
}

coffee(['1.00, coffee, caffeine, milk, 4', '0.40, tea, milk, 2', '1.00, coffee, decaf, 0'])

coffee(['8.00, coffee, decaf, 4', '1.00, tea, 2']);