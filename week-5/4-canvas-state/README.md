## [Canvas state](https://www.tutorialspoint.com/html5/canvas_states.htm) - `save()` and `restore()`

HTML5 canvas provides two important methods to save and restore the canvas states.
**The canvas drawing state is basically a snapshot of all the styles and transformations that have been applied.**

What gets saved in the state is:

1. The current values of the following attributes: strokeStyle, fillStyle, globalAlpha, lineWidth, shadowOffsetX, shadowOffsetY, shadowBlur, shadowColor, font, textAlign, textBaseline,
2. the transformations such as translate, rotate and scale etc. (more advanced concepts)

Canvas state is stored in a **stack** every time the save method is called, and the last saved state is returned (**popped**) from the stack every time the restore method is called.

- **save()** - this method pushes the current state in the stack.

- **restore()** - this method pops the top state on the stack, restoring the context to that state.
