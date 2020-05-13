function heroInventory(input) {
    let register = [];
    for (const line of input) {
        let parts = line.split(' / ');
        if (parts.length > 2) {
            let [name, level, itemString] = line.split(' / ');
            let items = itemString.split(', ');
            register.push({ name, level: Number(level), items });
        }
        else {
            let [name, level] = line.split(' / ');
            let items = [];
            register.push({ name, level: Number(level), items });
        }
    }
    console.log(JSON.stringify(register));
}

heroInventory(['Isacc / 25 ',

    'Derek / 12 / BarrelVest, DestructionSword',

    'Hes / 1 / Desolator, Sentinel, Antara']);