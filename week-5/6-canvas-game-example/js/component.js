class Component {
  constructor(game, x, y, w, h) {
    this.game = game;
    this.x = x;
    this.y = y;
    this.width = w;
    this.height = h;
    this.img = new Image();
  }

  drawComponent(imgSource) {
    let daCtx = this.game.ctx;
    this.img.src = imgSource;
    // this.img.addEventListener("load", () => {
    daCtx.drawImage(this.img, this.x, this.y, this.width, this.height);
    // });
  }

  getLeft() {
    return this.x;
  }

  getRight() {
    return this.x + this.width - 30;
  }

  getTop() {
    return this.y + 30;
  }

  getBottom() {
    return this.y + this.height - 50;
  }

  didCollide(otherComp) {
    // const crossLeft = otherComp.x <= this.getRight() && otherComp.x >= this.getLeft();

    // const crossRight =
    //   otherComp.x + otherComp.width >= this.getLeft() && otherComp.x + otherComp.width <= this.getRight();

    // const crossTop = otherComp.y <= this.getBottom() && otherComp.y >= this.getTop();

    // const crossBottom =
    //   otherComp.y + otherComp.height >= this.getTop() && otherComp.y + otherComp.height <= this.getBottom();

    // if ((crossLeft || crossRight) && (crossTop || crossBottom)) {
    //   return true;
    // }
    // return false;

    if (
      this.getRight() >= otherComp.x &&
      // r1x + r1w >= r2x && // r1 right edge past r2 left
      this.getLeft() <= otherComp.x + otherComp.width &&
      // r1x <= r2x + r2w && // r1 left edge past r2 right
      this.getBottom() >= otherComp.y &&
      // r1y + r1h >= r2y && // r1 top edge past r2 bottom
      this.getTop() <= otherComp.y + otherComp.height
      // r1y <= r2y + r2h
    ) {
      return true;
    }
    return false;
  }
}
