const maxNumTrips = require('./maxNumTrips');

function shortestRoute(start, end, iterGraph, objGraph) {
    const routes = maxNumTrips(start, end, iterGraph).map(e => start + e);  // Add start to our routes for traversal reasons.

    const distances = routes.map(e => {

        let count = 0;
        for (let i = 1; i < e.length; i++) {   // For each route create a count and key into the objGraph to extract the distance.
            let num = e[i - 1];
            count += parseInt(objGraph[num][e[i]])
        }
        return count;
    })
    return Math.min(...distances); // Return the minimum route distance using the spread operator.
}

module.exports = shortestRoute;