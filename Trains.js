// readFile function is defined. 
const fs = require('fs'); 

let sentence = (fs.readFileSync('./input.txt').toString());
if (sentence.includes('\n')) sentence = sentence.replace('\n', ",") // if input is multiple lines turn it into one string
let iterGraph = {};
sentence.split(",").forEach(e => {  // This is where we create a Iterable graph.
    let key = e[0], innerKey = e[1], innerVal = e[2];

    if (iterGraph[key] === undefined) iterGraph[key] = []
        let obj = {};
        obj[innerKey] = innerVal;
        iterGraph[key].push(obj)
});
let objGraph = {};
sentence.split(",").forEach(e => {  // This is where we create a object graph.
    let key = e[0], innerKey = e[1], innerVal = e[2];
    if (objGraph[key] === undefined) objGraph[key] = {}
    objGraph[key][innerKey] = innerVal 
});

// First Case:
if (objGraph['A'] && objGraph['A']['B']) {
    console.log("The distance of route A-B-C is: " + (parseInt(objGraph['A']['B']) + parseInt(objGraph['B']['C'])));
} else { console.log ("NO SUCH ROUTE")}
