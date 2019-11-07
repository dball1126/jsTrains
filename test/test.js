
const Trains = require('../Trains');
const { expect } = require('chai');
const objGraph = {
    A: { B: '5', D: '5', E: '7' },
    B: { C: '4' },
    C: { D: '8', E: '2' },
    D: { C: '8', E: '6' },
    E: { B: '3' }
}
const iterGraph = {
    A: [{ B: '5' }, { D: '5' }, { E: '7' }],
    B: [{ C: '4' }],
    C: [{ D: '8' }, { E: '2' }],
    D: [{ C: '8' }, { E: '6' }],
    E: [{ B: '3' }]
}
const master = new Trains();

describe('Case 1: ', () => {
    let number;
    let trains;
   
    beforeEach(() => {
         number = 0;
         trains = new Trains;
         badCase = null;
        
    });
    
    it(`The distance of route A-B-C is valid: `, () => {
        badCase = trains.caseOne('A', 'B', 'C', objGraph);        
        expect(badCase).to.eql(trains.caseOne())
        
    });
    it(`The distance of route A-B-C is non exisitent: `, () => {
        badCase = trains.caseOne('Z', 'Z', 'C', objGraph);        
        expect(badCase).to.eql("NO SUCH ROUTE")
    });
})

describe('Case 2: ', () => {
    let number;
    let trains;

    beforeEach(() => {
        number = 0;
        trains = new Trains;

    });

    it(`The distance of route A-D is valid: `, () => {
        badCase = trains.caseTwo('A', 'D', objGraph);
        expect(badCase).to.eql(trains.caseTwo())
    });

    it(`The distance of route A-D is unknown: `, () => {
        badCase = trains.caseTwo('Z', 'Z', objGraph);
        expect(badCase).to.eql("NO SUCH ROUTE")
    });


})