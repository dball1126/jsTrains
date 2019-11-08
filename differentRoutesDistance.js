function differentRoutesDistance(start, end, graph, type) {
    const reducer = (acc, curr) => parseInt(acc) + parseInt(curr);  // sum all routes, but parse the data to convert it from string to interger
    function trips(node, visited, end, distances) {
        graph[node].forEach(n => {
            let key = Object.keys(n)[0];
            let val = Object.values(n)[0];
            if (distances.length && parseInt(distances.reduce(reducer)) > 29) return;  // once distance reaches 30 kill the recursive call, we use the reducer to add up all the costs
                
            

            trips(key, [...visited, key], end, [...distances, val]) // recursively check every route for every single node that is a child of the parent

            let trip = visited.join("");
            if (visited[visited.length - 1] === end && !routes.includes(trip)) {
                allDistances.push(parseInt(distances.reduce(reducer)))   // distances are equivalent to the route [1,2,3] ['A', 'B', 'C'] // so we add up allt he costs and that becomes the distance
                routes.push(trip);}
        });
    }
    
    const allDistances = [];  // keep track of distances
    const routes = [];        // keep track of the routes
    trips(start, visited = [], end, distances = []);  
    return allDistances.filter(e => e < 30).length;
}

module.exports = differentRoutesDistance;