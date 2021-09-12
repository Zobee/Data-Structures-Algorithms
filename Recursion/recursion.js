const sumRange = num => {
  if(num === 1) return 1; //base case
  return num + sumRange(num - 1); //recursive case
}

const factorial = n => {
  if(n === 1) return 1
  return n * factorial(n - 1)
}


//Helper Recursion
const getOdds = (arr) => {
  let odds = []

  const helper = (helperInput) => {
    //base case. Empty array
    if(helperInput.length === 0){
      return;
    }

    //If number is odd, add to results
    if(helperInput[0] % 2 !== 0){
      odds.push(helperInput[0])
    }

    //Recursive call with a different input
    helper(helperInput.slice(1))
  }

  helper(arr)
  return odds;
}

//You can actually do the above without using a helper method. Here's the 'pure' solution

const getOddsPure = (arr) => {
  let odds = []

  //base case
  if(arr.length === 0) return odds;

  if(arr[0] % 2 !== 0){
    odds.push(arr[0])
  }

  //Recursive--concat each subarray onto the preceding one
  odds = odds.concat(getOddsPure(arr.slice(1)))
  return odds;
}

/*
getOddsPure([1,2,3]) -> [1,3]

odds = []
odds = [1] since 1 is odd

odds = odds.concat(getOddsPure([2,3])) Remember that odds is currently [1]

odds = []
odds = odds.concat(getOddsPure([3])) In this iteration, odds is []

odds = []
odds = [3] since 3 is odd
odds = odds.concat(getOddsPure([])) In this iteration, odds is [3]

odds = []
since arr.length === 0 returns []

[] gets concatted to [3], which gets concatted to [], which gets concatted to [1], which is then returned
*/

