class Node{
  constructor(val){
    this.val = val
    this.prev = null
    this.next = null
  }
}

class DoubleLinkedList{
  constructor(){
    this.length = 0;
    this.head = null;
    this.tail = null;
  }

  hasLength(){
    return !!this.length
  }

  push(val){
    let node = new Node(val)
    if(!this.head) {
      this.head = node;
      this.tail = node;
    } else {
      this.tail.next = node
      node.prev = this.tail
      this.tail = node
    }
    this.length++
    return this
  }

  pop(){
    if(!this.hasLength()) return undefined;
    let currTail = this.tail
    if(this.length === 1) {
      this.head = null
      this.tail = null
    } else {

      let newTail = currTail.prev
      newTail.next = null
      this.tail = newTail
      this.length--
      currTail.prev = null
    }
    return currTail
  }

  shift(){
    if(!this.hasLength()) return undefined
    let oldHead = this.head

    if(this.length === 1) {
      this.head = null
      this.tail = null
    } else {

      this.head = oldHead.next
      newHead.prev = this.tail
      this.head.prev = null
      oldHead.next = null
    }
    this.length--
    return oldHead
  }

  unshift(val){
    let newHead = new Node(val)
    if(!this.hasLength()){
      this.head = newHead;
      this.tail = newHead;
    } else {
      newHead.next = this.head
      this.head.prev = newHead
      this.head = newHead;
    }
    this.length++
    return this;
  }

  getInd(ind){
    if(ind < 0 || ind >= this.length) return null
    let midPoint = Math.floor(this.length / 2)
    let node;
    if(ind >= midPoint){
      //Start from back
      node = this.tail
      for(let i = this.length - 1; i > ind; i--){
        node = node.prev
      }
    } else {
      //Start from the front
      node = this.head
      for(let i = 0; i < ind; i++){
        node = node.next
      }
    }
    return node
  }

  setInd(ind, val){
    let nodeToUpdate = this.getInd(ind)
    nodeToUpdate.val = val
  }

  insert(ind, val){
    if(ind < 0 || ind > this.length) return undefined
    if(ind === 0) return this.unshift(val)
    if(ind === this.length) return this.push(val)
    

    let newNode = new Node(val)
    //Update the ref on node ind - 1 to newNode
    let prevNode = this.getInd(ind - 1)
    let nextNode = prevNode.next;
    prevNode.next = newNode;
    nextNode.prev = newNode

    //Set refs of newNode
    newNode.next = nextNode
    newNode.prev = prevNode

    this.length++;
    return this
  }
  remove(ind){
    if(ind < 0 || ind >= this.length) return undefined
    if(ind === 0) return this.shift()
    if(ind === this.length - 1) return this.pop()

    let removedNode = this.getInd(ind)
    let nextNode = removedNode.next
    let prevNode = removedNode.prev

    nextNode.prev = prevNode
    prevNode.next = nextNode
  
    removedNode.next = null
    removedNode.prev = null

    this.length--
    return removedNode
  }
}

let myList = new DoubleLinkedList()
myList.push(1)
myList.push(2)
