const maxNumTrips = require('./maxNumTrips');
const exactNumTrips = require('./exactNumTrips');
const shortestRoute = require('./shortestRoute');
const differentRoutesDistance = require('./differentRoutesDistance');
const fs = require('fs'); // readFile

let sentence = (fs.readFileSync('./input.txt').toString());
if (sentence.includes('\n')) sentence = sentence.replace('\n', ",") // if input is multiple lines turn it into one string
const iterGraph = {};
const objGraph = {};

sentence.split(",").forEach(e => {  // This is where we create a Iterable graph.
    let key = e[0], innerKey = e[1], innerVal = e[2];

    if (iterGraph[key] === undefined) iterGraph[key] = []
        let obj = {};
        obj[innerKey] = innerVal;
        iterGraph[key].push(obj)
});

sentence.split(",").forEach(e => {  // This is where we create a object graph.
    let key = e[0], innerKey = e[1], innerVal = e[2];
    if (objGraph[key] === undefined) objGraph[key] = {}
    objGraph[key][innerKey] = innerVal 
});


class Trains {

// First Case:
    caseOne(node1 = 'A', node2 = 'B', node3 = 'C', graph = objGraph){
        if (!graph[node1] || !graph[node2] || !graph[node3]) return ("NO SUCH ROUTE")
        if (graph[node1][node2] && graph[node2][node3]) {
            return ('The distance of route A-B-C is valid: ' + 
                        (parseInt(graph[node1][node2]) + parseInt(graph[node2][node3])));
        } else { return (("NO SUCH ROUTE")) } 
    }

// Second Case:
    caseTwo(node1 = 'A', node2 = 'D', graph = objGraph){
        if (!graph[node1]) return ("NO SUCH ROUTE");
        if (graph[node1][node2]) {
            return ('The distance of route A-D is valid: ' + parseInt(graph[node1][node2]));
        } else { return ("NO SUCH ROUTE") }
    }

// Third Case:
    caseThree(node1 = 'A', node2 = 'D', node3 = 'C', graph = objGraph){
        if (!graph[node1] || !graph[node2]) return "NO SUCH ROUTE";
        if (graph[node1][node2] && graph[node2][node3]) {
            return ("The distance of route A-D-C is: " + (parseInt(graph[node1][node2]) + parseInt(graph[node2][node3])));
        } else { return "NO SUCH ROUTE" }
    }

// Fourth Case:
    caseFour(node1='A', node2='E', node3='B', node4='C', node5='D', graph = objGraph){
        if (!graph[node1] || !graph[node2] || !graph[node3]) return "NO SUCH ROUTE";
        if (graph[node1][node2] && graph[node2][node3] && graph[node3][node4] && graph[node4][node5]) {
            return ("The distance of route A-E-B-C-D is: " + (parseInt(graph[node1][node2]) + parseInt(graph[node2][node3]) +
            parseInt(graph[node3][node4]) + parseInt(graph[node4][node5])));
        } else { return "NO SUCH ROUTE" };
    }
        
// Fifth Case:
    caseFive(node1 = 'A', node2 = 'E', node3 = 'D', graph = objGraph){
        if (!graph[node1] || !graph[node2]) return "NO SUCH ROUTE";
        if (graph[node1][node2] && graph[node2][node3]) {
            return ("The distance of route A-E-D is: " + (parseInt(graph[node1][node2]) + parseInt(graph[node2][node3])));
        } else { return ("NO SUCH ROUTE") }
    }
        
// Sixth Case:
    caseSix(node1 = 'C', node2 = 'C', graph = iterGraph, type = "upTo"){
        if (!graph[node1]) return 0;
        return ("The number of trips starting at C and ending at C with a maximum of 3 stops is: " + 
        maxNumTrips(node1, node2, graph, type));
    }
        
// Seventh Case:
    caseSeven(node1 = 'A', node2 = 'C', graph = iterGraph){
        if (!graph[node1]) return 0;
        return ("The number of trips starting at A and ending at C with exactly 4 stops is: " +
        exactNumTrips(node1, node2, iterGraph));
    }
        
// Eight Case:
    caseEight(node1 = 'A', node2 = 'C', graphIter = iterGraph, graphObj = objGraph){
        if (!graphIter[node1]) return 0;
        return ("The length of the shortest route from A to C is: " + shortestRoute(node1, node2, graphIter, graphObj));
    }
        
// Ninth Case:
    caseNine(node1 = 'B', node2 = 'B', graphIter = iterGraph, graphObj = objGraph){
        if (!graphIter[node1]) return 0;
        return ("The length of the shortest route from B to B is: " + shortestRoute(node1, node2, graphIter, graphObj));
    }
        
        // Tenth Case:
    caseTen(){

        console.log("The number of the different routes from C to C with a distance of less than 30 is: " +
        differentRoutesDistance('C', 'C', iterGraph, "type"))
    }
        
}
let train = new Trains();

console.log(train.caseOne());
console.log(train.caseTwo());
console.log(train.caseThree());
console.log(train.caseFour());
console.log(train.caseFive());
console.log(train.caseSix());
console.log(train.caseSeven());
console.log(train.caseEight());
console.log(train.caseNine());
console.log(train.caseTen());

module.exports = Trains;