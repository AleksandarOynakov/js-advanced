function JSONtable(json) {
    let indent = '	';
    let indentInner = '		';
    let htmlTable = `<table>\n`;
    for (const line of json) {
        htmlTable += `${indent}<tr>\n`;
        let object = JSON.parse(line)
        for (const key in object) {
            htmlTable += `${indentInner}<td>${object[key]}</td>\n`;
        }
        htmlTable += `${indent}</tr>\n`;
    }
    htmlTable += `</table>`;
    return htmlTable;
}

console.log(JSONtable(['{"name":"Pesho","position":"Promenliva","salary":100000}',

    '{"name":"Teo","position":"Lecturer","salary":1000}',

    '{"name":"Georgi","position":"Lecturer","salary":1000}']));