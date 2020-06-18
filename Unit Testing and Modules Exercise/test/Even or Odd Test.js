let expect = require('chai').expect;
let isOddOrEven = require('../Even or Odd').isOddOrEven;

describe('isOddOrEven', function() {
    it('should return undefined for array input', function() {
        expect(isOddOrEven([])).to.be.equal(undefined);
    });

    it('should return undefined for object input', function() {
        expect(isOddOrEven({})).to.be.equal(undefined);
    });

    it('should return undefined for number input', function() {
        expect(isOddOrEven(9)).to.be.equal(undefined);
    });

    it('should return undefined for no input', function() {
        expect(isOddOrEven()).to.be.equal(undefined);
    });

    it('should return even for "test"', function() {
        expect(isOddOrEven('test')).to.be.equal('even');
    });

    it('should return even for empty string', function() {
        expect(isOddOrEven('')).to.be.equal('even');
    });

    it('should return odd for "t"', function() {
        expect(isOddOrEven('t')).to.be.equal('odd');
    });

    it('should return odd for "tex"', function() {
        expect(isOddOrEven('tex')).to.be.equal('odd');
    });
});