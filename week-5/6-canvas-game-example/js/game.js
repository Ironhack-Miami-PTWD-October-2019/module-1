class Game {
  constructor() {
    this.canvas = undefined;
    this.ctx = undefined;
    this.superman = new Player(this, 0, 200, 150, 150);
    this.fireball = new Component(this, 800, 200, 70, 70);
    this.score = 0;
  }

  init() {
    this.canvas = document.getElementById('canvas');
    this.ctx = this.canvas.getContext('2d');
    this.start();
  }

  start() {
    this.drawBackground();
    this.drawMainCharacters();
    const interval = setInterval(() => {
      this.clear();
      this.drawBackground();
      this.drawMainCharacters();
      this.superman.move();
      if (this.superman.didCollide(this.fireball)) {
        clearInterval(interval);
        this.gameOver();
        // console.log("collision");
        // alert("BOOM!!!!");
      }
      this.fireball.x -= 5;
      if (this.fireball.x <= -70) {
        this.fireball.x = 1000;
        this.fireball.y = Math.floor(Math.random() * 430); // 430 = heightOfCanvas(500) - heightOfFireball(70)
      }
      if (this.fireball.x === 0) this.score++;
    }, 1000 / 60);
  }

  drawBackground() {
    this.ctx.fillStyle = 'pink';
    this.ctx.fillRect(0, 0, this.canvas.width, this.canvas.height);
    this.ctx.fillStyle = 'green';
    this.ctx.font = '30px Arial';
    this.ctx.fillText(`Score: ${this.score}`, 800, 50);
  }

  clear() {
    this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
  }

  drawMainCharacters() {
    this.fireball.drawComponent('./images/fireball.png');
    this.superman.drawComponent('./images/superman.png');
  }

  gameOver() {
    this.clear();
    this.drawBackground();
    this.ctx.font = '70px Arial bold';
    this.ctx.textAlign = 'center';
    this.ctx.fillStyle = 'red';
    this.ctx.fillText('Game Over!', this.canvas.width / 2, this.canvas.height / 2);
  }
}
