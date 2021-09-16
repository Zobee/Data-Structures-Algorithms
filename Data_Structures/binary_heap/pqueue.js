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