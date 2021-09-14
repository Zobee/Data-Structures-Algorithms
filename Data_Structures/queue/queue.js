//Array implementation

let myArrQueue = []
myArrQueue.push(1)
myArrQueue.push(2)
myArrQueue.shift()

/* Techinically, this array is being used as a queue. You can do the same with shift/unshift, but that is liess efficient Since removing from the front isn't ideal in an array, it's typically better to implement one using a linked list*/

class Node{
  constructor(val){
    this.val = val
    this.next = null
  }
}

class Queue{
  constructor(){
    this.length = 0
    this.head = null
  }

  enqueue(val){
    let newNode = new Node(val)
    if(!this.length){
      this.head = newNode
    } else {
      this.head.next = newNode
    }
    this.length++
    return this
  }

  dequeue(){
    if(!this.length) return null
    let oldHead = this.head
    this.head = oldHead.next

    oldHead.next = null
    this.length--
    return oldHead
  }
}

let myQueue = new Queue
console.log(myQueue)

myQueue.enqueue(10)
myQueue.enqueue(20)
console.log(myQueue)

console.log(myQueue.dequeue())
console.log(myQueue)