# Data Structures

Data structures are collections of values, the relationships among them, and the functions or operations that can be applied to the data. Objects and arrays are data structures.

Holds values, maintains relationships, and there are ways to interact with these data structures.

Will be using class to implement them.

### Why so many?
Different data structures excel at different things (linked lists are better at insertion than arrays, etc)

You've probably already used some before.

BROUGHT UP DURING INTERVIEWS

### ES6 class syntax

To implement our very own data structures, we'll need to build them up using classes. Here's a refresher of class syntax:

### What the heck is a class
A class is basically a blueprint for creating objects with pre-defined properties and methods

JS classes are just syntactic sugar over it's prototype-based inheritance

class Student {
  constructor(first, last){
    this.firstName = first
    this.lastName = last
  }
}

The object initialization method must be called constructor. 

let highSchooler = new Student("Kira", "Jones")

classes can also have methods.


class Student {
  constructor(first, last){
    this.firstName = first
    this.lastName = last
  }
  fullName(){
    return `${this.firstName} ${this.lastName}`
  }
}

fullName is an instance method. It's tied to a particular instance, and every instance of that class has access to that method. It's result is based on the particular instance that called it.

Class Methods

Denoted with the 'static' keyword. Mostly related to classes, and cannot be called by a class instance. Typically used for utility functions. Called with the class itself.

