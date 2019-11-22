- Here is an example how we would have to approach drawing images inside class methods if we would use ES5:

```jsx
drawComponent(imgSource) {
  // console.log("out of the old es5: ", this.x, this.y);
  let daCtx = this.game.ctx;
  this.img.src = imgSource;
  let that = this;
  this.img.onload = function() {
    // console.log("inside with es5-before this-that switch: ", this.x, this.y);

    // console.log("inside with es5 - after this-that switch: ", that.x, that.y);
    daCtx.drawImage(that.img, that.x, that.y, that.width, that.height);
  };
}
```

- How to pick an image that has a transparent background:

1. Look for images on the Google
2. click on **`Tools > Color > Transparent`** as shown below:

![](https://s3-eu-west-1.amazonaws.com/ih-materials/uploads/upload_e49cf80fd0ac0e1d94ae1044cd862e49.png)

**Always keep in mind that even these images are still squares and we have to do some adjustments in the with and height when simulating collision**.
