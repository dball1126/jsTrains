function maxNumTrips (start, end, graph) {
    
    function trips  (node, visited, end) {
        graph[node].forEach(n => {
            let key = Object.keys(n)[0];
            if (visited.length > 2 || visited.includes(key)) return;
            if (key !== end) {
                
                return trips(key, [...visited, key], end)
            }
            routes.push([...visited, key].join(''))
        });
    }
    const routes = [];
    trips(start, visited = [], end);
    return routes.length;
}

module.exports = maxNumTrips;