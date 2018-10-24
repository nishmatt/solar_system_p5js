var p1 = 2;
var p2 = 3;
var p3 = 4;
var p4 = 5;
var p5 = 6;
var p6 = 5.03;
var p7 = 5;
var p8 = 5;
var p9 = 5;

var speed = 1;

var planets;

function setup() {
	createCanvas(windowWidth, windowHeight);
	background(0);

}

function star() {
	fill('White');
	ellipse(random(0, windowWidth), random(0, windowHeight), 2, 2)
}

function drawPlanet(colour, radius, phase, distance, orbitSpeed) {
	fill(colour)
	ellipse(distance * 1.5 * cos(phase), distance*sin(phase), radius, radius)
	//phase += orbitSpeed * speed
}

function draw() {
	speed = (mouseX + mouseY)/500
	background(0);
	translate (windowWidth/2, windowHeight/2);
	noStroke();


	//sun
	// fill('Yellow');
	// ellipse(0, 0, 40, 40);

	planets = [];
	//mercury
	drawPlanet('Gray', 10, p1, 50, 0.02)
	p1 += 0.02;

	//venus
	drawPlanet('orange', 15, p2, 70, 0.03);
	p2+= 0.03 * speed;
/*
	//earth
	fill('DeepSkyBlue')
	ellipse(135*cos(p3), 90*sin(p3), 17, 17);
	p3+= 0.048 * speed;

	//mars
	fill('Brown')
	ellipse(180*cos(p4), 120*sin(p4), 15, 15);
	p4+= 0.042 * speed;

	//jupiter
	fill('Khaki')
	ellipse(225*cos(p5), 150*sin(p5), 30, 30);
	p5+= 0.018 * speed;
	//jupiter's dot
	fill('Brown')
	ellipse(225*cos(p6), 150*sin(p6), 5, 5);
	p6+= 0.018 * speed;

	//saturn
	fill('LightGoldenRodYellow')
	ellipse(270*cos(p7), 180*sin(p7), 30, 30);
	//saturn's rings
	fill('Peru')
	ellipse(270*cos(p7), 180*sin(p7), 50, 10);
	p7+= 0.014 * speed;

	//uranus
	fill('PowderBlue')
	ellipse(330*cos(p8), 220*sin(p8), 25, 25);
	p8+= 0.023 * speed;

	//neptune
	fill('DarkSlateBlue')
	ellipse(390*cos(p9), 260*sin(p9), 25, 25);
	p9+= 0.032 * speed;
	*/
}
