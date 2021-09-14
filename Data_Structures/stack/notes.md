# Stacks

Stacks are really useful. They're used everywhere (call-stack). Basically, stacks are a data structure similiar to a pile (stack!) of books. If adheres to LIFO (last in, first out). The last item added to a stack must be the first one removed. It's like that colored donut toy for kids, you can only remove the bottom donut once all the donuts above it have been taken off.

Where are stacks used?

Managing function invocations (call stack)
undo/redo
Routing (the history object is treated like a stack)
It's used as part of more complex data structures.

Big O stack. Insetion and removal are O(1). Search and access are O(N) (and usually irrelevant. Use a more fitting data structure, if that's what you want to do)