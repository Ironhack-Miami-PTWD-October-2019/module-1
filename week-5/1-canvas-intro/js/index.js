console.log("I'm connected!");
// In this lesson, we will cover:
// 1. when do we need to use window.addEventListener("load", () => {})
// 2. what is canvas? what is context?
// 3. canvas grid - how it looks? share Uros' CodePen: https://codepen.io/Denzelzeldi/pen/KYaBLp
// 4. static - create rectangle
// 5. ctx.clearRect(0, 0, width, height); - why?
// 6. change x, when? change y, when and why?
// 7. recursive functions - to make some animations

// code example:

// window.addEventListener("load", () => {

function moveRect(x, y) {
  const theCanvas = document.getElementById("example");

  // 2d context is where everything happens in canvas
  // it holds all the methods for drawing different shapes and animations
  const ctx = theCanvas.getContext("2d");

  // instead working with raw numbers (in our case width=300 and height=300 from canvas tag in index.html)
  // we can access those properties through "theCanvas" object
  const width = theCanvas.width;
  const height = theCanvas.height;

  // clear whole canvas to simulate animation
  // 0 => x
  // 0 => y
  // 300 => width (comes from index.html where we defined it)
  // 300 => height (comes from index.html where we defined it)
  ctx.clearRect(0, 0, width, height);

  // colors rectangle in the given color
  ctx.fillStyle = "olive";

  // given method that creates rectangle - ctx.fillRect(x, y, width, height)
  ctx.fillRect(x, y, 50, 50);

  // changes position of X coordinate
  x += 3;

  // if x is divisible with 10, move y for 5 pixels as well
  if (x % 10 === 0) {
    y += 5;
  }

  // calls itself every 30ms => RECURSIVE FUNCTION
  setTimeout(() => moveRect(x, y), 30);
}
// })
