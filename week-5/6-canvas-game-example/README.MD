- Here is example how we would have to approach drawing images inside class methods if we would use ES5:

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
