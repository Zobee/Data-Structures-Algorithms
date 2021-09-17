# Graphs

In simple terms, a graph is a data structure similar to a tree, but with each node can point to any other node. Where trees are hierarchical, graphs aren't necessarily. There's no root, or parent node in graphs. Instead of nodes, graphs are made up of verticies. A vertex is a node. An edge is the connection between two nodes. Graphs are hella useful in many real-world applications, networking (social or otherwise), routing, GPS mapping.

## Types of graphs

Graphs can be directed or undirected.

In an undirected graph, there's no directionality associated with edges. They're bi-directional, and you can go back and forth across edges. This would be like a friend on facebook. They are your friend, and you are their friend. That relationship runs in both directions.

In a directed graph, each edge has a polarity. Edges are one-way (they can potentially be two-way, but by default they are one-way). This is like Instagram, or Twitter, where when you follow someone, that doesn't mean they follow you as well. That relationship is one-way. It can become a two-way relationship if they follow you back, but that isn't a guarantee like in an undirected graph.

Graphs can also be weighted or unweighted

A weighted graph associated values to edges. Each route on a GPS has an associated time and distance with it.

An unweighted graph doesn't have any values associated to it's edges.

## Graph implementation

There are two main approaches to handling storing graph data:

Adjacency Matrix: Each connection is associated to a row/column on a matrix. Each cell can have a value of 0 or 1 (or true/false, whatever) that denotes whether there is a connection between the two nodes

|| | A | B | C | D
-
A    0   1   0   0
-
B    1   0   1   1
-
C    0   1   0   1
-
D    0   1   1   0

This matrix represents a graph of 4 nodes (A - D). Each cell that has a 1 indicates that there's a connection between that row/column:

A <-> B
B <-> C
B <-> D
C <-> D

The graph above in undirected, but you can use a matrix to store a directed graph as well.

Adjacency List: A nested array that stores the edges associated with that vertex.

Using the same graph above:

{
  A: [B],
  B: [A, C, D],
  C: [B, D],
  D: [B, C]
}

This stores the same information as the matrix--the relationship data between two particular nodes on the graph.

Each has a particular Big O:

Adjacency Matricies have am Add Edge. Remove Edge, and Query time complexity of O(1), but adding/removing a vertex, and storage is O((V^2)) with V being the number of verticies in the graph.

Adjacency Lists can add edges and verticies at a time complexity of O(1), but removing an edge is O(N) and removing a vertex, querying, and storage are all O(n + m)

## Graph Traversal

Real-world practical. Traversal is similar to trees (trees are specialized graphs, after all). You can use BFS or DFS. The difference being that we don't know how many connections we have on any particular node, like we do with BSTs. When we don't know how many times we should iterate over something, it's typically a good idea to bust out our good buddy recursion.

### DFS
Explore down a path as deeply as you can before going back. 

The order returned from the iterative and recursive approaches are different, despite both being DFS. This is becasue of the nuances of how the neighbor nodes are visited.

### BFS
Explore all the direct connections from the start before descending deeper to the edges of those nodes.

## Step By Step
1. When picking a new node to visit, we pick the node with the smallest known distance to start
2. Once at the next node, we look at each of it's neighbors
3. For each neighbor, we calculate the distance by summing the total edges that lead to the node we're looking at, from the starting node.
4. If the new total distance to a node is less than the previous total, we store that as the new shortest path.

It's basically a more complex version of one of those 'find the largest word in a sentence' type algorithms. 

You want to store the nodes you've visited (array), an object of nodes listing the previous node that got you there the fastest, and an object containing each vertex and the shortest path (in steps). 