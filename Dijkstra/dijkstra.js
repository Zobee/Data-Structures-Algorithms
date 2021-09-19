class WeightedGraph{
  constructor(){
    this.adjList = {}
  }

  addVertex(val){
    if(!this.adjList[val]){
      this.adjList[val] = []
    } else {
      return "Error: This point already exists"
    }
  }

  addEdge(v1, v2, priority){
    if(this.adjList[v2] && this.adjList[v2]){
      this.adjList[v1].push({node: v2, priority})
      this.adjList[v2].push({node: v1, priority})
    } else {
      return `Error ${v1} or ${v2} not in graph`
    }
  }
  _setup(start){
    let previous = {}
    let distances = {}
    let distanceQueue = new PriorityQueue
    for(let key in this.adjList){
      previous[key] = null
      if(key !== start){
        distances[key] = Infinity
        distanceQueue.enqueue(key, Infinity)
      } else {
        distances[key] = 0
        distanceQueue.enqueue(key, 0)
      }
    }
    return {previous, distances, distanceQueue}
  }

  dijkstra(start, end){
    const {previous, distances, distanceQueue} = this._setup(start)
    let path = []
    let smallest;
    while(distanceQueue.vals.length){
      smallest = distanceQueue.dequeue().val
      if(smallest === end){
        while(previous[smallest]){
          path.push(smallest)
          smallest = previous[smallest]
        }
        break;
      }
      if(smallest || distances[smallest] !== Infinity){
        for(let neighbor in this.adjList[smallest]){
          let nextNode = this.adjList[smallest][neighbor]
          console.log(nextNode)
          let distanceCandidate = distances[smallest] + nextNode.priority
          if(distanceCandidate < distances[nextNode.node]){
            distances[nextNode.node] = distanceCandidate
            previous[nextNode.node] = smallest
            distanceQueue.enqueue(nextNode.node, distanceCandidate)
          }
        }
      }
    }
    return path.concat(smallest).reverse()
  }
}

class PriorityQueue{
  constructor(){
    this.vals = [];
  }
  enqueue(val, priority){
    this.vals.push({val, priority})
    this.sort()
  }
  dequeue(){
    return this.vals.shift()
  }
  sort(){
    this.vals.sort((a, b) => a.priority - b.priority)
  }
}

const myGraph = new WeightedGraph
myGraph.addVertex("New York")
myGraph.addVertex("Miami")
myGraph.addVertex("California")
myGraph.addVertex("Austin")
myGraph.addVertex("Chicago")
myGraph.addVertex("Portland")
myGraph.addVertex("Oahu")

myGraph.addEdge("New York", "Miami", 10)
myGraph.addEdge("New York", "California", 15)
myGraph.addEdge("Miami", "Austin", 18)
myGraph.addEdge("Miami", "Chicago", 12)
myGraph.addEdge("Austin", "California", 6)
myGraph.addEdge("Chicago", "California", 9)
myGraph.addEdge("Chicago", "New York", 1)
myGraph.addEdge("Portland", "Chicago")
myGraph.addEdge("Portland", "Oahu", 5)
myGraph.dijkstra("Oahu", "Austin")