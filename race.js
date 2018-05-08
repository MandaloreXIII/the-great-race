var racer1 = document.getElementById("racer1");
var racer2 = document.getElementById("racer2");
var stoplight = document.getElementById("stoplight");
var stoplightlink = document.getElementById("stoplightlink");
var eurobeat = document.getElementById("eurobeat");

var winner = 0;

function race() {
	console.log("Beginning race");

	eurobeat.volume = 0.2;
	eurobeat.play();
	stoplight.src = "resources/images/traffic-light-green.svg";

	function tick() {
		console.log("Iterating..."); // Sets the speeds of the racers.
		var racer1_speed = Math.floor(Math.random() * 6) * 0.01 + 0.03;
		var racer2_speed = Math.floor(Math.random() * 6) * 0.01 + 0.03;

		// Transition them
		console.log("R1Spd: " + racer1_speed + " R2Spd: " + racer2_speed);
		console.log("R1Prev: " + racer1.style.left + " R2Prev: " + racer2.style.left);
		racer1.style.left = (racer1.style.left.toLocaleString("en", {style: "decimal"}) + racer1_speed).toLocaleString("en", {style: "percentage"});
		racer2.style.left = (racer2.style.left.toLocaleString("en", {style: "decimal"}) + racer2_speed).toLocaleString("en", {style: "percentage"});
		console.log("R1Post: " + racer1.style.left + " R2Post: " + racer2.style.left);

		//Check if car passed finish line
		if (racer1.style.left.toLocaleString("en", {style: "decimial"}) > 0.9) {
			winner = "racer1";
		}
		if (racer2.style.left.toLocaleString("en", {style: "decimial"}) > 0.9) {
			if (winner == "racer1") {
				winner = "tie";
			} else {
				winner = "racer2";
			}
		}
		if (winner != 0) {
			clearInterval(timer);
			winner();
		}
	}
	var timer = setInterval(tick, 5);
}

function winner() {
	console.log("Winner determined: " + winner);

	eurobeat.pause();
	eurobeat.currentTime = 0;
	stoplight.src = "resources/images/traffic-light-red.svg";
	stoplightlink.onclick = reset;
}

function reset() {
	console.log("Resetting race");
	stoplightlink.onclick = race;
}
