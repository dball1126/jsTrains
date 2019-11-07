function differentRoutesDistance(start, end, graph, type) {
    const reducer = (acc, curr) => parseInt(acc) + parseInt(curr);
    function trips(node, visited, end, distances) {
        graph[node].forEach(n => {
            let key = Object.keys(n)[0];
            let val = Object.values(n)[0];
            // if (distances.length && key === end && parseInt(distances.reduce(reducer)) < 30) answer.push(parseInt(distances.reduce(reducer))) 
            if (distances.length && parseInt(distances.reduce(reducer)) > 29) {
                // console.log(parseInt(distances.reduce(reducer)));
                return;
            }

            trips(key, [...visited, key], end, [...distances, val])

            let trip = visited.join("");
            if (visited[visited.length - 1] === end && !routes.includes(trip)) {
                allDistances.push(parseInt(distances.reduce(reducer)))
                routes.push(trip);}
        });
    }
    
    const allDistances = [];
    const routes = [];
    trips(start, visited = [], end, distances = []);
    return allDistances.filter(e => e < 30).length;
}

module.exports = differentRoutesDistance;