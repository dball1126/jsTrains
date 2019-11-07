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

// First Case:
if (objGraph['A']['B'] && objGraph['B']['C']) {
    console.log("The distance of route A-B-C is: " + (parseInt(objGraph['A']['B']) + parseInt(objGraph['B']['C'])));
} else { console.log ("NO SUCH ROUTE")}

// Second Case:
if (objGraph['A']['D']) {
    console.log("The distance of route A-D is: " + (parseInt(objGraph['A']['D'])));
} else { console.log("NO SUCH ROUTE") }

// Third Case:
if (objGraph['A']['D'] && objGraph['D']['C']) {
    console.log("The distance of route A-D-C is: " + (parseInt(objGraph['A']['D']) + parseInt(objGraph['D']['C'])));
} else { console.log("NO SUCH ROUTE") }

// Fourth Case:
if (objGraph['A']['E'] && objGraph['E']['B'] && objGraph['B']['C'] && objGraph['C']['D']) {
    console.log("The distance of route A-E-B-C-D is: " + (parseInt(objGraph['A']['E']) + parseInt(objGraph['E']['B']) +
                                                      parseInt(objGraph['B']['C']) + parseInt(objGraph['C']['D'])));
} else { console.log("NO SUCH ROUTE") }

// Fifth Case:
if (objGraph['A']['E'] && objGraph['E']['D']) {
    console.log("The distance of route A-E-D is: " + (parseInt(objGraph['A']['B']) + parseInt(objGraph['B']['C'])));
} else { console.log("NO SUCH ROUTE") }

// Sixth Case:
console.log("The number of trips starting at C and ending at C with a maximum of 3 stops is: " + 
                                                                        maxNumTrips('C', 'C', iterGraph, "upTo"));

// Seventh Case:

console.log("The number of trips starting at A and ending at C with exactly 4 stops is: " +
                                                                        exactNumTrips('A', 'C', iterGraph));

// Eight Case:

console.log("The length of the shortest route from A to C is: " + shortestRoute('A', 'C', iterGraph, objGraph));

// Ninth Case:

console.log("The length of the shortest route from B to B is: " + shortestRoute('B', 'B', iterGraph, objGraph));

// Tenth Case:

console.log("The number of the different routes from C to C with a distance of less than 30 is: " +
                                                                        differentRoutesDistance('C', 'C', iterGraph, "type"))



// function differentRoutesDistance(start, end, graph) {
//     const reducer = (acc, curr) => parseInt(acc) + parseInt(curr);
//     function trips(node, visited, end, distance) {
//         graph[node].forEach(n => {
//             let key = Object.keys(n)[0];
//             let val = Object.values(n)[0];
//             if (distance.length && parseInt(distance.reduce(reducer)) < 30) return;
            
//             if (key !== end) trips(key, [...visited, key], end, [...distance, val])

//             let trip = visited.join("");
//             routes.push(trip);
//             if (distance.length) distances.push(parseInt(distance.reduce(reducer)))
//             if (visited[visited.length - 1] === end) {
//             }
//         });
//     }
//     let distance = [];
//     const routes = [];
//     const distances = [];
//     trips(start, visited = [], end, distance);
//     console.log(distances);
//     return routes;
// }