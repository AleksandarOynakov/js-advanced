let expect = require('chai').expect;
let sum = require('../Sum of Numbers').sum;

describe('Sum function', function() {
    it('should return number', function() {
        let result = sum([1, 2, 3, 4, 5]);
        expect(result).to.be.equal(15);
    });
    it('should throw error for Number', function() {
        expect(() => sum(1)).to.throw('arr is not iterable');
    });
    it('should return NaN for String', function() {
        expect(sum('text')).to.be.NaN;
    });
    it('should return 0 for []', function() {
        expect(sum([])).to.be.equal(0);
    });
});