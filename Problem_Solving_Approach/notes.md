## What Is An Algorithm

It's a set of steps that solves a particular problem. That's it.

Almost everything we do involves algoritms.

## How to Get Better At Solving Problems Real Good
1. Devise a problem-solving plan
2. Master common problem-solving patterns.

### Problem Solving Steps
1. Understand the problem
  * Restate the problem in your own words
  * What are the inputs? (this isn't as simple as it appears. Bounds, input types, etc all come into play)
  * What are the outputs? (what should the solution to the problem be)
  * Can the output be determined from the inputs? Do I have enough info to solve the problem? (You may need to first try solving the problem before you can be sure of this.) 

2. Explore concrete examples
  * Examples can help you better solve the problem/provide sanity checks to make sure you aren't way off-base
  * User Stories / Unit Tests
  * Start with the simplest possible example with the input and output. The examples that you can solve trivially on paper.
  * Then, progress to more complex examples. ASK QUESTIONS
  * Explore examples with empty inputs (helps to examine edge-cases)
  * Explore examples with invalid inputs (better for irl than interviews)

3. Break it down
  * Start explaining your step-by-step process. Explicitly break down your steps. Gives you a game plan, and helps interviewer to get a grasp of your thought process.

4. Solve/Simplify the problem
  * Solve the problem if you can, simplify the problem if you can't. It's better to start writing code, rather than mulling over a tough or sticking point. Often, you'll gain insight to the solution when working on a simpler approach. Even if it's not perfect, getting 90% of the way there is better than getting 10% of the way there, overthinking the whole way.
5. Refactor and polish
  * It's really important to strive for improvement. Missed opportunity if you don't. Efficiency AND legibility.
  * Go over the code line by line to see if you can make any improvements. Can the variables be named better, can you take redundant code and package it into a function, etc.
  * Even if you don't refactor, taking a look back can be helpful in solidifying these problem-solving skills
  * Try looking at other peoples' solutions to the same problem

## How to Improve Solving Problems

You can master common problem-solving problems. Common approaches to solving problems. They aren't fully comprehensive, but still useful to know.

### Frequency Counter
Use an object or set to collect values/frequencies of values. Better approach to nested loops, which is the typical approach to these types of problems.

Here's an example: 

Write a function that takes in two arrays. Return true if every value in the array has it's corresponding square in the second array. The arrays must be the same length and have the same frequency of values. The order doesn't matter

[2, 3, 4], [16, 9, 4] //true
[1, 2, 3], [1, 9] //false
[1, 2, 1], [4, 4, 1] //false (must have same freq)

### Multiple Pointer
Creating pointers or values that correspond to an index or position and move towards the beginning, middle, or end, based on a certain condition.

Essentially, you'll have two pointers in an array/str/etc that need to come together.

Example. Write a function that accepts a sorted array of integers. The function should find the first pair where the sum is 0. Return an array that includes both values that sum to zero, or undefined if a pair doesn't exist.

### Sliding Window
Create a window which can either be an array or number from one position to another. Depending on a certain condition, the window either increases or closes (and a new window is created). Useful for keeping tracks of subsets (sub-sequences of a string/array)

### Divide & Conquer
Dividing a dataset into smaller chunks, then repeating a process with a subset of data. This shit obliterates time complexity. The classic example is binary search.