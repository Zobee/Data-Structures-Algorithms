class Node{
  constructor(val){
    this.val = val
    this.leftChild = null
    this.rightChild = null
  }
}

class BinarySearchTree{
  constructor(){
    this.root = null
  }

  find(val, node = this.root){
    if(!node) return null
    if(node.val === val) return node
    if(!node.leftChild && !node.rightChild) return "Not Found"
    if(val > node.val){
      return this.find(val, node.rightChild)
    } else {
      return this.find(val, node.leftChild)
    }
  }

  insert(val){
    let newNode = new Node(val)
    if(!this.root){
      this.root = newNode
    } else {
      let currNode = this.root
      let foundHome = false
      while(!foundHome){
        if(newNode.val === currNode.val) return null
        if(newNode.val < currNode.val){
          if(currNode.leftChild){
            currNode = currNode.leftChild
          } else {
            currNode.leftChild = newNode
            foundHome = true
          }
        } else {
          if(currNode.rightChild){
            currNode = currNode.rightChild
          } else {
            currNode.rightChild = newNode
            foundHome = true
          }
        } 
      }
    }
    return this
  }
  bfs(){
    let queue = []
    let visited = []
    queue.push(this.root)
    while(queue.length){
      let node = queue.shift()
      visited.push(node.val)
      if(node.leftChild){
        queue.push(node.leftChild)
      }
      if(node.rightChild){
        queue.push(node.rightChild)
      }
    }
    return visited
  }

  dfsPreOrder(){
    let visited = []
    let currentNode = this.root
    const addNode = (node, visited) => {
      visited.push(node.val)
      if(node.leftChild) addNode(node.leftChild, visited)
      if(node.rightChild) addNode(node.rightChild, visited)
    }
    addNode(currentNode, visited)
    return visited
  }

  dfsInOrder(){
    let visited = []
    let currentNode = this.root
    const addNode = (node, visited) => {
      if(node.leftChild) addNode(node.leftChild, visited)
      visited.push(node.val)
      if(node.rightChild) addNode(node.rightChild, visited)
    }
    addNode(currentNode, visited)
    return visited
  }

  dfsPostOrder(){
    let visited = []
    let currentNode = this.root
    const addNode = (node, visited) => {
      if(node.leftChild) addNode(node.leftChild, visited)
      if(node.rightChild) addNode(node.rightChild, visited)
      visited.push(node.val)
    }
    addNode(currentNode, visited)
    return visited
  }
}

let myTree = new BinarySearchTree
myTree.insert(10)
myTree.insert(15)
myTree.insert(20)
myTree.insert(5)
myTree.insert(4)
myTree.insert(11)

/*   
         10
        /  \
       5    15
      /    /  \
     4    11   20 
*/

console.log(myTree.find(4))
console.log(myTree.bfs())
console.log(myTree.dfsPreOrder())
console.log(myTree.dfsPostOrder())
console.log(myTree.dfsInOrder())