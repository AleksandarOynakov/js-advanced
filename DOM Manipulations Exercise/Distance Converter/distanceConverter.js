function attachEventsListeners() {
    let buttonConvert = document.getElementById('convert');
    buttonConvert.addEventListener('click', convert);

    let toMeters = {
        'km': value => value * 1000,
        'm': value => value,
        'cm': value => value * 0.01,
        'mm': value => value * 0.001,
        'mi': value => value * 1609.34,
        'yrd': value => value * 0.9144,
        'ft': value => value * 0.3048,
        'in': value => value * 0.0254
    }
    let toOutput = {
        'km': value => value / 1000,
        'm': value => value,
        'cm': value => value / 0.01,
        'mm': value => value / 0.001,
        'mi': value => value / 1609.34,
        'yrd': value => value / 0.9144,
        'ft': value => value / 0.3048,
        'in': value => value / 0.0254
    }

    function convert(e) {
        let inputValue = document.getElementById('inputDistance');
        let optionsInput = document.getElementById('inputUnits').children;
        let optionsOutput = document.getElementById('outputUnits').children;
        let convertedToMeters = 0;
        let result = 0;
        for (const child of Array.from(optionsInput)) {
            if (child.selected === true) {
                convertedToMeters = toMeters[child.value](inputValue.value);
            }
        }
        for (const child of Array.from(optionsOutput)) {
            if (child.selected === true) {
                result = toOutput[child.value](convertedToMeters);
            }
        }
        document.getElementById('outputDistance').value = result;
    }
}