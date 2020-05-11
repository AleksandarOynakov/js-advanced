function extract(text) {
    let storage = new Set();
    let patternWord = /[A-Za-z]+/g;
    for (const line of text) {
        while (valid = patternWord.exec(line)) {
            storage.add(valid[0].toLowerCase());
        }
    }
    console.log(Array.from(storage).join(', '));
}

extract(['One','Two','One','Word','Five']);