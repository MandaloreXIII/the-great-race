function race() {
  var winner = null;
  var racer1 = document.getElementById("racer1");
  var racer2 = document.getElementById("racer2");
  var eurobeat = document.getElementById("eurobeat");
  eurobeat.play();
  do {
    // Sets the speeds of the racers.
    var racer1_speed = Math.floor(Math.random()*(4)) + 3;
    var racer2_speed = Math.floor(Math.random()*(4)) + 3;
    racer1_speed.toLocaleString("en", {style: "percent"});
    racer2_speed.toLocaleString("en", {style: "percent"});
    // INSERT THE ITERATION OF CARS ON SCREEN
    racer1.left += racer1_speed;
    racer2.left += racer2_speed;
    //Check if car passed finish line
    if ()
  }
   while (winner = null);
  eurobeat.pause();
  eurobeat.currentTime = 0;
}
