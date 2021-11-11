// determines the size of the grid
let gridSize = 40;
let colorCounter = 0;

function setup() {
	createCanvas(400, 400);
	background(100);
	strokeWeight(2);
}

function draw() {
	background('#94d2bd');
	for (let y = 0; y <= height; y += gridSize) {
		for (let x = 0; x <= width; x += gridSize) {
			colorCounter++;
			console.log(colorCounter % 4);

			switch (colorCounter % 4) {
				case 0:
					stroke('#e9c46a')
					fill('#f4a261');
					ellipse(x, y, gridSize);
					ellipse(x, y, gridSize / 2);
					break;
				case 1:
					rectMode(CORNER);
					stroke('#e76f51')
					fill('#e9c46a');
					rect(x, y, gridSize / 2);
					rect(x + gridSize / 2, y + gridSize / 2, gridSize / 2);
					break;
				case 2:
					rectMode(CENTER);
					stroke('#2a9d8f');
					fill('#e76f51');
					rect(x,y,gridSize);
					line();
					line();
					break;
				case 3:
					stroke('#e9c46a');
					fill('#2a9d8f');
					break;
			}

		}
	}

	noLoop();
}