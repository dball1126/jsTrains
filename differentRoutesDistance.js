function differentRoutesDistance(start, end, graph, type) {
    const reducer = (acc, curr) => parseInt(acc) + parseInt(curr);
    function trips(node, visited, end, distances) {
        graph[node].forEach(n => {
            let key = Object.keys(n)[0];
            let val = Object.values(n)[0];
            if (visited.length > 10 && key === end) return;

            trips(key, [...visited, key], end, [...distances, val])

            let trip = visited.join("");
            if (visited[visited.length - 1] === end && !routes.includes(trip)) {
                allDistances.push(parseInt(distances.reduce(reducer)))
                routes.push(trip);}
        });
    }
    const allDistances = [];
    let distances = [];
    const routes = [];
    trips(start, visited = [], end, distances);
    console.log(allDistances.filter(e => e < 30).length)
    return routes;
}

module.exports = differentRoutesDistance;