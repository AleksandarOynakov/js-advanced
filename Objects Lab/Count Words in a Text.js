function count(text) {
    let patternWord = /[A-Za-z]+/g;
    let record = {};
    while (valid = patternWord.exec(text[0])) {
        if (record.hasOwnProperty(valid[0])) {
            record[valid[0]]++;
        }
        else {
            record[valid[0]] = 1;
        }
    }
    console.log(JSON.stringify(record));
}

count(['JS devs use Node.js for server-side JS.-- JS for devs']);