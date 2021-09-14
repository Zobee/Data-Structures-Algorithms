//Bubble Sort

const bubble = (arr) => {
  let len = arr.length - 1
  while(len > 0){
    for(let i = 0; i < len; i++){
      if(arr[i] > arr[i+1]){
        //Old skoo way
        // let tmp = arr[i]
        // arr[i] = arr[i+1]
        // arr[i+1] = tmp

        //ES6 Way
        [arr[i],arr[i+1]] = [arr[i+1],arr[i]]
      } 
    }
    len--
  }
  return arr
}

const bubbleV2 = (arr) => {
  let len = arr.length - 1
  while(len > 0){
    let swap = false;
    for(let i = 0; i < len; i++){
      if(arr[i] > arr[i+1]){
        [arr[i],arr[i+1]] = [arr[i+1],arr[i]]
        swap = true;
      } 
    }
    if(!swap) return arr;
    len--
  }
  return arr
}

//Selection Sort

const selection = (arr) => {
  for(let i=0;i<arr.length;i++){
    let minInd = i
    for(let j=i; j<arr.length; j++){
      if(arr[j] < arr[minInd]){
        minInd = j
      }
    }
    if(minInd === i) return arr;
    [arr[i],arr[minInd]] = [arr[minInd],arr[i]]
  }
  return arr;
}

//Insertion Sort

const insertion = (arr) => {
  //Iterate through the loop starting at the second val
  for (let i = 1; i < arr.length; i++) {
    let current = arr[i]; //currVal
    let j = i - 1; //end of sorted portion
    //Iterate through the sorted portion to the beginning while the current ind value is less than the currently iterating value. 
    while ( (j >= 0) && (current < arr[j]) ) {
        arr[j+1] = arr[j]; //move the value up by one
        j--;
    }
    arr[j+1] = current; //insert the value wherever the loop stops
  }
  return arr;
}

//console.log(insertion([2,1,15,25,12,9]))


//Merge Sort

const merge = (arr1, arr2) => {
  let sorted = []
  let p1 = 0
  let p2 = 0
  while(p1 < arr1.length && p2 < arr2.length){
    if(arr1[p1] > arr2[p2]){
      sorted.push(arr2[p2])
      p2++
    } else {
      sorted.push(arr1[p1])
      p1++
    }
  }
  if(p1 < arr1.length) sorted = sorted.concat(arr1.slice(p1));
  if(p2 < arr2.length) sorted = sorted.concat(arr2.slice(p2));
  return sorted
}

const mergeSort = (arr) => {
  //base case = arr.length is 1 or 0
  if(arr.length <= 1) return arr

  //recursive case is arr.length > 1
  let midpoint = Math.floor(arr.length / 2)
  return merge(mergeSort(arr.slice(0, midpoint)), mergeSort(arr.slice(midpoint)))
}

//Radix Sort

//Gets a digit of a number 
const getDigit = (num, place) => {
  //intuitive way
    // let str = num.toString()
    // return parseInt(str[str.length - place])

  //Mathy Way
  return Math.floor((num / Math.pow(10, place - 1)) % 10);
}


const getNumDigits = (num) => {
  //Intuitive way
    // if(num < 0) num = num * -1
    // return String(num).length

  //Mathy way
  if(num === 0) return 1;
  return Math.floor(Math.log10(Math.abs(num))) + 1;
}


const getMaxDigits = (nums) => {
  let maxDigits = -Infinity;
  for(let num of nums){
    let currDigits = getNumDigits(num)
    if(maxDigits < currDigits) maxDigits = currDigits
  }
  return maxDigits;
}

const radixSort = (arr) => {
  let maxDigits = getMaxDigits(arr) //Number of outer loop iterations
  for(let i = 0; i <= maxDigits; i++){
    let buckets = Array.from({length: 10}, () => []) //Create 10 buckets (0-9)
    for(let j = 0; j < arr.length; j++){
      let currDigit = getDigit(arr[j], i) //Get the current digit for arr[i]
      buckets[currDigit].push(arr[j]) //Add the value to it's bucket
    }
    arr = [].concat(...buckets) //Replace the old array with the bucketed items in order
  }
  return arr
}

console.log(radixSort([15, 12, 2, 9, 1, 52, 14, 23, 32]))