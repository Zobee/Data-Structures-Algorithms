## Elementary Sorting Algorithms
Sorting is the process of rearranging the items in a collection so that the items are in some sort of order.

## Why?

Sorting is incredibly common, so it's important to know how it works. There are a bunch of different approaches to sorting, and knowing each's pros and cons is useful. It's also a classic interview topic.

JS has a default sort method. It sorts according to unicode by default, but you can also use a callback function that tells the method how to sort. The callback works by comparing two elements (a,b) and determines their sort order based on their return val. 
  * If it returns a negative number, a comes before b
  * If it returns a positive number, a comes after b
  * If it returns 0, both a and b are ostensibly equal

## Bubble Sort
Not efficent or commonly used. But it's a good basic problem.
The idea is that the larger values will bubble to the top.

Imagine we have a set of number [5, 23, 1, 15, 19]
What bubble sort does, is it loops through the array, compares two adjacent values, and swaps them if the left value is larger than the right. This should bubble up the largest value to the right. This process is repeated n - 1 times until the array has been sorted.

[5, 23, 1, 15, 19] - Init
[5, 23, 1, 15, 19] 
[5, 1, 23, 15, 19]
[5, 1, 15, 23, 19]
[5, 1, 15, 19, 23] - First pass complete. Now we only need to worry about the elements before 23
[1, 5, 15, 19, 23] - Technically, we're done now, but bubble sort would continue to sort.

If our data is almost sorted, bubble sort becomes really inefficient. There's one optimization we can add to make this more efficent--add a swap check. If nothing was swapped, that means the array is fully sorted, and we can return it.

The time complexity of bubble sort is O(N^2). Best case is O(N). With the optimization implemented, bubble sort may be more useful at sorting nearly sorted data. Without it though, it's pretty dookie. 

## Selection Sort

Similar to bubble, but instead of sorting the largest values first, it sorts the smallest values first.

You loop through an array several times, like bubble sort, but this time, you're comparing and making swaps to the front of the line, rather than swapping adjacent values. You check for the smallest element, and only swap that

[12, 4, 6, 10, 1, 3] - init
[1, 4, 6, 10, 12, 3]
[1, 3, 6, 10, 12, 4]
[1, 3, 4, 10, 12, 6]
[1, 3, 4, 6, 10, 12]

Time complexity is O(N^2). Selection sort only makes one swap per iteration. If, for whatever reason that matters to you, it may be better to bubble sort in those circumstances

## Insertion Sort

Builds up the sort by splitting the array in half, and having an always sorted portion.

Essentially, you build up a sorted portion by inserting elements where they belong

[4, 1, 8, 6, 13, 10]
[1, 4, 8, 6, 13, 10]
[1, 4, 6, 8, 13, 10]
[1, 4, 6, 8, 13, 10]
[1, 4, 6, 8, 10, 13]

Essentially, you'll be iterating backwards through the sorted portion, swapping elements, and putting the element into place.

The space complexity for all of these is O(1)

These three are roughly equivalent. All have quadratic time complexities. 

# Intermediate Sorting Algorithms
These algs improve time complexity of O(n log n), which is better than quadratic. That being said, they are less intuitive than the above 3.

## Merge Sort
It's splitting, merging, and sorting. Exploits the fact that an array of 0 or 1 element are alwayas sorted. 

The idea is to break down an array into smaller subarrays of 0 or 1 elements, then builds up a newly sorted array. Divide and Conquer Approach

[5, 1, 6, 10, 4, 2, 7, 3]
[5, 1, 6, 10] [4, 2, 7, 3]
[5, 1] [6, 10] [4, 2] [7, 3]
[5][1] [6][10] [4][2] [7][3] - Breakdown phase
[1, 5] [6, 10] [2, 4] [3, 7] - Merge/sort phase
[1, 5, 6, 10] [2, 3, 4, 7]
[1, 2, 3, 4, 5, 6, 7, 10]

Since you know each subarray is sorted, compiling the new array is just a matter of comparing. In the spirit of splitting shit up, you'll want to split this into two functions, a merge function, and a recursive sort function.

Big O of Merge sort. The time complexity is O(n log n)
O(log n) decompositions * O(n) comparisons

Space complexity is O(n)

## Quick Sort

Like merge sort, takes advantage that arrays of length 0 or 1 are already sorted (recursion).
Select a single 'pivot' element. moves all smaller nums to the left, and all bigger numbers to the right

Big O is O(n log n) same as merge sort.

## Radix Sort

The above sorts are known as 'comparison sorts'. Makes sense, since all of them involve comparing a value against another value. This is slooooow.

Radix sort is kinda niche. You don't make direct comparisons. It only works on numbers, but the upside is that it's faster than O(n log n).

It works in a totally different way than the above as well. It's an integer sort.

Imagine you have an array of ints 

[15, 12, 2, 9, 1, 52, 14, 23, 32]

radix sort goes through each number digit by digit and places them into 'buckets' based off of their last digit. The numbers are then arranged in that order, and the next digit is checked. This goes on until they're all sorted.

[15, 12, 2, 9, 1, 52, 14, 23, 32]

0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 |
    1   2   23  14  15              9 
       12
       32
       52

[1, 12, 2, 32, 52, 23, 14, 15, 9]

0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 |
1,  12  23  32      52  
2,  14    
9,  15

[1, 2, 9, 12, 14, 15, 23, 32, 52]

Big O of Radix: O(nk) with n being the numbers in the array, and k being the number of digits.

Can be* potentially better than comparison sorts--it's fuzzy

