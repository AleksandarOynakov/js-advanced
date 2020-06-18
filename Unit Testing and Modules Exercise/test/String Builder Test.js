let expect = require('chai').expect;
let StringBuilder = require('../String Builder').StringBuilder;

describe('StringBuilder', function() {

    it('constructor should trow error for 5', function() {
        expect(() => new StringBuilder(5)).to.throw('Argument must be string');
    });

    it('should be instance of StringBuilder', function() {
        let result = new StringBuilder('Hello');
        expect(result).to.be.instanceOf(StringBuilder);
    });

    it('should be instance of StringBuilder', function() {
        let result = new StringBuilder();
        expect(result).to.be.instanceOf(StringBuilder);
    });

    it('instance should return object', function() {
        let result = new StringBuilder('Hello');
        expect(typeof(result)).to.be.equal('object');
    });

    it('instance should have append(string)', function() {
        let result = new StringBuilder('Hello');
        expect(result).to.have.property('append');
    });

    it('instance should have append(string)', function() {
        let result = new StringBuilder('Hello');
        expect(result).to.have.property('append');
    });

    it('append("abc") to store abc', function() {
        let result = new StringBuilder();
        result.append('abc');
        expect(result.toString()).to.be.equal('abc');
    });

    it('append("abc") to store abc', function() {
        let result = new StringBuilder('x');
        result.append('abc');
        expect(result.toString()).to.be.equal('xabc');
    });

    it('append(string) should trow error for 5', function() {
        let result = new StringBuilder();
        expect(() => result.append(5)).to.throw('Argument must be string');
    });

    it('append(string) should trow error for []', function() {
        let result = new StringBuilder();
        expect(() => result.append([])).to.throw('Argument must be string');
    });

    it('instance should have prepend(string)', function() {
        let result = new StringBuilder('Hello');
        expect(result).to.have.property('prepend');
    });

    it('prepend(string) to store abc', function() {
        let result = new StringBuilder('x');
        result.prepend('abc');
        expect(result.toString()).to.be.equal('abcx');
    });

    it('prepend(string) to store abc', function() {
        let result = new StringBuilder();
        result.prepend('abc');
        expect(result.toString()).to.be.equal('abc');
    });

    it('prepend(string) should trow error for 5', function() {
        let result = new StringBuilder();
        expect(() => result.prepend(5)).to.throw('Argument must be string');
    });

    it('prepend(string) should trow error for []', function() {
        let result = new StringBuilder();
        expect(() => result.prepend([])).to.throw('Argument must be string');
    });

    it('insertAt(string, index) should add abc at 1 index', function() {
        let result = new StringBuilder('x');
        result.insertAt('abc', 1);
        expect(result.toString()).to.be.equal('xabc');
    });

    it('insertAt(string, index) should add abc at 1 index', function() {
        let result = new StringBuilder('xx');
        result.insertAt('abc', 1);
        expect(result.toString()).to.be.equal('xabcx');
    });

    it('insertAt(string, index) should add abc at 0 index', function() {
        let result = new StringBuilder();
        result.insertAt('abc', 0);
        expect(result.toString()).to.be.equal('abc');
    });

    it('insertAt(string, index) should add ac at 0 index', function() {
        let result = new StringBuilder();
        result.insertAt('ac', 0);
        expect(result.toString()).to.be.equal('ac');
    });

    it('insertAt(string, index) should add a,c in array', function() {
        let result = new StringBuilder();
        result.insertAt('ac', 0);
        expect((result._stringArray).includes('a')).to.be.equal(true);
    });

    it('insertAt(string, index) should add a,c in array', function() {
        let result = new StringBuilder();
        result.insertAt('ac', 0);
        expect(result._stringArray.length).to.be.equal(2);
    });


    it('insertAt should trow error for 1', function() {
        let result = new StringBuilder();
        expect(() => result.insertAt(1)).to.throw('Argument must be string');
    });

    it('insertAt should trow error for []', function() {
        let result = new StringBuilder();
        expect(() => result.insertAt([])).to.throw('Argument must be string');
    });

    it('remove(startIndex, length) should remove c at 2 index', function() {
        let result = new StringBuilder('abc');
        result.remove(2, 1);
        expect(result.toString()).to.be.equal('ab');
    });

    it('remove(startIndex, length) should return ""', function() {
        let result = new StringBuilder();
        result.remove(0, 1);
        expect(result.toString()).to.be.equal('');
    });

    it('remove(startIndex, length) should return "abc"', function() {
        let result = new StringBuilder('abc');
        result.remove(0, -1);
        expect(result.toString()).to.be.equal('abc');
    });

    it('remove(startIndex, length) should return "abc"', function() {
        let result = new StringBuilder('abc');
        result.remove(1);
        expect(result.toString()).to.be.equal('abc');
    });

    it('remove(startIndex, length) should return "a"', function() {
        let result = new StringBuilder('abc');
        result.remove(1, 300);
        expect(result.toString()).to.be.equal('a');
    });

    it('remove(startIndex, length) should return "ac"', function() {
        let result = new StringBuilder('abc');
        result.remove(1, 1);
        expect(result._stringArray.length).to.be.equal(2);
    });

    it('toString should return abc', function() {
        let result = new StringBuilder('abc');
        result.append('x');
        expect(result.toString()).to.equal('abcx');
    })

    it('toString should return ""', function() {
        let result = new StringBuilder();

        expect(result.toString()).to.equal('');
    })

    it('property should be array', function() {
        let result = new StringBuilder('abc');
        expect(Array.isArray(result._stringArray)).to.be.equal(true);
    })

    it('property should in instace', function() {
        let result = new StringBuilder('abc');
        expect(result).to.have.property('_stringArray');
    })

    it('_vrfyParam throw error', function() {
        expect(() => StringBuilder._vrfyParam([])).to.throw('Argument must be string');
    });
});