let expect = require('chai').expect;
let mathEnforcer = require('../Math Enforcer').mathEnforcer;

describe('mathEnforcer', function() {

    it('addFive should return undefined for no input', function() {
        expect(mathEnforcer.addFive()).to.be.equal(undefined);
    });

    it('addFive should return undefined for "text"', function() {
        expect(mathEnforcer.addFive("text")).to.be.equal(undefined);
    });

    it('addFive should return undefined for []', function() {
        expect(mathEnforcer.addFive([])).to.be.equal(undefined);
    });

    it('addFive should return undefined for {}', function() {
        expect(mathEnforcer.addFive({})).to.be.equal(undefined);
    });

    it('addFive should return 6 for 1', function() {
        expect(mathEnforcer.addFive(1)).to.be.equal(6);
    });

    it('addFive should return 4 for -1', function() {
        expect(mathEnforcer.addFive(-1)).to.be.equal(4);
    });

    it('addFive should return 4 for -1', function() {
        expect(mathEnforcer.addFive(-1.1)).to.be.equal(3.9);
    });

    it('subtractTen should return undefined for no input', function() {
        expect(mathEnforcer.subtractTen()).to.be.equal(undefined);
    });

    it('subtractTen should return undefined for "text"', function() {
        expect(mathEnforcer.subtractTen("text")).to.be.equal(undefined);
    });

    it('subtractTen should return undefined for []', function() {
        expect(mathEnforcer.subtractTen([])).to.be.equal(undefined);
    });

    it('subtractTen should return undefined for {}', function() {
        expect(mathEnforcer.subtractTen({})).to.be.equal(undefined);
    });

    it('subtractTen should return -9 for 1', function() {
        expect(mathEnforcer.subtractTen(1)).to.be.equal(-9);
    });

    it('subtractTen should return -8.9 for 1.1', function() {
        expect(mathEnforcer.subtractTen(1.1)).to.be.equal(-8.9);
    });

    it('subtractTen should return 1 for 11', function() {
        expect(mathEnforcer.subtractTen(11)).to.be.equal(1);
    });

    it('subtractTen should return -11 for -1', function() {
        expect(mathEnforcer.subtractTen(-1)).to.be.equal(-11);
    });

    it('subtractTen should return -11.1 for -1.1', function() {
        expect(mathEnforcer.subtractTen(-1.1)).to.be.equal(-11.1);
    });

    it('sum should return undefined for no input', function() {
        expect(mathEnforcer.sum()).to.be.equal(undefined);
    });

    it('sum should return undefined for "text",1', function() {
        expect(mathEnforcer.sum("text", 1)).to.be.equal(undefined);
    });

    it('sum should return undefined for [],1', function() {
        expect(mathEnforcer.sum([], 1)).to.be.equal(undefined);
    });

    it('sum should return undefined for {},1', function() {
        expect(mathEnforcer.sum({}, 1)).to.be.equal(undefined);
    });

    it("should return undefined if second parameter is not a number", () => {
        expect(mathEnforcer.sum(33, '343')).to.equal(undefined);
    });

    it('sum should return 2 for 1,1', function() {
        expect(mathEnforcer.sum(1, 1)).to.be.equal(2);
    });

    it('sum should return 2.2 for 1.1,1.1', function() {
        expect(mathEnforcer.sum(1.1, 1.1)).to.be.equal(2.2);
    });

    it('sum should return -2 for -1,-1', function() {
        expect(mathEnforcer.sum(-1, -1)).to.be.equal(-2);
    });

    it('sum should return -2.2 for -1.1,-1.1', function() {
        expect(mathEnforcer.sum(-1.1, -1.1)).to.be.equal(-2.2);
    });

});