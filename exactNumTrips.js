function exactNumTrips(start, end, graph) {
    
    function trips(node, visited, end) {
        graph[node].forEach(n => {
            let key = Object.keys(n)[0];
            if (visited.length > 3 && key === end) return;
            
               trips(key, [...visited, key], end)
            
               let trip = visited.join("");
            if (visited[visited.length - 1] === end && !routes.has(trip) && trip.length === 4) routes.add(trip);
        });
    }

    const routes = new Set();
    trips(start, visited = [], end);
    return routes.size;
}

module.exports = exactNumTrips;