class Graph{
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

  addEdge(vert1, vert2){
    //Check if both verticies are in the graph
    if(this.adjList[vert1] && this.adjList[vert2]){
      //Add a connection to V2 in V1's array, and a connection to V1 in V2's array
      this.adjList[vert1].push(vert2)
      this.adjList[vert2].push(vert1) //Remove this, and boom, you've got a directed graph.
    } else {
      return `Error ${vert1} or ${vert2} not in graph`
    }
  }

  removeEdge(vert1, vert2){
    if(this.adjList[vert1] && this.adjList[vert2]){
      this.adjList[vert1] = this.adjList[vert1].filter(val => val !== vert2)
      this.adjList[vert2] = this.adjList[vert2].filter(val => val !== vert1)
    } else {
      return `Error ${vert1} or ${vert2} not in graph`
    }
  }

  removeVertex(vertex){
    if(!this.adjList[vertex]) return `Error: ${vertex} not in graph`
    this.adjList[vertex].map(val => this.removeEdge(val, vertex))
    delete this.adjList[vertex]
    return this
  }

  dfsRecursive(vertex, visited={}){
    visited[vertex] = true
    let neighbors = this.adjList[vertex]
    if(!neighbors.length) return;
    for(let neighbor of this.adjList[vertex]){
      if(!visited[neighbor]){
        this.dfsRecursive(neighbor, visited)
      }
    }
    return Object.keys(visited)
  }

  dfsIterative(vertex){
    let stack = [vertex]
    let visited = []
    let results = []
    while(stack.length){
      let currVertex = stack.pop()
      if(!visited.includes(currVertex)){
        results.push(currVertex)
        visited.push(currVertex)
        this.adjList[currVertex].map(neighbor => stack.push(neighbor))
      }
    }
    return results
  }

  bfs(vertex){
    let queue = [vertex]
    let visited = {}
    visited[vertex] = true
    let results = []
    let currVertex;
    while(queue.length){
      currVertex = queue.shift()
      results.push(currVertex)
      this.adjList[currVertex].map(neighbor => {
        if(!visited[neighbor]){
          visited[neighbor] = true
          queue.push(neighbor)
        }
      })
    }
    return results
  }
}

let myGraph = new Graph

myGraph.addVertex("Raymond")
myGraph.addVertex("Geoff")
myGraph.addVertex("Mareep")
myGraph.addVertex("Andrew")
myGraph.addEdge("Raymond", "Geoff")
myGraph.addEdge("Geoff", "Mareep")
myGraph.addEdge("Geoff", "Andrew")
console.log(myGraph.adjList)
console.log("---------------------")
myGraph.removeEdge("Geoff", "Raymond")
myGraph.addEdge("Andrew", "Raymond")
console.log(myGraph.adjList)
console.log("---------------------")
console.log(myGraph.dfsRecursive("Geoff"))
console.log(myGraph.dfsIterative("Geoff"))