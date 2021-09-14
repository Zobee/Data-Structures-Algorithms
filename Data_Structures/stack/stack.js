// Array Implementation

let stack = []
stack.push("pornhub")
stack.push("xhamster")
stack.push("stickytits")

stack.pop() // stickytits

/* Techinically, this array is being used as a stack. You can do the same with shift/unshift, but that is liess efficient */

// Linked List Implementation

class Node{
  constructor(val){
    this.val = val
    this.next = null
  }
}

class Stack{
  constructor(){
    this.length = 0
    this.top = null
  }

  push(val){
    let newNode = new Node(val)
    newNode.next = this.top
    this.top = newNode
    this.length++
  }

  pop(){
    if(!this.length) return null
    let popped = this.top
    this.top = popped.next
    popped.next = null

    this.length--
    return popped
  }
}

const myStack = new Stack()

myStack.push(10)
myStack.push(20)
console.log(myStack)

console.log(myStack.pop())
console.log(myStack.pop())
console.log(myStack)