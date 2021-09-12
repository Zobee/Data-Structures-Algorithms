//Naive

const sumZero = (arr) => {
  for(let val of arr){
    for(let val2 of arr){
      if((val + val2) === 0 && val !== 0) return [val, val2]
    }
  }
}

//Multi Point Approach. This works because we know the array is sorted

const sumZeroMulti = (arr) => {
  const pointA = 0;
  const pointB = arr.length - 1;

  while(pointA < pointB){
    let sum = arr[pointA] + arr[pointB]
    switch(sum){
      case 0:
        return [arr[pointA], arr[pointB]]
      case 1:
        pointB--;
        break;
      case -1:
        pointA++;
        break;
    }
  }
  return false;
}

/* implement a function that takes in a sorted array and counts the unique values in that array
there can be negative numbers, but it will always be sorted */

const uniqueCount = (arr) => {
  if (arr.length < 2) return 1;

  let p1 = 0;
  let p2 = 1;

  while(p2 < arr.length){
    //If the value of index p1 doesn't equal the value of index p2, this means that there's a new number
    if(arr[p1] !== arr[p2]){
      p1++
      arr[p1] = arr[p2]
    }
    p2++;
  }
  return p1 + 1;
}