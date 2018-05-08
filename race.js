function race() {
	var racer1 = document.getElementById("racer1");
	var racer2 = document.getElementById("racer2");
	var stoplight = document.getElementById("stoplight");
	var stoplight_link = document.getElementById("stoplight_link");
	var eurobeat = document.getElementById("eurobeat");

	var winner = 0;

	eurobeat.volume = 0.2;
	eurobeat.play();
	stoplight.src = "resources/images/traffic-light-green.svg";

	do {
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

	eurobeat.pause();
	eurobeat.currentTime = 0;
	stoplight.src = "resources/images/traffic-light-red.svg";
	stoplight_link.onclick = reset;

	return 0;
}

function reset() {
	var stoplight_link = document.getElementById("stoplight_link");
	stoplight_link.onclick = race;
}
