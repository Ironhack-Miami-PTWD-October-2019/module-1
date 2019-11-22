## Canvas animations

### How to add some dynamic to our canvas?

The logic behind having some movements on the canvas is in `clearing the canvas` and `redrawing` it all over again and doing this all over again multiple times.

The following are pieces of code provided in this code along and their explanations. The full code can be found in the `js/index.js` file.

1. **Create a function that will, when called, clear the canvas**

```jsx
function clearCanvas() {
  ctx.clearRect(0, 0, cWidth, cHeight);
}
```

2. **Create a function that will, when called re-draw the canvas**

```jsx
function drawCanvas(x, y, w, h, color) {
  ctx.fillStyle = color;
  ctx.fillRect(x, y, w, h);
}
```

The previous two functions () and drawCanvas() are included inside updateCanvas() below:

```jsx
function updateCanvas() {
  // in order to see animation, something needs to change, and in our case that is going to be
  // speed1, speed2 and speed3 which we will use as "y" since our rectangles
  // are going to start falling from up to down, vertically

  speed1 += 1;
  speed2 += 2;
  speed3 += 3;

  // clear the canvas
  clearCanvas();

  // redraw the canvas
  // drawCanvas(x, y, width, height, "color");
  drawCanvas(50, speed1, 50, 50, "red");
  drawCanvas(150, speed2, 50, 50, "green");
  drawCanvas(250, speed3, 50, 50, "yellow");

  // 1st way of animating the canvas:
  //  setTimeout(() => updateCanvas(), 30);

  // 2nd way:
  requestAnimationFrame(updateCanvas);
}
```

// un-comment out updateCanvas() below to see how it works,
// but make sure you comment out again to see how the next example works

// updateCanvas();

**To summarize** - there are three ways to make some dynamic/animation in canvas:

1. **setTimeout(() => someFunction(s), everyHowManyMilliseconds)**
   This way is the same as the recursive function.
   The **benefit** is to be able to influence the speed through the milliseconds (in the provided example, it's 30ms ==> the function updateCanvas() gets called every 30ms)

2. **requestAnimationFrame(someFunctionNameWithoutParentheses)**
   This way is very often used but requires a bit of manual work to influence the speed (_disadvantage_).

3. **setInterval(() => someFunction(s), framesPerSecond)**

This way is probably the most used, and in the code you can see how it's applied as well later in the `canvas-game-example`.

### `rotate(angle)` and `translate(x,y)`

HTML5 canvas provides [`rotate(angle)`](https://www.w3schools.com/tags/canvas_rotate.asp) method which is used to rotate the canvas around the current origin. This method only takes one parameter and that's the angle the canvas is rotated by. This is a clockwise rotation measured in radians.

[W3Schools](https://www.w3schools.com/tags/canvas_translate.asp) explans that `translate(x,y)` is used to move the canvas and its origin to a different point in the grid.
Here argument `x` is the amount the canvas is moved to the left or right, and `y` is the amount it's moved up or down.

EXAMPLE: If a rectangle is drawn in position (10,10), use translate to set new (0,0) position to (70,70).
It will draw the same rectangle again, but the rectangle now starts in position (80,80).

The full code can be found in the `js/index.js`.
