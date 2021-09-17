//Basic Hash 

const simpleHash = (key, arrLen) => {
  let total = 0
  for(let char of key){
    let charVal = char.charCodeAt(0) - 96
    total = (total + charVal) % arrLen
  }

  return total
}
/* Issues: Not fast O(N) & data is clustered */

const refinedHash = (key, arrLen) => {
  let total = 0
  let PRIME = 31
  for(let i = 0; i < Math.min(key.length, 100); i++){
    let charVal = key[i].charCodeAt(0) - 96
    total = (total * PRIME + charVal) % arrLen
  }
  return total
}
/* Better. This decreases collisions, and sets a ceiling on the number of comparisions O(100) => O(1) */


class HashTable{
  constructor(size=53){
    this.keyMap = new Array(size)
  }

  _hash(key){
    let total = 0
    let PRIME = 31
    for(let i = 0; i < Math.min(key.length, 100); i++){
      let charVal = key[i].charCodeAt(0) - 96
      total = (total * PRIME + charVal) % this.keyMap.length
    }
    return total
  }

  set(key, val){
    let ind = this._hash(key)
    let location = this.keyMap[ind]
    let pair = [key, val]
    if(location){
      this.keyMap[ind].push(pair)
    } else {
      this.keyMap[ind] = [pair]
    }
  }

  get(key){
    let ind = this._hash(key)
    let location = this.keyMap[ind]
    if(!location) return null
    for(let val of location){
      if(val[0] === key){
        return val[1]
      }
    }
    return null
  }

  keys(){
    let keys = []
    for(let val of this.keyMap){
      if(val){
        for(let innerVal of val){
          keys.push(innerVal[0])
        }
      }
    }
    return keys
  }

  values(){
    let values = []
    for(let val of this.keyMap){
      if(val){
        for(let innerVal of val){
          if(!values.includes(innerVal[1])){
            values.push(innerVal[1])
          }
        }
      }
    }
    return values
  }
}

let myHash = new HashTable()
myHash.set("red", "#FF0000")
myHash.set("green", "#00FF00")
myHash.set("blue", "#0000FF")
myHash.set("white", "#FFFFFF")
myHash.set("black", "#000000")
myHash.set("noire", "#000000")
console.log(myHash.keyMap)

console.log(myHash.get("red"))
console.log(myHash.keys())
console.log(myHash.values())