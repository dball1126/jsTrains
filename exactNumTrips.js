function exactNumTrips(start, end, graph) {
    const reducer = (acc, curr) => acc + curr;
    function trips(node, visited, end, distance) {
        graph[node].forEach(n => {
            let key = Object.keys(n)[0];
            let val = Object.values(n)[0];
            if (visited.length > 3 && key === end) return;
            
               trips(key, [...visited, key], end, distance)
            
               let trip = visited.join("");
            if (visited[visited.length - 1] === end && !routes.has(trip) && trip.length === 4) routes.add(trip);
        });
    }
    let distance = 0;
    const routes = new Set();
    trips(start, visited = [], end, distance);
    return routes.size;
}

module.exports = exactNumTrips;