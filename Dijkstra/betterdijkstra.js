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

class Node{
  constructor(val, priority){
    this.val = val
    this.priority = priority
  }
}

class PriorityQueue{
  constructor(){
    this.vals = []
  }

  enqueue(val, priority){
    this.vals.push(new Node(val, priority))
    this.bubble()
  }

  bubble(){
    let ind = this.vals.length - 1
    let elem = this.vals[ind]
    while(ind > 0){
      let parentInd = Math.floor((ind - 1)/2)
      let parent = this.vals[parentInd]
      if(elem.priority >= parent.priority) break
      this.vals[parentInd] = elem
      this.vals[ind] = parent
      ind = parentInd
    }
  }

  dequeue(){
    let min = this.vals[0]
    let end = this.vals.pop()
    if(this.vals.length > 0){
      this.vals[0] = end
      this.sink()
    }
    return min;
  }

  sink(){
    let ind = 0
    let length = this.vals.length
    let elem = this.vals[0]

    while(true){
      let leftChildInd = (2 * ind) + 1
      let rightChildInd = (2 * ind) + 2
      let leftChild, rightChild
      let swap = null

      if(leftChildInd < length){
        leftChild = this.vals[leftChildInd]
        if(leftChild < elem){
          swap = leftChildInd
        }
      }
      if(rightChildInd < length){
        rightChild = this.vals[rightChildInd]
        if(!swap && rightChild.priority < elem.priority || swap && rightChild.priority < leftChild.priority){
          swap = rightChildInd
        }
      }
      if(!swap) break
      this.vals[ind] = this.vals[swap]
      this.vals[swap] = elem
      ind = swap
    }
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
myGraph.addEdge("Portland", "Chicago", 2)
myGraph.addEdge("Portland", "Oahu", 5)
myGraph.addEdge("Portland", "Austin", 8)
console.log(myGraph.dijkstra("Chicago", "Austin"))