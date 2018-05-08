function race() {
  var winner = null;
  var racer1 = document.getElementById("racer1");
  var racer2 = document.getElementById("racer2");
  var eurobeat = document.getElementById("eurobeat");
  eurobeat.volume = 0.2;
  eurobeat.play();
  do {
    console.log("Attempting movement iteration")
    // Sets the speeds of the racers.
    var racer1_speed = Math.floor(Math.random()*(0.04)) + 0.03;
    var racer2_speed = Math.floor(Math.random()*(0.04)) + 0.03;
    console.log("Racer 1: " + racer1_speed + " Racer 2: " + racer2_speed);
    racer1_speed = racer1_speed.toLocaleString("en", {style: "percent"});
    racer2_speed = racer2_speed.toLocaleString("en", {style: "percent"});
    console.log("Racer 1: " + racer1_speed + " Racer 2: " + racer2_speed);
    //TODO: THE ITERATION OF CARS ON SCREEN
    console.log("Racer 1 pos: " + racer1.style.left + " Racer 2 pos: " + racer2.style.left);
    racer1.style.left += racer1_speed;
    racer2.style.left += racer2_speed;
    console.log("Racer 1 pos: " + racer1.style.left + " Racer 2 pos: " + racer2.style.left);
    //Check if car passed finish line
    if (racer1.left > "90%") {
      winner = "racer1";
    } else if (racer2.left > "90%") {
      winner = "racer2";
    }
  }
   while (winner == null);
  eurobeat.pause();
  eurobeat.currentTime = 0;
  return 0;
}
