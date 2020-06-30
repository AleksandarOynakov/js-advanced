let Parser = require('../solution');
let expect = require("chai").expect;

describe("MyTests", () => {
    it('constructor test', function () {
        let parser = new Parser('[ {"Nancy":"architect"},{"John":"developer"},{"Kate": "HR"} ]');
        expect(parser._log).to.deep.equal([]);
        expect(parser._data).to.deep.equal([{ "Nancy": "architect" }, { "John": "developer" }, { "Kate": "HR" }]);
        let func = function (command) {
            this._log.push(`${counter++}: ${command}`)
            return "Added to log";
        };
        expect(parser._addToLog.toString()).to.equal(func.toString());
        expect(typeof parser._addToLog).to.equal('function');
    });

    it('getter data test', function () {
        let parser = new Parser('[ {"Nancy":"architect"},{"John":"developer"},{"Kate": "HR"} ]');
        
        expect(parser.data).to.deep.equal([{ "Nancy": "architect" }, { "John": "developer" }, { "Kate": "HR" }]);
        expect(parser._log).to.deep.equal(['0: getData']);
        expect(Array.isArray(parser.data)).to.equal(true);
        
    });
    it('print() test', function () {
        let parser = new Parser('[ {"Nancy":"architect"},{"John":"developer"},{"Kate": "HR"} ]');
        parser.addEntries("Steven:tech-support Edd:administrator");
        parser.removeEntry("Kate");
        let output = 'id|name|position\n0|Nancy|architect\n1|John|developer\n2|Steven|tech-support\n3|Edd|administrator';
        expect(parser.print()).to.equal(output)
        parser = new Parser('[ {"Nancy":"architect"} ]');
        parser.print()
        expect(parser._log).to.deep.equal(['0: print'])
    });
    it('addToLog(command) test', function () {
        let parser = new Parser('[ {"Nancy":"architect"},{"John":"developer"},{"Kate": "HR"} ]');
        parser._addToLog('Test');
        parser._addToLog('Test1');
        parser._addToLog();
        expect(parser._log).to.deep.equal(['0: Test', '1: Test1', '2: undefined']);
        expect(parser._addToLog()).to.equal('Added to log');
    });
    it('addEntries(entries) test', function () {
        let parser = new Parser('[ {"Nancy":"architect"},{"John":"developer"},{"Kate": "HR"} ]');
        expect(parser.addEntries("Steven:tech-support Edd:administrator")).to.equal("Entries added!");
        expect(parser._data).to.deep.equal([{ "Nancy": "architect" }, { "John": "developer" }, { "Kate": "HR" }, { "Steven": "tech-support" }, { "Edd": "administrator" }]);
        expect(parser._log).to.deep.equal(['0: addEntries']);
    });

    it('removeEntry(key) test', function () {
        let parser = new Parser('[ {"Nancy":"architect"},{"John":"developer"},{"Kate": "HR"} ]');
        expect(() => parser.removeEntry('Misho')).to.Throw("There is no such entry!");
        expect(() => parser.removeEntry({})).to.Throw("There is no such entry!");
        expect(() => parser.removeEntry()).to.Throw("There is no such entry!");
        expect(() => parser.removeEntry(9)).to.Throw("There is no such entry!");
        expect(() => parser.removeEntry(['test'])).to.Throw("There is no such entry!");
        expect(parser.removeEntry('Kate')).to.equal('Removed correctly!');
        expect(parser._log).to.deep.equal(['0: removeEntry']);
        expect(parser._data[2]).to.haveOwnProperty('deleted');
        expect(parser._data[2].deleted).to.equal(true);
    });
    it('_addToLogInitial() test',function (){
        let parser = new Parser('[ {"Nancy":"architect"},{"John":"developer"},{"Kate": "HR"} ]');
        expect(parser._addToLogInitial().toString()).to.equal(parser._addToLog.toString());
    });
});