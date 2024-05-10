function findTopKRequests(requests, k) {
    // Create a hash map to count the occurrences of each request ID
    const requestCount = {};
    requests.forEach(request => {
        requestCount[request] = (requestCount[request] || 0) + 1;
    });

    // Convert the hash map into an array of [request, count] pairs
    const requestCountArray = Object.entries(requestCount);

    // Sort the array based on the count in descending order
    requestCountArray.sort((a, b) => b[1] - a[1]);

    // Extract the top k requests
    const topKRequests = requestCountArray.slice(0, k).map(pair => pair[0]);

    // Reverse the order to report the most recent to the last
    return topKRequests.reverse();
}

// Example usage:
const requests = ["request1", "request2", "request1", "request3", "request2", "request1", "request4"];
const k = 2;
console.log(findTopKRequests(requests, k)); // Output: ['request1', 'request2']
