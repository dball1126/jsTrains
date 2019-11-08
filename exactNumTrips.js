function exactNumTrips(start, end, graph) {
    function trips(node, visited, end, distance) {
        graph[node].forEach(n => {
            let key = Object.keys(n)[0];    // the letter of the route
            let val = Object.values(n)[0];  // the cost of the route
            if (visited.length > 3 && key === end) return;  // All routes upTo and including 4
            
               trips(key, [...visited, key], end, distance) 
            
               let trip = visited.join(""); // The actual route via string
            if (visited[visited.length - 1] === end && !routes.has(trip) && trip.length === 4) routes.add(trip);
                // Extract routes that end with C and have a length of 4;
        });
    }
    let distance = 0;
    const routes = new Set(); // lookup is constant time
    trips(start, visited = [], end, distance);
    return routes.size;
}

module.exports = exactNumTrips;