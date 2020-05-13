class Stringer {
    constructor(text, len) {
        this.innerString = String(text);
        this.innerLength = Number(len);
    }

    decrease(num) {
        this.innerLength -= num;
        if (this.innerLength < 0) {
            this.innerLength = 0;
        }
    }

    increase(num) {
        this.innerLength += num;
    }

    toString() {
        let result = [];
        for (let index = 0; index < this.innerLength; index++) {
            result.push(this.innerString[index]);
        }
        if (this.innerString.length > this.innerLength) {
            result.push('...');
        }
        console.log(result.join(''));
    }
}

let s = new Stringer("Viktor", 6);

s.toString();