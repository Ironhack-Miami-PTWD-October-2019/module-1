// https://www.tutorialspoint.com/html5/canvas_pattern_shadow.htm
// .createPattern(image, repetition)

// This method will use image to create the pattern.
// The second argument could be a string with one of the following values:
// repeat, repeat-x, repeat-y, and no-repeat.
// If the empty string or null is passed as the second argument, repeat will taken as default value

const canvas = document.querySelector("#da-canvas");
const ctx = canvas.getContext("2d");

const cWidth = canvas.width;
const cHeight = canvas.height;

function drawPattern() {
  // create new image object to use as pattern
  let img = new Image();

  img.src = "./images/wall-paper.png";
  img.onload = () => {
    // create pattern
    const pattern = ctx.createPattern(img, "repeat");
    ctx.fillStyle = pattern;
    ctx.fillRect(0, 0, 300, 215);
  };
}

drawPattern();

// Create Shadows
// All drawing operations are affected by the four global shadow attributes:
// 1. shadowColor [ = value ]
// 2. shadowOffsetX [ = value ]
// 3. shadowOffsetY [ = value ]
// 4. shadowBlur [ = value ]

function drawShadow() {
  ctx.shadowOffsetX = 10;
  ctx.shadowOffsetY = 8;

  ctx.shadowBlur = 2;
  ctx.shadowColor = "rgba(15, 155, 140, 0.5)";

  ctx.font = "15px monospace";
  ctx.fillStyle = "purple";

  ctx.fillText("Wow, this is so cool❣️", 5, 250);
}

drawShadow();
