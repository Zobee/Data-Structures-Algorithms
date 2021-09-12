# Search Algorithms

A searching algorithm is just an algorithm for finding a subset of data within a set.

Linear search is the basic approach. Start at the beginning, and go through one at a time, making a comparison each time until the value is found, or the data has been exhausted. Typically, this is the best solution for unsorted data, but when data is sorted, there is a better approach.

## Big O of Linear Search
Best case is O(1) | Worst case is O(N)

## Binary Search
The data needs to be sorted in order to implement binary search, but it works incredibly well. Much better than the linear approach.

The worst case scenario gives binary search a O(log n) time complexity. Again, the caveat is that the input array needs to be sorted
