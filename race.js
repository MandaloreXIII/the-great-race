function race() {
  var winner = null;
  var racer1 = document.getElementById("racer1");
  var racer2 = document.getElementById("racer2");
  var eurobeat = document.getElementById("eurobeat");
  eurobeat.volume = 0.2;
  eurobeat.play();
  do {
    // Sets the speeds of the racers.
    var racer1_speed = Math.floor(Math.random()*(4)) + 3;
    var racer2_speed = Math.floor(Math.random()*(4)) + 3;
    racer1_speed = racer1_speed.toLocaleString("en", {style: "percent"});
    racer2_speed = racer2_speed.toLocaleString("en", {style: "percent"});
    //TODO: THE ITERATION OF CARS ON SCREEN
    racer1.left += racer1_speed;
    racer2.left += racer2_speed;
    //Check if car passed finish line
    if (racer1.left = "100%") {
      winner = "racer1";
    }
    elseif (racer2.left = "100%") {
      winner = "racer2";
    }
  }
   while (winner = null);
  eurobeat.pause();
  eurobeat.currentTime = 0;
}
