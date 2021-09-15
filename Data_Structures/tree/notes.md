# Trees

Trees are data structures that consist of nodes in a parent/child relationship. Each node can point to one or more subnodes. The very top node is called the root, and nodes with no children are called leaf nodes. Trees are non-linear data structures. Nodes can only point to children nodes. There must also only be one root. With an array, or linked list, there is one way to traverse it. With trees, there are many different ways to traverse it.

## Real Applications for Trees
- HTML DOM
- Network routing
- Abstract syntax trees
- Directory structure in computers
- Branching paths in choose your own adventure books

### Kinds of trees

Trees: Each node can have any number of children
              1
            /   \
          10     20
        /  | \  / | | \
      14  24  6 9 2 17 69


Binary Trees: Each node can have up to two children, but no more.

              4
            /   \
          50     40
        /   \   /  \
      20    10 2   23

Binary Search Tree: Special case of the binary tree. They are binary, but sorted in order. Any node on the tree that is < parent node is located on the left of it, while any child > parent node is located to the right of it.

              100
            /     \
          50      150
        /   \    /    \
      25    75  125   200

This structure makes searching easier. 

Big O of a BST
Insertion and searching have a time-complexity of O(log n). Like other divide and conquer approaches, you're splitting the tree in half every comparison, since the tree itself is sorted. When you double nodes, it only takes one more step to complete a search/insertion. 

DISCLAIMER, this doesn't necessarily work for some wack implementations of bsts. 

1
 \
  2
   \
    3
     \
      4
This is a valid tree (even though its stoopid to store values in this way). A tree of this configuration would lose the benefit of the D&C approach, and have a time complexity of O(N)

# Tree Traversal
How to visit every node at least one time. There are two common approaches to traversing a tree.

## Depth-first traversal
Depth first has you going down the tree from the root to a leaf, then back up.

          4
        /   \
       2     16
      /     /  \
     1     7    30

### DFS InOrder
Start from the leftmost node, and work your way up, going to the parent, then any sibling (if applicable) all the way up the tree until you hit the root. From the root, you then work your way down the right side of the tree

1 -> 2 -> 4 -> 7 -> 16 -> 30

### DFS PreOrder
Not the kind where you wait outside at midnight. You start at the root, go down the tree until you hit the leftmost node, and work your way back up.

4 -> 2 -> 1 -> 16 -> 7 -> 30

### DFS PostOrder
Kinda the opposite of PreOrder, where you work your way up from the bottom

1 -> 2 -> 7 -> 30 -> 16 -> 4

## Breadth-first traversal
You search each layer of the tree, starting from the root, and going from left to right.

          4
        /   \
       2     16
      /     /  \
     1     7    30

4 -> 2 -> 16 -> 1 -> 7 -> 30.

### Sooo... which is best?
It depends.