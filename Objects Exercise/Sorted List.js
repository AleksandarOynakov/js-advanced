class List {
    constructor() {
        this.storage = [];
        this.size = 0;
    }

    add(number) {
        this.storage.push(number);
        this.size++;
        return this.storage.sort((a, b) => a - b);
    }

    remove(index) {
        if (index >= 0 && this.storage.length > index) {
            this.storage.splice(index, 1);
            this.size--;
        }
        else {
            throw new Error;
        }
        return this.storage.sort((a, b) => a - b);
    }

    get(index) {
        if (index >= 0 && this.storage.length > index) {
            return this.storage[index];
        }
        else {
            throw new Error;
        }
    }
}

