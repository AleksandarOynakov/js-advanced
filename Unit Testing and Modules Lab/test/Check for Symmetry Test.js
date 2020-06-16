let expect = require('chai').expect;
let isSymmetric = require('../Check for Symmetry').isSymmetric;

console.log(isSymmetric)
describe('isSymmetric', function() {

    it('should take array', function() {
        let result = isSymmetric(1);
        expect(result).to.be.equal(false);
        result = isSymmetric('');
        expect(result).to.be.equal(false);
        result = isSymmetric();
        expect(result).to.be.equal(false);
    });

    it("should return true for [5,'hi',{a:5},new Date(),{a:5},'hi',5]", function() {
        expect(isSymmetric([5, 'hi', { a: 5 }, new Date(), { a: 5 }, 'hi', 5])).to.be.equal(true);
    });

    it('should return true for [1,2,1]', function() {
        result = isSymmetric([1, 2, 1]);
        expect(result).to.be.equal(true);
    });

    it('should return true for [1,"hi",1]', function() {
        result = isSymmetric([1, "hi", 1]);
        expect(result).to.be.equal(true);
    });

    it('should return true on empty Array', function() {
        let result = isSymmetric([]);
        expect(result).to.be.equal(true);
    });

    it('should return false for [1,2,3,4]', function() {
        let result = isSymmetric([1, 2, 3, 4]);
        expect(result).to.be.equal(false);
    });

    it('should return false for 1,2,3,4', function() {
        let result = isSymmetric(1, 2, 3, 4);
        expect(result).to.be.equal(false);
    });

    it('should return false for [1,2,-1]', function() {
        let result = isSymmetric(1, 2, -1);
        expect(result).to.be.equal(false);
    });

});