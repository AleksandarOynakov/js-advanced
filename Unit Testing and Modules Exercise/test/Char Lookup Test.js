let expect = require('chai').expect;
let lookupChar = require('../Char Lookup').lookupChar;

describe('lookupChar', function() {
    it('should return undefined for [], 0', function() {
        expect(lookupChar([], 0)).to.be.equal(undefined);
    });

    it('should return undefined for {}, 0', function() {
        expect(lookupChar({}, 0)).to.be.equal(undefined);
    });

    it('should return undefined for 13 , 0', function() {
        expect(lookupChar(13, 0)).to.be.equal(undefined);
    });

    it('should return undefined for 0', function() {
        expect(lookupChar(0)).to.be.equal(undefined);
    });

    it('should return undefined for "text"', function() {
        expect(lookupChar("text")).to.be.equal(undefined);
    });

    it('should return undefined for "text", []', function() {
        expect(lookupChar("text", [])).to.be.equal(undefined);
    });

    it('should return undefined for "text", {}', function() {
        expect(lookupChar("text", {})).to.be.equal(undefined);
    });

    it('should return undefined for "text", "text"', function() {
        expect(lookupChar("text", "text")).to.be.equal(undefined);
    });

    it('should return undefined for "text", "2"', function() {
        expect(lookupChar("text", "2")).to.be.equal(undefined);
    });

    it('should return undefined for no input', function() {
        expect(lookupChar()).to.be.equal(undefined);
    });

    it('should return undefined for "text", 4.1', function() {
        expect(lookupChar("text", 4.1)).to.be.equal(undefined);
    });

    it('should return undefined for "text", -1', function() {
        expect(lookupChar("text", -1)).to.be.equal('Incorrect index');
    });

    it('should return undefined for "text", 4', function() {
        expect(lookupChar("text", 4)).to.be.equal('Incorrect index');
    });

    it('should return undefined for "text", 13', function() {
        expect(lookupChar("text", 13)).to.be.equal('Incorrect index');
    });

    it('should return "t" for "text", 0', function() {
        expect(lookupChar("text", 0)).to.be.equal('t');
    });

    it('should return "t" for "text", 3', function() {
        expect(lookupChar("text", 3)).to.be.equal('t');
    });

    it('should return " " for " ", 0', function() {
        expect(lookupChar(" ", 0)).to.be.equal(' ');
    });

    it('should return "x" for "text", 2', function() {
        expect(lookupChar("text", 2)).to.be.equal('x');
    });
});