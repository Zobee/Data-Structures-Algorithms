# Linked Lists

A linked list is an ordered data structure, very similar to an array. Each element is a node that holds data, and a reference to the next node in the list. Lists are not indexed, so you can't access a random element in a ll as fast as you can in an array.

Put simply:

Lists are non-indexed, they contain data, and a node pointing to the next node in the list, and random access isn't allowed.

Arrays are ordered and indexed. You can access any index in an array at O(1) speed. This comes with the downside of nsertion and deletion being expensive operations. A singly linked list is linked one way, where each node only has a reference to the next node. A doubly linked list is bidirectional, meaning each node has a reference to the node before it, and the node after it.

Big O of SLL

Insertion O(1)
Renoval Depends- O(1) or O(N)
Searching O(N)
Access O(N)

Singly linked lists excel at insertion and removal.


Doubly Linked Lists

Like singly list lists, but with an additional pointer to the previous node. That's the double part. This opens up a whole new world of possiblities (backward iteration, etc). You do need to maintain an additional point (which also takes up space)

Big O of Doubly Linked List

insertion O(1)
Removal O(1)
Searching O(N)
Access O(N)