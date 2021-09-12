/*Given a sorted array of integers, write a function that accepts a value and returns the index where the value passed to the function is located. If the value isn't found, return -1

Basically find the index of val within a sorted array, or -1, if it isn't there
*/

//Naive
const linearSearch = (arr, val) => {
  for(let i = 0; i<arr.length;i++){
    if(arr[i] === val){
      return i
    }
  }
  return -1;
}
