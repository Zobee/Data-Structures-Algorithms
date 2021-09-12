# Big O Notation

Most Important Topic for learning DS/Algs

Big O Notation is a way to compare the performance of code. It's a way to accurately gauge the efficiency of a solution using time-complexity and space-complexity.

This is gonna come up in interviews A LOT.

Here's an example:

Write a function that calculates the sum of all numbers from 1 up to and including some number (n)

const sumFromOne = (end) => {
  let total = 0;
  let inc = 1;
  while(inc <= end){
    total+=inc;
    inc++;
  }
  return total;
}

Here's another solution

const sumFromOne = (end) => {
  return end * (end + 1) / 2;
}

Which solution is better? 

Typically, we evaluate speed and memory space. The best solutions are often the fastest and least memory-intensive. Since different computers will gauge times differently, Big O offers a method of determining complexity based on the number of operations a program needs to perform. 

The first solution above will always take n operations (n being the number input). This means that if the number is 2, it will take two operations to complete, 10 operations if n = 10, etc. This gives the approach a linear time-complexity O(N). The number of operations grows linearly with the number of inputs at a 1:1 ratio.

The second solution will always take 3 operations to complete, no matter how large the input value is. When dealing with Big O notation, we'll throw constants out, since they're typically irrelevant for larger operations. As such, we can say that this algorithm has a time-complexity of O(1), or constant time, since the time it takes will always be constant.

With Big O, we care about the general trend. There are constant assignments in the looping solution (like assigning values and incrementing that happens each loop) however, the general trend is that the number of operations grows linearly with the input.

Another example

const countUpDown = (n) => {
  console.log("Start Count") (1)
  for(let i = 1; i <= n; i++){ (n)
    console.log(i) (1 * n)
  }
  for(let j = n; j >= 1; j--){ (n)
    console.log(j) (1 * n)
  }
  console.log("End Count") (n)
}

2n + 2 is the full Big O valuation of this function, but remember that we don't actually care about the constants, and only care about general trends. Thus, we can simplify this down to O(N). As generally, this function will grow linearly with n.

And Another

const printPairs = (n) => {
  for(let i = 0; i <= n; i++){ (n)
    for(let j = 0; j <= n; j++){ (n * n) or n^2
      console.log(i, j) n^2 * 1
    }
  }
}

The largest term for the above function is n^2, which is the time-complexity of the function. It's O(n^2), or quadratic. The number of operations grow exponentially to n.

## Simplifying Big O Expressions

1. Constants don't matter. 
   O(2n) -> O(n). O(69) -> O(1). O(10n^2) -> O(n^2)

2. Smaller terms don't matter. 
   O(n + 5) -> O(n). O(2n + 4) -> O(n). O(n^2 + 5n + 8) -> O(n^2)

### Big O Shorthand
* Operations run in constant time 1000 + 5. 24215153953185 * 5355232532523. 3 - 1. They all run in constant time. 
* Variable assignments take constant time.
* Indexing arrays, or accessing a value in an object via key takes constant time
* The complexity of a loop is the length of the loop * the complexity of whatever happens inside of the loop
* We only care about the worst case. 

## Space Complexity
Still uses Big O, but is determined by the amount of space taken up by the code we're running

### Rules of Thumb
* Most Primitives (booleans, numbers, undefined, null) are constant space
* Strings are O(n) space
* Reference types are also O(n) space-wise. Where n is the length (for arrays) or the number of keys (for objects)

Here's an example:

const sum = (arr) => {
  let total = 0 (1)
  for (let i = 0; i < arr.length; i++) { (1)
    total += arr[i]
  }
}

Only the assignments matter here (assignment to total, and assignment to i). So this function takes an O(1) space.

Here's another:

const double = (arr) => {
  let newArr = []; (1)
  for(let i = 0; i < arr.length; i++){ (1)
    newArr.push(2 * arr[i]) (n)
  }
  return newArr
}

O(n + 2) -> O(n). This is because the space taken up by newArr is based on the length of the input arr.

## Logarithms

Logarithms are the inverse of exponentiation log2(8) = 3 -> 2^3 = 8. Essentially, what number to the power of 2 is equal to 8. It shares a relationship to 3 * 5 = 15 -> 15 / 5 = 3. A subscript won't always be there. When it isn't assume it to be 2.

A rule of thumb: The log of a number roughly measures the number of times you can divide that number by 2 before you get a value that's less than or equal to one.

log(8) -> 8 / 2 = 4. 4 / 2 = 2. 2 / 2 = 1. Three divisions, so log(8) is 3. 
log(25) -> 25 / 2 = 12.5. 12.5 / 2 = 6.25. 6.25 / 2 = 3.125. 3.12 / 2 = 1.06. 1.06 / 2 = 0.503. The log of 25 is somewhere between 4 and 5. It's not too important, but those are the basics.

O(log n) is the second best time-complexity. 

Efficient sorting algorithms and recursion utilize logarithms, so it's a good idea to understand the basics. 

## Big O With Data Structures

### Objects
BIG O:

let myObj = {};

Insertion | myObj.key = value | O(1)
Removal | delete myObj.key | O(1)
Searching | for(let key in myObj.keys)... | O(N)
Access | myObj.key | O(1)

### Array
BIG O:

let myArr = [];

Insertion | arr.push(val) | It depends... push O(1) unshift O(n)
Removal | arr.pop(val) | It depends... pop O(1) shift O(n)
Searching | arr.find(val) | O(n)
Access | arr[2] | O(1)
