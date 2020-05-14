function result() {
    return (function () {
        let string = '';

        function append(text) {
            string += text;
        }

        function removeStart(n) {
            string = string.substring(n);
        }

        function removeEnd(n) {
            string = string.substring(0, string.length - n);
        }

        function print() {
            console.log(string);
        }

        return {
            append,
            removeStart,
            removeEnd,
            print
        }
    })()
};

let firstZero = result();

firstZero.append('123');
firstZero.append('45');
firstZero.removeStart(2);
firstZero.removeEnd(1);
firstZero.print();

