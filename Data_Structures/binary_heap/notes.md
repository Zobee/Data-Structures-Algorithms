# Heaps

A binary heap is very similar to a BST, but with a few different rules. 
In a min heap, parent nodes are always smaller than their children, while in max heaps, parents are always larger than children. So there's really only an order up and down the tree, rather than from left to right like in a BST.

## Min and Max Heaps
As mentioned above, super similar to BSTs, but values are sorted top-down.

Here are their rules:

- Each parent has at most two child nodes
- The value of the parent is always greater/less than the value of the children
- No sorting between siblings (left could be larger than right, or vice versa)
- Made to be compact as possible. All children are as full as possible, and the left children are filled first

## Representing a heap as an array
100 --------
       |   |
       60  30
            |___________
       |________
       ----------------------
                |   |   |   |
                40  20  15  24
                             |__________________________
                         |______________________
                    |___________________
                |_______________
                ---------------------------------------------
                                |   |   |   |   |   |   |   |
                                25  19  12  6   8   11  12  10

[100, 60, 30, 40, 20, 15, 24, 25, 19, 12, 6, 8, 11, 12, 10]

Root lives at index 0. The formula for finding any child in this array heap monstrosity is 2n + 1 and 2n + 2

For example. 40 is at index 3. It's children (25 and 19) are at indicies 7 and 8.

You can go backwards too. For any child at index n. It's parent is at index Math.floor((n-1)/2)

So to find the parent of 8 which is at index 11. 10/2 = 5. It's parent is at index 5.

## Where they used?

Priority Queues
A priority queue is a DS where each element has a priority. Higher priority elems will be tackled before lower priority elems.

Big O of Binary Heaps

They excel at insertion and deletion. It's O(log n) for both.