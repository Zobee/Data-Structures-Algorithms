class MaxBinHeap{
  constructor(){
    this.vals = []
  }

  insert(val){
    this.vals.push(val)
    if(this.vals.length){
      let currInd = this.vals.length - 1;
      while(currInd > 0){
        let parentInd = Math.floor(( currInd - 1 ) / 2 )
        if(this.vals[parentInd] < this.vals[currInd]){
          [this.vals[parentInd], this.vals[currInd]] = [this.vals[currInd], this.vals[parentInd]]
          currInd = parentInd
        } else {
          break
        }
      }
    }
    return this
  }
  extractMax(){
    let max = this.vals[0]
    let end = this.vals.pop()
    if(this.vals.length > 0){
      this.vals[0] = end
      this.sink()
    }
    return max;
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
        if(leftChild > elem){
          swap = leftChildInd
        }
      }
      if(rightChildInd < length){
        rightChild = this.vals[rightChildInd]
        if(!swap && rightChild > elem || swap && rightChild > leftChild){
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

let myMaxHeap = new MaxBinHeap
myMaxHeap.insert(10)
myMaxHeap.insert(20)
myMaxHeap.insert(55)
myMaxHeap.insert(30)
myMaxHeap.insert(12)
myMaxHeap.insert(140)

console.log(myMaxHeap.vals)

myMaxHeap.extractMax()
console.log(myMaxHeap.vals)
myMaxHeap.extractMax()
console.log(myMaxHeap.vals)