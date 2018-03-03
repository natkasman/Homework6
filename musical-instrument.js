var x = [];
var u = [];
var y = [];
var ySpeed = []
var diameter = []

var freqA = 144;
var freqS = 196;
var freqD = 220;
var freqF = 246;
var freqG = 290;
var freqQ = 140;
var freqW = 160;

var oscA, oscS, oscD, oscF, oscQ, oscW;

var playingA, playingS, playingD, playingF, playingQ, playingW;

var playing = false;

function preload() {
	rain = loadSound('assets/rain.mp3');
  ocean = loadSound('assets/ocean.mp3')
}

function setup() {
  createCanvas(400, 400);
  colorMode(HSB);
    for (var i = 0; i < 5; i++) {
    x[i] = 200;
    u[i] = 100;
    y[i] = 0;
    ySpeed[i] = random(5, 1);
    diameter[i] = random(1, 200);
      
  oscA = new p5.Oscillator();
  oscA.setType('sine');
  oscA.freq(freqA);
  oscA.amp(0);
  oscA.start();
  
  oscS = new p5.Oscillator();
  oscS.setType('sine');
  oscS.freq(freqS);
  oscS.amp(0);
  oscS.start();
  
  oscD = new p5.Oscillator();
  oscD.setType('sine');
  oscD.freq(freqD);
  oscD.amp(0);
  oscD.start();
  
  oscF = new p5.Oscillator();
  oscF.setType('sine');
  oscF.freq(freqF);
  oscF.amp(0);
  oscF.start();
  
  oscG = new p5.Oscillator();
  oscG.setType('sine');
  oscG.freq(freqG);
  oscG.amp(0);
  oscG.start();
  
  oscQ = new p5.Oscillator();
  oscQ.setType('sine');
  oscQ.freq(freqQ);
  oscQ.amp(0);
  oscQ.start();
  
  oscW = new p5.Oscillator();
  oscW.setType('sine');
  oscW.freq(freqW);
  oscW.amp(0);
  oscW.start();
  }
}
  
function draw() {
  background(0);
  noStroke();

  
  // draw drip
  for (var i = 0; i < 100; i++) {
    ellipse(x[i], y[i], diameter[i]);
    y[i] = y[i] + ySpeed[i];

//if invisible for a full “height” amount…
    if (y[i] > 400) {
      // reset
      y[i] = 0;
    }
}
}

function keyPressed() {
  print("got key press for ", key);
  var osc;
  if (key == 'A') {
    osc = oscA;
    rain.play();
    rain.setVolume(0.1);
    playingA = true;
  } else if (key == 'S') {
    osc = oscS;
    playingS = true;
  } else if (key == 'D') {
    osc = oscD;
    playingD = true;
  } else if (key == 'F') {
    osc = oscF;
    playingF = true;
  } else if (key == 'G') {
    osc = oscG;
    playingF = true;
  } else if (key == 'Q') {
    osc = oscQ;
    playingQ = true; 
  } else if (key == 'W') {
    osc = oscW;
    ocean.play();
    ocean.setVolume(0.1);
    playingW = true;
  }
  if (osc) {
    osc.amp(0.5, 0.1);
    playing = true;
  }
}

function keyReleased() {
  print("got key release for ", key);
  var osc;
  if (key == 'A') {
    osc = oscA;
    playingA = false;
  } else if (key == 'S') {
    osc = oscS;
    playingS = false;
  } else if (key == 'D') {
    osc = oscD;
    playingD = false;
  } else if (key == 'F') {
    osc = oscF;
    playingF = false;
  } else if (key == 'G') {
    osc = oscG;
    playingG = false;
  } else if (key == 'Q') {
    osc = oscQ;
    playingQ = false;
  } else if (key == 'W') {
    osc = oscW;
    playingW = false;
  }
  if (osc) {
    osc.amp(0, 0.5);
    playingA = false, playingS = false, playingD = false, playingF = false
    playingQ = false, playingW = false, playingG = false;
  }
}
