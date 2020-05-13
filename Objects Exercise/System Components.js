function system(input) {
    let storage = {};
    for (const line of input) {
        let [system, component, subComponent] = line.split(' | ');
        if (!storage.hasOwnProperty(system)) {
            let compObj = {};
            compObj[component] = [subComponent];
            storage[system] = compObj;
        } else {
            if (!storage[system].hasOwnProperty(component)) {
                storage[system][component] = [subComponent];
            }
            else {
                if (!storage[system][component].includes(subComponent)) {
                    storage[system][component].push(subComponent);
                }
            }
        }
    }
    let keySorted = Object.keys(storage).sort((a, b) => {
        if (Object.keys(storage[b]).length === Object.keys(storage[a]).length) {
            return a.localeCompare(b);
        }
        return Object.keys(storage[b]).length - Object.keys(storage[a]).length;
    });

    for (const key of keySorted) {
        console.log(key);
        for (const comp of Object.keys(storage[key]).sort((a, b) => storage[key][b].length - storage[key][a].length)) {
            console.log(`|||${comp}`);
            for (const subComp of storage[key][comp]) {
                console.log(`||||||${subComp}`);
            }
        }
    }
}

system(['SULS | Main Site | Home Page',
    'SULS | Main Site | Login Page',
    'SULS | Main Site | Register Page',
    'SULS | Judge Site | Login Page',
    'SULS | Judge Site | Submittion Page',
    'Lambda | CoreA | A23',
    'SULS | Digital Site | Login Page',
    'Lambda | CoreB | B24',
    'Lambda | CoreA | A24',
    'Lambda | CoreA | A25',
    'Lambda | CoreC | C4',
    'Indice | Session | Default Storage',
    'Indice | Session | Default Security']);