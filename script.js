class Ball {
  constructor(x, y, w, h, vx, vy, color){
    this.x = x;
    this.y = y;
    this.w = w;
    this.h = h;
    this.vx = vx;
    this.vy = vy;
    this.color = color;
  }

  drawBall(){
    ellipse (this.x, this.y, this.w, this.h, this.color);
    this.x = this.x + this.vx;
    this.y = this.y + this.vy;

    if (this.x < 0 || this.x > 500) {
      this.vx = this.vx * -1
    }

   if (this.y < 0 || this.y > 400) {
      this.vy = this.vy * -1
    }
  }
}

function setup() {
  createCanvas (500,400);
  
  ball1 = new Ball(10,10,50,50,5,5,"red");
  ball2 = new Ball(50,50,40,40,7,7,"blue");
}

function draw() {
    background(225);
    
    ball1.drawBall();
    ball2.drawBall();
}