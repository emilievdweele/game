var x, m, q, y, n, r, v;

function setup() {
  createCanvas (500, 400);

  x = 0;
  y = 200;
  m = 200;
  n = 0;
  q = 200;
  r = 0;
  vx = 5;
  vy = 5;
  vm = 7;
  vn = 7;
  vq = 8;
  vr = 8;
}

function draw() {

  background(225);

  ellipse(x,y,50,50)
  x = x + vx
  y = y + vy

  fill ('#fae');

  if(x <= 0 || x > 500) {
    vx = vx * -1;
  }

  if (y <= 0 || y > 400){
    vy = vy * -1;
  }

  ellipse(m,n,50,50)
  m = m + vm
  n = n + vn

  fill (255, 204, 100);

  if(m <= 0 || m > 500) {
    vm = vm * -1;
  }

  if (n <= 0 || n > 400){
    vn = vn * -1;
  }

  ellipse(q,r,50,50)
  q = q + vq
  r = r + vr

  fill ('rgba(100%,0%,100%,0.5)');

  if(q <= 0 || q > 500) {
    vq = vq * -1;
  }

  if (r <= 0 || r > 400){
    vr = vr * -1;
  }
}

class Ball {
  constructor(x, y, w, h, vx, vy){
    this.x = x;
    this.y = y;
    this.w = w;
    this.h = h;
    this.vx = vx;
    this.vy = vy;
  }

  drawBall(){
    ellipse(this.x,this.y,this.w,this.h);
    this.x = x + vx;
    this.y = y + vy;
    
    if(this.x <= 0 || this.x > 500) {
      this.vx = vx * -1;
    }

    if (this.y <= 0 || this.y > 400){
      this.vy = vy * -1;
    }
  }
}