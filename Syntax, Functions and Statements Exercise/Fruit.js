function fruit(product, gramms, price) {
    let kilo = gramms / 1000;
    return `I need $${(price * kilo).toFixed(2)} to buy ${kilo.toFixed(2)} kilograms ${product}.`;
}

console.log(fruit('orange', 2500, 1.80));