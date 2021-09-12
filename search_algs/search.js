const linSearch = (arr, val) => {
  for(let i = 0; i < arr.length; i++){
    if(arr[i] === val) return i
  }
  return -1
}

const binSearch = (arr, val) => {
  //Find the midpoint of arr
  //check if midpoint is greater to, less than, or the match
  //From there, you just keep splitting the array in half until you find the value
  let start = 0
  let end = arr.length - 1

  let mid = Math.floor((start + end) / 2);
  while(start < end){
    if(arr[mid] === val) return mid
    if(arr[mid] < val){
      start = mid;
    } else {
      end = mid;
    }
    mid = Math.floor((start + end) / 2);
  }
  return -1
}



//Naive String Search

const strSearch = (longStr, shortStr) => {
  let count = 0;
  for(let i = 0; i < longStr.length; i++) {
    let matchChars = 0;
    for (let j = 0; j< shortStr.length; j++){
      if(shortStr[j] == longStr[i + j]) matchChars++
    }
    if(matchChars === shortStr.length){
      count++;
    }
  }
  return count
}