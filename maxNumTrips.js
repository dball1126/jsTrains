function maxNumTrips (start, end, graph, type) {
    function trips  (node, visited, end) {
        graph[node].forEach(n => {
            let key = Object.keys(n)[0];  // Create a key from a JavaScript object use extract the first element
            if (visited.length > 2 || visited.includes(key)) return; 
            if (key !== end) {  // If we have not reached the end node we keep checking

                return trips(key, [...visited, key], end)  // This is where the real searching is doing as we recursively check each node
            }
            routes.push([...visited, key].join('')) // Our actual route converted to a string. 
        });
    }
    const routes = [];
    trips(start, visited = [], end);
    if (type === "upTo") return routes.length;  // Conditional since this function is being used for the shortestRoute as well.
    return routes;
}

module.exports = maxNumTrips;