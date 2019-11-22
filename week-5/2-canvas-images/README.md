# How to use images on canvas?

## Step 1: create image tag with`new Image()`

We will start with creating image tag, and the following line of code does exactly that:

```jsx
let naturePic = new Image();
console.log("what is this: ", naturePic);

// what is this: <img>
```

In the console in the browser we can see that the image tag has been created (`<img>`).

## Step 2: add file to the `src` of the newly created `<img>` tag

Image tag lives in the HTML file (we use JS to create it, but it doesn't live here in _index.js_ but in index.html).This is important to understand because when we link the photos, the path to the photo needs to be from the `index.html` to `images` folder, and these two are on the same level in the tree, meaning in the structure of our root folder:

```bash
.
├── images
│    └── waterfalls.jpeg
├── index.html
└── js
     └── index.js
```

This being said, we link image to the _src_ as it shows below:

```jsx
naturePic.src = "./images/waterfalls.jpeg";
console.log("and what is this: ", naturePic);

// and what is this:  <img src=​"./​images/​waterfalls.jpeg">​
```

## Step 3: make image appear on canvas

Now image is there, we just need to make it to appear on the canvas:

```jsx
naturePic.onload = () => {
  ctx.drawImage(naturePic, 10, 10, 260, 160);
};
```

And here is the image on the canvas!

**Additional explanation of why it is important to know that _index.html_ and _images_ folder are on the same level in the structure of folder and files:**

When linking the photo to the `src`, if we would link photo from this file (and we are in the `js/index.js`) the path to the image would be:

```jsx
naturePic.src = "../images/waterfalls.jpeg";
```

This means we have to exit `js` folder (that's why two dots `../`) to be able to see `images` folder.

However, when we link it we use only _single_ dot (`./`):

```jsx
naturePic.src = "./images/waterfalls.jpeg";
```

since images folder is on the same level as `index.html`.

Great, now you know how to use images in canvas.
