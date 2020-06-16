let expect = require('chai').expect;
let createCalculator = require('../Add Subtract').createCalculator;

describe('createCalculator', function() {
    it('to have add property', function() {
        expect(createCalculator()).to.have.property('add');
    });

    it('to have subtract property', function() {
        expect(createCalculator()).to.have.property('subtract');
    });

    it('to have get property', function() {
        expect(createCalculator()).to.have.property('get');
    });

    it('to return object', function() {
        let result = createCalculator();
        expect(typeof result).to.equal('object');
    });

    it('add to take number', function() {
        let result = createCalculator();
        result.add(1);
        expect(result.get()).to.equal(1);
    });

    it('add to take string', function() {
        let result = createCalculator();
        result.add('1');
        expect(result.get()).to.equal(1);
    });

    it('subtract to take number', function() {
        let result = createCalculator();
        result.subtract(1);
        expect(result.get()).to.equal(-1);
    });

    it('subtract to take string', function() {
        let result = createCalculator();
        result.add('-1');
        expect(result.get()).to.equal(-1);
    });

    it('get to return sum', function() {
        let result = createCalculator();
        expect(result.get()).to.equal(0);
    });

});