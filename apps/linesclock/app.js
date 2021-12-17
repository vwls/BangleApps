let resolution = 6;
let numberOfLines = 500;
let randomSeed = Math.random(1) * 100;

let d = new Date();
let h = d.getHours();
let m = d.getMinutes();

let prevM = m;

function draw() {
	// Set up the time object
	d = new Date();
	h = d.getHours(), m = d.getMinutes();
	m = d.getMinutes();
	let time = h + ":" + ("0"+m).substr(-2);

	// Reset the state of the graphics library
	g.reset();
	
	// Clear the area where we want to draw the time
	g.clearRect(0, 0, 200, 200);
	
	// Draw background
	g.setColor(0, 0, 0);
	g.fillRect(0, 0, 200, 200);

	// Set stroke color
	g.setColor(255, 255, 255);
	
	// Get a new random number every minute
	if(prevM != m){
		randomSeed = Math.random(1) * 100;
	}

	// Draw some cool lines
	for(let i = 0; i < numberOfLines; i+=resolution){
		g.drawLine(randomSeed, i, i, 100);
	}

	// Set font type and size
	g.setFont("Vector", 40);

	// Display time on screen
	g.drawString(time, 50, 35);

	prevM = m;
}

// Call the draw function every 1 second
g.clear();
draw();
var secondInterval = setInterval(draw, 1000);
