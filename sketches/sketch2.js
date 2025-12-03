let angle = 0;

function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(30);
  translate(width/2, height/2);
  rotate(angle);
  rectMode(CENTER);
  fill(255);
  rect(0, 0, 150, 150);
  angle += 0.01;
}