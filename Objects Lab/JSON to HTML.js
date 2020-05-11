function jsonToHTML(data) {
    let result = '';
    let objects = JSON.parse(data);
    for (const object of objects) {
        result += `\n<tr><td>${escapeHtml(String(object.name))}</td><td>${object.score}</td></tr>`
    }
    return `<table>\n<tr><th>name</th><th>score</th></tr>${result}\n</table>`;

    function escapeHtml(unsafeText) {
        return unsafeText
            .replace(/\&/g, "&amp;")
            .replace(/\</g, "&lt;")
            .replace(/\>/g, "&gt;")
            .replace(/\"/g, "&quot;")
            .replace(/\'/g, "&#039;");
    }
}

console.log(jsonToHTML(['[{"name":"Pesho & Kiro","score":479},{"name":"Gosho, Maria & Viki","score":205}]']));
