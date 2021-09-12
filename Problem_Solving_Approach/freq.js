//Naive Solution

const double = (arr1, arr2) => {
  if (arr1.length !== arr2.length) return false;

  for (let i = 0; i < arr1.length; i++){
    let currInd = arr2.indexOf(arr1[i] ** 2)
    if (currInd === -1) return false;
    arr2.splice(currInd,1)
  }
  return true;
}

//Frequency Counter pattern 
const doubleFreqCounter = (arr1, arr2) => {
  if (arr1.length !== arr2.length) return false;

  let freqCounter1 = {}
  let freqCounter2 = {}

  //Basically creates a frequency hashmap. If val isn't in the obj yet, add it with a value of 1, otherwise, increment the current value by 1. The key is the value, remember.
  for(let val of arr1){
    freqCounter1[val] = (freqCounter1[val] || 0) + 1
  }
  for(let val of arr2){
    freqCounter2[val] = (freqCounter2[val] || 0) + 1
  }

  //for each key in the first map. First if checks value, second checks frequency
  for(let key in freqCounter1){
    //if key squared isn't in the second map, it means the arrays don't meet the critera, and are false.
    if(!(key ** 2 in freqCounter2)){
      return false
    }
    //if the value of map1 at index key isn't the same as the value of map2 at index key squared, it means the arrays have a different frequency, and are thus false
    if(freqCounter2[key ** 2] !== freqCounter1[key]){
      return false
    }
  }
  //If we get through the loop, all values exist within the correct frequency
  return true
}


//ANAGRAMS

/* Given two strings, write a function to determine if the second string is an anagram of the first. */

const isAna = (str1, str2) => {
  if(str1.length !== str2.length) return false;

  let freq1 = {};
  let freq2 = {};

  for(let char of str1){
    freq1[char] = freq1[char] + 1 || 1
  }

  for(let char of str2){
    freq2[char] = freq2[char] + 1 || 1
  }


  for(let key in freq1){
    if(!key in freq2) return false
    if(freq1[key] !== freq2[key]) return false
  }
  return true;
}