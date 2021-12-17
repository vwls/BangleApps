let resolution = 6;
let numberOfLines = 500;
let randomSeed = Math.random(1) * 100;

function draw() {
	// Set up the time object
	let d = new Date();
	let h = d.getHours(), m = d.getMinutes();
	let time = h + ":" + ("0"+m).subtr(-2);

	// Reset the state of the graphics library
	g.reset();
	
	// Clear the area where we want to draw the time
	g.clearRect(0, 0, 200, 200);
	
	// Draw background
	g.setColor(0, 0, 0);
	g.fillRect(0, 0, 200, 200);

	// Set stroke color
	g.setColor(255, 255, 255);

	// Draw some cool lines
	for(let i = 0; i < numberOfLines; i+=resolution){
		g.drawLines(randomSeed, i, i, 100);
	}

	// Set font type and size
	g.setFont("Vector", 40);

	// Display time on screen
	g.drawString(time, 50, 35);
}

// Call the draw function every 1 second
g.clear();
draw();
var secondInterval = setInterval(draw, 1000);
