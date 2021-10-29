// Nested Loop Tricks
// modulus & color

// palette used 
// https://coolors.co/ef476f-ffd166-06d6a0-118ab2-073b4c

let grid = 40;
let circSize = 20;
let colorCounter = 0;

function setup() {
	createCanvas(400, 400);
	background(100);
}

function draw() {
	rectMode(CENTER);

	// loop
	for (let x = 0; x <= width; x += grid) { // each row
		for (let y = 0; y <= height; y += grid) { // each column
			colorCode = "#ef476f"
			colorCounter++;

			console.log(colorCounter % 4);
			switch (colorCounter % 4) {
				case 0:
					// fill(0,0,0);
					colorCode = "#ef476f"
					ellipse(x, y, circSize);
					break;
				case 1:
					// fill(255,0,0);
					colorCode = "#ffd166"
					rect(x, y, circSize);
					break;
				case 2:
					// fill(0,255,0);
					colorCode = "#06d6a0"
					ellipse(x, y, circSize);
					break;
				case 3:
					// fill(0,0,255);
					colorCode = "#118ab2"
					rect(x, y, circSize);
					break;
			}

			fill(colorCode); // change color as the loops go on
		}
	}

	noLoop();
}