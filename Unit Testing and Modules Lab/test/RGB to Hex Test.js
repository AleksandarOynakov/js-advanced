let expect = require('chai').expect;
let rgbToHexColor = require('../RGB to Hex').rgbToHexColor;

describe('rgbToHexColor', function() {
    it('should return undefined 255,255,256', function() {
        expect(rgbToHexColor(255, 255, 256)).to.equal(undefined);
    });

    it('should return undefined 255,256,255', function() {
        expect(rgbToHexColor(255, 256, 255)).to.equal(undefined);
    });

    it('should return undefined 256,255,255', function() {
        expect(rgbToHexColor(256, 255, 255)).to.equal(undefined);
    });

    it('should return undefined -1,255,255', function() {
        expect(rgbToHexColor(-1, 255, 255)).to.equal(undefined);
    });

    it('should return undefined for negative values ', function() {
        expect(rgbToHexColor((-1, -15, -18))).to.equal(undefined);
    });

    it('should return undefined [255,255,255]', function() {
        expect(rgbToHexColor([255, 255, 255])).to.equal(undefined);
    });

    it('should return undefined for no input', function() {
        expect(rgbToHexColor()).to.equal(undefined);
    });

    it('should return undefined for "text"', function() {
        expect(rgbToHexColor("text")).to.equal(undefined);
    });

    it('should return undefined for 255', function() {
        expect(rgbToHexColor(255)).to.equal(undefined);
    });

    it('should return undefined for 2.17, 3.14, 8.18', function() {
        expect(rgbToHexColor((2.17, 3.14, 8.18))).to.equal(undefined);
    });

    it('should return undefined for fractions', function() {
        expect(rgbToHexColor(('Pesho', { name: 'Gosho' }, []))).to.equal(undefined);
    });

    it('should return #FFFFFF', function() {
        expect(rgbToHexColor(255, 255, 255)).to.equal('#FFFFFF');
    });

    it('should return #000000', function() {
        expect(rgbToHexColor(0, 0, 0)).to.equal('#000000');
    });

    it('should return #FF9EAA', function() {
        expect(rgbToHexColor(255, 158, 170)).to.equal('#FF9EAA');
    });
});