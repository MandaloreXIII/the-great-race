function race() {
	var winner = null;
	var racer1 = document.getElementById("racer1");
	var racer2 = document.getElementById("racer2");
	var eurobeat = document.getElementById("eurobeat");
	eurobeat.volume = 0.2;
	eurobeat.play();
	do {
		// Sets the speeds of the racers.
		var racer1_speed = Math.floor(Math.random()*(0.04)) + 0.03;
		var racer2_speed = Math.floor(Math.random()*(0.04)) + 0.03;

		// Transition them using CSS

		//Check if car passed finish line
		if (racer1.style.left.toLocaleString("en", {style: "decimial"}) > 0.9) {
			winner = "racer1";
		} else if (racer2.style.left.toLocaleString("en", {style: "decimial"}) > 0.9) {
			winner = "racer2";
		}
	} while (true);
	eurobeat.pause();
	eurobeat.currentTime = 0;
	return 0;
}
