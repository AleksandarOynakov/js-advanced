function toJSON(array) {
    array.shift();
    register = [];
    for (const line of array) {
        let [Town, Latitude, Longitude] = line.split('|').map(x => x.trim()).filter(x => x !== '');
        Latitude = Number(Latitude);
        Longitude = Number(Longitude);
        register.push({ Town, Latitude: Number(Latitude.toFixed(2)), Longitude: Number(Longitude.toFixed(2)) });
    }
    return JSON.stringify(register);
}


console.log(toJSON(['| Town | Latitude | Longitude |',
    '| Sofia | 42.696552 | 23.32601 |',
    '| Beijing | 39.913818 | 116.363625 |']));