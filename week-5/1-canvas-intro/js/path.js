const theCanvas = document.getElementById("example");

// 2d ctx is where everything happens in canvas
// it holds all the methods for drawing things and animation
const ctx = theCanvas.getContext("2d");

// ****************************
// draw rectangle:
// ****************************

ctx.fillStyle = "blue";
ctx.fillRect(220, 220, 40, 40);

// extra example with rgba:

ctx.fillStyle = "magenta";
ctx.fillRect(10, 10, 40, 40);

ctx.fillStyle = "rgba(50, 205, 50, 0.5)";
ctx.fillRect(30, 30, 40, 40);

// ****************************
// draw text
// ****************************

ctx.fillStyle = "pink";
ctx.font = "15px monospace";

// pattern to follow:
// ctx.fillText("text we want to add", x, y);
// x, y are the coordinates where the text is going to appear
ctx.fillText("PTWD-10-2019 rocks!", 90, 50);

// ****************************
// draw path
// ****************************

// color of the line
ctx.strokeStyle = "green";

ctx.beginPath(); // step: 1

// starting position is x=50; y=80
ctx.moveTo(50, 80); // step: 2

// the final coordinates are (220, 50)
ctx.lineTo(220, 80); // step 3

// executes the drawing (of the line/path)
ctx.stroke(); // step: 4

// ctx.moveTo(220, 80);
ctx.lineTo(220, 100);

ctx.stroke();
ctx.fill(); // optional: fills with the last set color used with fillStyle (and that is pink)

ctx.closePath(); // step 5

// extra example

ctx.strokeStyle = "aqua";

ctx.lineWidth = 10;
ctx.beginPath();
ctx.moveTo(20, 90);
ctx.lineTo(130, 280);
ctx.stroke();
ctx.lineTo(270, 270);
ctx.stroke();
ctx.closePath();

// ****************************
// draw circle
// ****************************

/* 
    Angles in the arc function are measured in radians, not degrees.
    To convert degrees to radians use the following JavaScript expression:

    radians = (Math.PI / 180) * degrees.

*/

// bigger - orange circle:

ctx.strokeStyle = "orange";
ctx.lineWidth = 7;

ctx.beginPath();

// ctx.arc(x, y, radius, startAngle, endAngle)
ctx.arc(150, 150, 50, 0, Math.PI * 2);

ctx.stroke();

ctx.closePath();

// smaller - red "almost" circle:
ctx.strokeStyle = "red";
ctx.lineWidth = 4;

ctx.beginPath();

// follow the pattern:
// ctx.arc(x, y, radius, startAngle, endAngle);
ctx.arc(150, 150, 30, 0, 4); // endAngle max value is 6.3

ctx.stroke();

ctx.closePath();
