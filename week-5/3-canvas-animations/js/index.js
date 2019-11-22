const canvas = document.querySelector("#da-canvas");
const ctx = canvas.getContext("2d");

const cWidth = canvas.width;
const cHeight = canvas.height;

let speed1 = 1;
let speed2 = 2;
let speed3 = 3;
// uncomment the following three lines to see how three rectangles are going to be created, but no dynamic for now
// to see how these become dynamic, comment the following three lines out and then see what is going on
// in the updateCanvas() function below
// ctx.fillRect(50, 10, 50, 50);
// ctx.fillRect(150, 10, 50, 50);
// ctx.fillRect(250, 10, 50, 50);

function clearCanvas() {
  ctx.clearRect(0, 0, cWidth, cHeight);
}

function drawCanvas(x, y, w, h, color) {
  ctx.fillStyle = color;
  ctx.fillRect(x, y, w, h);
}

// the previous two functions () and drawCanvas() are included inside updateCanvas() below:
function updateCanvas() {
  // in order to see animation, something needs to change
  // in our case that is going to be speed1,2 and 3 which
  // we will use as "y" since our rectangles are going to start falling from up to down, vertically
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

  // 1st way to make some animation is using setTimeout()
  //    this way is the same as the recursive function
  //    the benefit is to be able to influence the speed through the milliseconds (in example below it's 30ms ==> the function updateCanvas() gets called every 30ms)
  //  setTimeout(() => updateCanvas(), 30);

  // 2nd way: requestAnimationFrame(someFunctionNameWithoutParentheses)
  //    very often used but requires a bit of manual work to influence the speed
  requestAnimationFrame(updateCanvas);

  // 3rd way: setInterval(() => updateCanvas(), framesPerSecond)
  // setInterval(() => updateCanvas(), 10000 / 60);
}

// un-comment out updateCanvas() below to see how it works,
// but make sure you comment out again to see how the next example works

updateCanvas();

// *********** ROTATE and TRANSLATE ************************

let img = new Image();
let h = 1;
function animate() {
  img.src = "../canvas-pattern-shadow/images/wall-paper.png";
  setInterval(draw, 100);
}

function draw() {
  h += 0.1;
  // uncomment when demo in the beginning without img
  // ctx.fillStyle = "rgba(0,153,255,0.4)";
  // ctx.font = "15px monospace";

  ctx.save();
  // start drawing on x=150, y=150
  // original values of x and y are 0, but with this translate they become this value + 150 (both)
  ctx.translate(150, 150);

  // .rotate(angleInRadians)
  ctx.rotate(h);
  // after rotation, move y for 20px additionally (150+20 = 170)
  ctx.translate(0, 20);

  // ctx.fillText("super", 70, 70);
  ctx.drawImage(img, 5, 5); // /if we don't pass width and height they will be taken from the image itself
  // ctx.drawImage(img, 4, 4, 10, 10); // but we can pass it if we want to change the original width and height
  ctx.restore();
}

// un-comment to see how it works, but make sure you comment it out again if you want to see how the above example within the updateCanvas() works
// animate();
