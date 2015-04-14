/*
 * -- INITIALISIERUNG
 * 
 */

// Variablen Definition
var lastTime;


// Canvas erstellen 
var canvas = document.createElement("canvas");
var ctx = canvas.getContext("2d");

canvas.width = 800;
canvas.height = 800;

document.body.appendChild(canvas); // canvas element anhängen



/*
 * -- Funktionen
 * 
 */

function main()
{
	var now = Date.now(); // Aktuelle Zeit
	var delay = (now - lastTime) / 1000.0;
	
	// UPDATE?
	update(delay);
	// RENDER ---
	
	lastTime = now;
	// requestanimframe wurde für testzwecke entfernt
}

function update(delay)
{
	// Updatet Game objekte
	
	gametime += delay;
	
	// Eingaben verarbeiten
	
	
}
