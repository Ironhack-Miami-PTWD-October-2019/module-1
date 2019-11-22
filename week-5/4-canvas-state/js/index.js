const canvas = document.querySelector("#da-canvas");
const ctx = canvas.getContext("2d");

const cWidth = canvas.width;
const cHeight = canvas.height;

function drawCanvas(x, y, w, h, color) {
  ctx.fillStyle = color;
  ctx.fillRect(x, y, w, h);
}

drawCanvas(10, 20, 30, 30, "turquoise");
ctx.save();

drawCanvas(50, 70, 30, 30, "orangeRed");
ctx.save();

drawCanvas(120, 150, 30, 30, "magenta");

ctx.restore();

drawCanvas(200, 70, 30, 30);
// ctx.save(); // => this would give us back orangeRed
ctx.restore();

drawCanvas(250, 20, 30, 30);
