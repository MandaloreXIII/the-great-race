function race() {
	console.log("Beginning race");

	var racer1 = document.getElementById("racer1");
	var racer2 = document.getElementById("racer2");
	var stoplight = document.getElementById("stoplight");
	var stoplightlink = document.getElementById("stoplightlink");
	var eurobeat = document.getElementById("eurobeat");

	var winner = 0;

	eurobeat.volume = 0.2;
	eurobeat.play();
	stoplight.src = "resources/images/traffic-light-green.svg";

	do {
		console.log("Iterating...");
		// Sets the speeds of the racers.
		var racer1_speed = Math.floor(Math.random()*(0.04)) + 0.03;
		var racer2_speed = Math.floor(Math.random()*(0.04)) + 0.03;

		// Transition them using CSS
		// TODO: That.

		//Check if car passed finish line
		if (racer1.style.left.toLocaleString("en", {style: "decimial"}) > 0.9) {
			winner = "racer1";
		} else if (racer2.style.left.toLocaleString("en", {style: "decimial"}) > 0.9) {
			winner = "racer2";
		}
		winner = "racer1";
	} while (winner === 0);

	console.log("Winner determined: " + winner);

	eurobeat.pause();
	eurobeat.currentTime = 0;
	stoplight.src = "resources/images/traffic-light-red.svg";
	stoplightlink.onclick = reset;

	return 0;
}

function reset() {
	console.log("Resetting race");

	var stoplightlink = document.getElementById("stoplightlink");
	stoplightlink.onclick = race;
}
