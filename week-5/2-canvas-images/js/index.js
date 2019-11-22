const theCanvas = document.getElementById("canvas");
const ctx = theCanvas.getContext("2d");

const cWidth = theCanvas.width;
const cHeight = theCanvas.height;

let naturePic = new Image();
console.log("what is this: ", naturePic);
// in the console in the browser we can see that the image tag has been created (<img>)

naturePic.src = "./images/waterfalls.jpeg";
console.log("and what is this: ", naturePic);
// in the console ==> and what is this:  <img src=​"./​images/​waterfalls.jpeg">​

// now image is there, we just need to make it to appear on the canvas

naturePic.onload = () => {
  ctx.drawImage(naturePic, 10, 10, 260, 160);
};
