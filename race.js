var racer1 = document.getElementById("racer1");
var racer2 = document.getElementById("racer2");
var stoplight = document.getElementById("stoplight");
var stoplightlink = document.getElementById("stoplightlink");
var winnertext = document.getElementById("winnertext");

var eurobeat = document.getElementById("eurobeat");
var winbeat = document.getElementById("playerwin");

var winner = 0;

function endrace() {
	console.log("Winner determined: " + winner);

	eurobeat.volume = 0.16;

	stoplight.src = "resources/images/traffic-light-red.svg";
	stoplightlink.onclick = reset;

	winbeat.volume = 0.4;
	winbeat.play();

	switch(winner) {
		case "racer1":
			winnertext.innerHTML = "藤原 拓海! WINRAR!";
		case "racer2":
			winnertext.innerHTML = "BORING CORVETTE WINS!";
		case "tie":
			winnertext.innerHTML = "EVERYBODY WINS!";
	}

	winner = 0;
}

function reset() {
	winnertext.innerHTML = "";
	console.log("Resetting race");

	winbeat.pause()
	winbeat.currentTime = 0;

	eurobeat.pause()
	eurobeat.currentTime = 0;

	racer1.style.left = "5%";
	racer2.style.left = "5%";

	stoplightlink.onclick = race;
}

function race() {
	console.log("Beginning race");

	eurobeat.volume = 0.2;
	eurobeat.play();
	stoplight.src = "resources/images/traffic-light-green.svg";

	function tick() {
		console.log("Iterating..."); // Sets the speeds of the racers.
		var racer1_speed = Math.floor(Math.random() * 2) * 0.01;
		var racer2_speed = Math.floor(Math.random() * 2) * 0.01;

		// Transition them
		console.log("R1Spd: " + racer1_speed + " R2Spd: " + racer2_speed);
		console.log("R1Prev: " + racer1.style.left + " R2Prev: " + racer2.style.left);
		racer1.style.left = (parseFloat(racer1.style.left)/100 + racer1_speed).toLocaleString("en", {style: "percent"});
		racer2.style.left = (parseFloat(racer2.style.left)/100 + racer2_speed).toLocaleString("en", {style: "percent"});
		console.log("R1Post: " + racer1.style.left + " R2Post: " + racer2.style.left);

		//Check if car passed finish line
		if (parseFloat(racer1.style.left) > 85) {
			winner = "racer1";
		}
		if (parseFloat(racer2.style.left) > 85) {
			if (winner == "racer1") {
				winner = "tie";
			} else {
				winner = "racer2";
			}
		}
		if (winner !== 0) {
			clearInterval(timer);
			endrace();
		}
	}
	var timer = setInterval(tick, 15);
}

