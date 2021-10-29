let circSize = 10;

function setup() {
  createCanvas(400, 400);
  fullscreen();
  background(100);
}

function draw() {
  rectMode(CENTER);

  // loop
  for (let x = 0; x <= width; x += circSize) {
    // each row
    for (let y = 0; y <= height; y += circSize) {
      // each column
      fill(x, y, 50); // change color as the loops go on
      ellipse(x, y, circSize);
    }
  }

  noLoop();
}
