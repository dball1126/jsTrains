
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
    it(`The distance of route K-J-C is non-existent: `, () => {
        badCase = trains.caseOne('K', 'J', 'C', objGraph);        
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

    it(`The distance of route K-Z is non-existent: `, () => {
        badCase = trains.caseTwo('K', 'Z', objGraph);
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
    it(`The distance of route Z-Z-C is non-existent: `, () => {
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
    it(`The distance of route Z-E-B-M-O is non-existent: `, () => {
        badCase = trains.caseFour('Z', 'E', 'B','M', 'O', objGraph);
        expect(badCase).to.eql("NO SUCH ROUTE")
    });
})

describe('Case 5: ', () => {
    let trains;

    beforeEach(() => {
        trains = new Trains;
        badCase = null;

    });

    it(`The distance of route A-W-D is non-existent: `, () => {
        badCase = trains.caseFive('A', 'W', 'D', objGraph);
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

    it('The number of trips starting at M and ending at I with a maximum of 3 stops is zero: ', () => {
        badCase = trains.caseSix('M', 'I', iterGraph, "upTo");
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

    it("The number of trips starting at Z and ending at Z with exactly 4 stops is zero: ", () => {
        badCase = trains.caseSeven('Z', 'Z', iterGraph, "exact");
        expect(badCase).to.equal(0)
    });
})

describe('Case 8: ', () => {
    let trains;

    beforeEach(() => {
        trains = new Trains;
        badCase = null;

    });

    it("The length of the shortest route from A to C is: ", () => {
        badCase = trains.caseEight('A', 'C', iterGraph, objGraph);
        expect(badCase).to.eql(trains.caseEight())
    });

    it("The length of the shortest route from Z to J is zero: ", () => {
        badCase = trains.caseEight('Z', 'J', iterGraph, objGraph);
        expect(badCase).to.equal(0);
    });
})

describe('Case 9: ', () => {
    let trains;

    beforeEach(() => {
        trains = new Trains;
        badCase = null;

    });

    it("The length of the shortest route from B to B is: ", () => {
        badCase = trains.caseNine('B', 'B', iterGraph, objGraph);
        expect(badCase).to.eql(trains.caseNine())
    });

    it("The length of the shortest route from Z to J is zero: ", () => {
        badCase = trains.caseNine('Z', 'J', iterGraph, objGraph);
        expect(badCase).to.equal(0);
    });
})

describe('Case 10: ', () => {
    let trains;

    beforeEach(() => {
        trains = new Trains;
        badCase = null;
    });

    it("The number of the different routes from C to C with a distance of less than 30 is: ", () => {
        badCase = trains.caseTen('C', 'C', iterGraph, "type");
        expect(badCase).to.eql(trains.caseTen())
    });

    it("The number of the different routes from G to J with a distance of less than 30 is zero: ", () => {
        badCase = trains.caseTen('G', 'J', iterGraph, "type");
        expect(badCase).to.equal(0);
    });
})

