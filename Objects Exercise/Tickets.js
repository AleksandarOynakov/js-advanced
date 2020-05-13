function tickets(tickets, sortedBy) {
    let register = [];
    class Ticket {
        constructor(destination, price, status) {
            this.destination = String(destination);
            this.price = Number(price);
            this.status = String(status);
        }
    }
    for (const line of tickets) {
        let [destination, price, status] = line.split('|');
        register.push(new Ticket(destination, price, status));
    }
    let sorted = register;
    switch (sortedBy) {
        case 'destination':
            sorted = sorted.sort((a, b) => (a.destination).localeCompare(b.destination));
            break;
        case 'price':
            sorted = sorted.sort((a, b) => a.price - b.price);
            break;
        case 'status':
            sorted = sorted.sort((a, b) => (a.status).localeCompare(b.status));
            break;
    }
    return sorted;
}

tickets(['Philadelphia|94.20|available',
    'New York City|95.99|available',
    'New York City|95.99|sold',
    'Boston|126.20|departed'],
    'destination');