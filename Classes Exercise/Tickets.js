function database(data, sortBy) {
    let allData = [];
    let sortCommands = {
        'destination': arr => arr.sort((a, b) => (a.destination).localeCompare(b.destination)),
        'price': arr => arr.sort((a, b) => a - b),
        'status': arr => arr.sort((a, b) => (a.status).localeCompare(b.status))
    }
    class Ticket {
        constructor(destination, price, status) {
            this.destination = destination;
            this.price = Number(price);
            this.status = status;
        }
    }

    for (const line of data) {
        let [destination, price, status] = line.split('|');
        allData.push(new Ticket(destination, price, status));
    }

    let sortedArr = sortCommands[sortBy](allData);
    return sortedArr;
}

console.log(database([
        'Philadelphia|94.20|available',
        'New York City|95.99|available',
        'New York City|95.99|sold',
        'Boston|126.20|departed'
    ],
    'status'));