// Singly Linked List
class Node{
  constructor(val){
    this.val = val
    this.next = null
  }
}

class SingleLinkedList{
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
      this.tail = node
    }
    this.length++
    return this
  }

  pop(){
    if(!this.hasLength()) return undefined
    if(this.length === 1) {
      let pop = {...this.head};
      this.head = null
      this.tail = null
      this.length--
      return pop
    }
    let currNode = this.head
    let prevNode = currNode
    while(currNode.next) {
      prevNode = currNode
      currNode = currNode.next
    }
    this.tail = prevNode
    this.tail.next = null
    this.length--
    return currNode
  }

  shift(){
    if(!this.hasLength()) return undefined
    let shift = this.head
    this.head = this.head.next
    this.length--
    return shift
  }

  unshift(val){
    let newHead = new Node(val)
    if(!this.hasLength()){
      this.head = newHead;
      this.tail = newHead;
    } else {
      newHead.next = this.head
      this.head = newHead;
    }
    this.length++
    return this;
  }

  getInd(ind){
    if(ind < 0 || ind >= this.length) return null
    let node = this.head
    for(let i = 0; i < ind; i++){
      node = node.next
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

    //Set ref of newNode to node ind
    newNode.next = nextNode
    this.length++;
    return this
  }

  remove(ind){
    if(ind < 0 || ind >= this.length) return undefined
    if(ind === 0) return this.shift()
    if(ind === this.length - 1) return this.pop()

    let prevNode = this.getInd(ind - 1)
    let removed = prevNode.next
    prevNode.next = prevNode.next.next
    return removed
  }

  reverse(){
    let node = this.head
    this.head = this.tail
    this.tail = node
    let nextNode;
    let prev = null;
    for(let i = 0; i < this.length; i++){
      nextNode = node.next
      node.next = prev;
      prev = node
      node = nextNode
    }
    return this
  }
}

let myList = new SingleLinkedList()

// myList.push(10)
// myList.push(20)
// myList.push(30)
// myList.unshift(1)
// console.log(myList.length)
// myList.insert(4, "hoya")
// console.log(myList)
// myList.reverse()
// console.log(myList)
