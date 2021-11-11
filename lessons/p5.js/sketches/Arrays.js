// vectors
let v1;
let v2;
let v3;

// arrays
let numberArray = [200, 100, 50, 25];
let colorArray = ['#fec5bb', '#fcd5ce', '#fae1dd', '#f8edeb', '#e8e8e4', '#d8e2dc', '#ece4db', '#ffe5d9', '#ffd7ba', '#fec89a'];
let textArray = ['The', 'p5.js', 'sketch', 'doesn\'t', 'make', 'any', 'sense.'];
let textIsAnArray = 'Mississippi'
let vectorArray;
let mixedArray = [numberArray[1], colorArray[4], textArray[1], textIsAnArray[textIsAnArray.length-1]];
let functionArray;

function setup() {
	createCanvas(200, 400);
	background(100);

	v1 = createVector(40, 380);
	v2 = createVector(100, 380);
	v3 = createVector(160, 380);
	vectorArray = [v1, v2, v3];
	
	functionArray = [ellipse]
	
	console.log(numberArray.length);
	console.log(colorArray.length);
	console.log(textArray.length);
	console.log(vectorArray.length);
	console.log(mixedArray.length);
}

function draw() {
	// arrays start at index '0', designated by [0]
	background(colorArray[0]);
	fill(colorArray[6]);
	ellipse(width / 2, height / 10, numberArray[0]);
	ellipse(width / 2, height / 10, numberArray[1]);
	ellipse(width / 2, height / 10, numberArray[2]);
	ellipse(width / 2, height / 10, numberArray[3]);

	// loop through an array with a for loop using .length
	for (let i = 0; i <= colorArray.length - 1; i++) {
		fill(colorArray[i]);
		rect(i * 20, height / 5, 20, 100);
	}

	// use array methods to change arrays
	let shuffleArray = shuffle(textArray);
	// console.log(shuffleArray);
	fill(0);
	text(shuffleArray[0], 50, 190);

	// text is an array
	for (let i = 0; i <= textIsAnArray.length - 1; i++) {
		text(textIsAnArray[i], 10 * i, 250);
	}

	// arrays can hold objects like vectors
	for (let i = 0; i <= vectorArray.length - 1; i++) {
		ellipse(vectorArray[i].x, vectorArray[i].y, 50);
	}
	
	functionArray[0](100,300,100);
}