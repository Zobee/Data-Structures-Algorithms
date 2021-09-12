/* Write a function that accepts an array of ints and a number n. The function should calculate the max sum of n consecutive numbers of in the array 

Basically, find the n-length sequence of values in the array with the largest sum.
*/

//Naive
const maxSubArraySum = (arr, n) => {
  if(n > arr.length) return null
  let max = -Infinity

  for(let i = 0; i < arr.length - n + 1; i++){
    let temp = 0;
    for (let j = 0; j < n; j++){
      temp += arr[i + j];
    }
    if (temp > max){
      max = temp
    }
  }
  return max;
}

//Window Approach
const maxSubArraySumWindow = (arr, n) => {
  //For edge cases
  if(arr.length < n) return null;

  let maxSum = 0;
  let tempSum = 0;

  //get the sum for the first n digits
  for(let i = 0; i < n; i++) {
    maxSum += arr [i]
  }

  tempSum = maxSum

  //we start at n and iterate to the end of the loop
  for(let i = n; i < arr.length; i++){
    //You don't need to add each sequence together, you can simply subtract the leftmost value, add the rightmost value, and only update maxSum when you find a value that exceeds it. Fucking clever
    tempSum = tempSum - arr[i - n] + arr[i]
    maxSum = Math.max(maxSum, tempSum)
  }
  return maxSum;
}