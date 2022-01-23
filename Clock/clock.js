const [wd, ht] = [500, 500];
let s, m, h;
var c1, c2;

// Happens on first frame
function setup() {
  frameRate(1);
  createCanvas(wd, ht);
  // Controls the colors for the background
  c1 = color(52, 115, 94);
  c2 = color(6, 22, 36);
  strokeWeight(10);
  noFill();
}

// Constant loop
function draw() {
  clockSetup();
  clock();
  numbers();
}

// Makes it easier to draw the clock
function clockSetup() {
  setGradient(c1, c2);
  translate(wd / 2, ht / 2);
  angleMode(DEGREES);
  rotate(-90);
}

// Creates the linear gradient background
function setGradient(c1, c2) {
  noFill();
  for (var y = 0; y < height; y++) {
    var inter = map(y, 0, height, 0, 1);
    var c = lerpColor(c1, c2, inter);
    stroke(c);
    line(0, y, width, y);
  }
}

// Display numbers on the clock
function numbers() {
  strokeWeight(2);
  fill(255);
  rotate(90);
  textAlign(CENTER);
  textSize(30);
  text('12', -2, -0.85 * (ht / 2));
  text('3', 0.875 * (wd / 2), 9);
  text('6', 0, 0.9 * (ht / 2) + 9);
  text('9', -0.875 * (wd / 2), 9);
  noFill();
  strokeWeight(10);
}

// Displays the clock
function clock() {
  // Gets the time from your device
  s = second();
  s = ("0" + s).slice(-2);
  m = minute();
  m = ("0" + m).slice(-2);
  h = hour() ;
  h = ("0" + h).slice(-2);
  // Translates the time to the distance arround the circle (arc)
  let sec = map(s, 0, 60, 0, 360);
  let min = map(m, 0, 60, 0, 360);
  let hr = map(h, 0, 12, 0, 360);
  // Creates the circles (arcs) with different colors
  stroke(0, 179, 45);
  arc(0, 0, 0.75 * wd, 0.75 * ht, 0, hr);
  stroke(0, 204, 122);
  arc(0, 0, 0.625 * wd, 0.625 * ht, 0, min);
  stroke(0, 230, 172);
  arc(0, 0, wd / 2, ht / 2, 0, sec, PIE);
  // Displays the time above the canvas
  document.getElementById('second').innerHTML = s;
  document.getElementById('minute').innerHTML = m;
  document.getElementById('hour').innerHTML = h;
  // Determines if the time is AM or PM
  if (hour() >= 12 && hour() < 24) {
    document.getElementById('am/pm').innerHTML = 'pm';
  } else {
    document.getElementById('am/pm').innerHTML = 'am';
  }
}