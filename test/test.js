
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

describe('Case 1: ', () => {
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

describe('Case 3: ', () => {
    let trains;

    beforeEach(() => {
        number = 0;
        trains = new Trains;
        badCase = null;

    });

    it(`The distance of route A-D-C is valid: `, () => {
        badCase = trains.caseThree('A', 'D', 'C', objGraph);
        expect(badCase).to.eql(trains.caseThree())

    });
    it(`The distance of route A-D-C is non exisitent: `, () => {
        badCase = trains.caseThree('Z', 'Z', 'C', objGraph);
        expect(badCase).to.eql("NO SUCH ROUTE")
    });
})

describe('Case 4: ', () => {
    let trains;

    beforeEach(() => {
        trains = new Trains;
        badCase = null;

    });

    it(`The distance of route A-E-B-C-D is valid: `, () => {
        badCase = trains.caseFour('A', 'E', 'B', 'C', 'D', objGraph);
        expect(badCase).to.eql(trains.caseFour())

    });
    it(`The distance of route A-E-B-C-D is non exisitent: `, () => {
        badCase = trains.caseFour('Z', 'Z', 'G','L', objGraph);
        expect(badCase).to.eql("NO SUCH ROUTE")
    });
})

describe('Case 5: ', () => {
    let trains;

    beforeEach(() => {
        trains = new Trains;
        badCase = null;

    });

    it(`The distance of route A-E-D is non exisitent: `, () => {
        badCase = trains.caseFive('Z', 'Z', 'G','L', objGraph);
        expect(badCase).to.eql("NO SUCH ROUTE")
    });
})

describe('Case 6: ', () => {
    let trains;

    beforeEach(() => {
        trains = new Trains;
        badCase = null;

    });

    it('The number of trips starting at C and ending at C with a maximum of 3 stops is valid: ', () => {
        badCase = trains.caseSix('C', 'C', iterGraph, "upTo");
        expect(badCase).to.eql(trains.caseSix())
    });

    it('The number of trips starting at C and ending at C with a maximum of 3 stops is non exisitent: ', () => {
        badCase = trains.caseSix('Z', 'Z', iterGraph, "upTo");
        expect(badCase).to.equal(0)
    });
})

describe('Case 7: ', () => {
    let trains;

    beforeEach(() => {
        trains = new Trains;
        badCase = null;

    });

    it("The number of trips starting at A and ending at C with exactly 4 stops is: ", () => {
        badCase = trains.caseSeven('A', 'C', iterGraph, "exact");
        expect(badCase).to.eql(trains.caseSeven())
    });

    it("The number of trips starting at A and ending at C with exactly 4 stops is: ", () => {
        badCase = trains.caseSeven('Z', 'Z', iterGraph, "exact");
        expect(badCase).to.equal(0)
    });
})

