function catalogue(input) {
    let catalogue = {};
    for (const line of input) {
        let [product, price] = line.split(' : ');
        if (!catalogue.hasOwnProperty(product[0])) {
            catalogue[product[0]] = [];
        }
        catalogue[product[0]].push({ product, price: Number(price) });
    }
    let sorted = Object.keys(catalogue).sort((a, b) => a.localeCompare(b));
    for (const key of sorted) {
        console.log(key);
        for (const product of catalogue[key].sort((a, b) => a.product.localeCompare(b.product))) {
            console.log(`  ${product.product}: ${product.price}`);
        }
    }
}

catalogue(['Appricot : 20.4',

    'Fridge : 1500',

    'TV : 1499',

    'Deodorant : 10',

    'Boiler : 300',

    'Apple : 1.25',

    'Anti-Bug Spray : 15',

    'T-Shirt : 10']);