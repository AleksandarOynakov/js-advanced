function lowestPrice(input) {
    let prices = {};
    for (const line of input) {
        let [town, product, price] = line.split(' | ');
        if (!prices.hasOwnProperty(product)) {
            prices[product] = [];
            prices[product].push({ town, price: Number(price) });
        }
        else {
            let hasTown = false;
            for (const key in prices) {
                if (key === product) {
                    for (const obj of prices[key]) {
                        hasTown = true;
                        if (obj.town == town) {
                            obj.price = Number(price);
                        }
                        else {
                            if (obj.price > Number(price)) {
                                prices[key].push({ town, price: Number(price) });
                            }

                        }
                    }
                }
            }
            if (!hasTown) {
                prices[product].push({ town, price: Number(price) });
            }
        }
    }
    for (const key in prices) {
        let sorted = Object.entries(prices[key]).sort((a, b) => a[1].price - b[1].price);
        console.log(`${key} -> ${sorted[0][1].price} (${sorted[0][1].town})`);
    }
}

lowestPrice(
    ['Sofia City | Audi | 100000',
        'Mexico City | Audi | 1000',
        'Mexico City | Audi | 100000',
        'Sofia City | BMW | 100000',
        'Mexico City | BMW | 99999'

    ]);

// Sofia City | Audi | 100000
// Sofia City | BMW | 100000
// Sofia City | Mitsubishi | 10000
// Sofia City | Mercedes | 10000
// Sofia City | NoOffenseToCarLovers | 0
// Mexico City | Audi | 1000
// Mexico City | BMW | 99999
// New York City | Mitsubishi | 10000
// New York City | Mitsubishi | 1000
// Mexico City | Audi | 100000
// Washington City | Mercedes | 1000

