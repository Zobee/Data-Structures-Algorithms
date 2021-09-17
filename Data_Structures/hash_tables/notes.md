# Hash Tables
You've definitely used one of these before. They're typically available out of the box in most programming languages.

A Hash Table is basically an object, or dictionary. It's used to store key-value pairs. They are real fast, and real powerful.

To implement our own version of this staple, we can use an array. In order to look up our values, we'll have to convert a key (string) into a corresponding index in our array to retrieve the value.

This can be done using a hash function (can't escape the blockchain). The idea of a hash function is that it will convert your key into a corresponding index. A hash function needs to be deterministic--the same key passed in will always return the same hash.

Hash functions nearly always take advantage of prime numbers to limit collisions (two keys returning the same hash value). Making sure your array has a prime length is also helpful for this.

## Collisions
Hashing isn't full-proof. There'll be times where your function returns the same hash value for two different keys. There are a couple of ways to deal with this:

Separate Chaining: Store the keys at the same index using a more robust data structure.

Linear Probing: Fuck sharing. When there's a collision, search through the array for the next empty spot, and put the key there.

## BIG O
AVG:
Insertion O(1)
Deletion O(1)
Access O(1)