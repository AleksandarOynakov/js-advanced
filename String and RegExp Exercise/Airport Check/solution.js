function solve() {
    let inputFromHTML = document.getElementById('string').value;
    let [text, outputType] = inputFromHTML.split(',');
    outputType = outputType.trim();
    let namePattern = / [A-Z][A-Za-z]*-[A-Z][A-Za-z]*( |\.-[A-Z][A-Za-z]* )/;
    let airportPattern = / [A-Z]{3}\/[A-Z]{3} /;
    let numberPattern = / [A-Z]{1,3}[\d]{1,5} /;
    let companyPattern = /- [A-Z][A-Za-z]*\*[A-Z][A-Za-z]* /;

    let name = text.match(namePattern)[0].trim().replace(/-/g, " ");
    let [fromAirport, toAirport] = text.match(airportPattern)[0].trim().split("/");
    let flightNum = text.match(numberPattern)[0].trim();
    let company = text.match(companyPattern)[0].replace("- ", "").replace(/\*/g, " ").trim();

    let result = ''
    if (outputType === 'name') {
        result = `Mr/Ms, ${name}, have a nice flight!`
    } else if (outputType === 'flight') {
        result = `Your flight number ${flightNum} is from ${fromAirport} to ${toAirport}.`
    } else if (outputType === 'company') {
        result = `Have a nice flight with ${company}.`
    } else if (outputType === 'all') {
        result = `Mr/Ms, ${name}, your flight number ${flightNum} is from ${fromAirport} to ${toAirport}. Have a nice flight with ${company}.`
    }

    let newSpanElem = document.createElement('span');
    newSpanElem.textContent = result;

    document.getElementById('result').appendChild(newSpanElem);
}