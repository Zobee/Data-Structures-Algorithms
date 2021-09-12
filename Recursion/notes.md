# Recursion

Formal Definition: A process that calls itself. A recursive function is a function that calls itself.
It's used everywhere. JSON.parse / JSON.stringify are recursive

## Two essential components of a recursive function
The recursive case (where the function calls itself over and over)
The base case (a trivial case that returns a value)


## Visualize the Call-Stack

### Functions behind the scenes
In almost all programming languages, there's a built-in data structure that manages what happens when functions are invokes. The Call Stack.

When a function is invoked, it gets added (pushed) to the stack. When the function ends, it is rmoved  (popped) from the stack.

A stack is just another data structure, one that's structured like a stack of books. Last in, first out.

I always think of recursion as a spring.


## Pitfalls

No base-case, or incorrect base-case
Forgetting to return/returning the incorrect value
Recursion is built on returning.


## Helper Method Recursion

Utilizing an outer function, with a recursive function within the outer function. We call the outer function. This is very useful when you need to persist something between recursive calls.

### Pure Recursion Pro Tips
For arrays, use methods like slice, the spread operator, and concat that do not mutate the original array