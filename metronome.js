// Metronome

var freqA = 174;
var freqS = 196;
var freqD = 220;
var freqF = 246;

var oscA, oscS, oscD, oscF;

var playingA, playingS, playingD, playingF;

var playing = false;

function setup() {
  createCanvas(400, 400);
  backgroundColor = color(255, 0, 255);
  textAlign(CENTER);
  
  oscA = new p5.Oscillator();
  oscA.setType('triangle');
  oscA.freq(freqA);
  oscA.amp(0);
  oscA.start();
  
  oscS = new p5.Oscillator();
  oscS.setType('triangle');
  oscS.freq(freqS);
  oscS.amp(0);
  oscS.start();
  
  oscD = new p5.Oscillator();
  oscD.setType('triangle');
  oscD.freq(freqD);
  oscD.amp(0);
  oscD.start();
  
  oscF = new p5.Oscillator();
  oscF.setType('triangle');
  oscF.freq(freqF);
  oscF.amp(0);
  oscF.start();
}

function draw() {

	background(255, 0, 255);
  
  var millisecond = millis();
	text('Milliseconds \nrunning: \n' + millisecond, 200, 200)
  
  var volume = map(mouseX, 0, width, 0, 1);
  volume = constrain(volume, 0, 1);
  
  if (playingA)	{
  osc=oscA;
  osc.amp(volume);
  }
  
  if (playingS)	{
  osc=oscS;
  osc.amp(volume);
  }
  
  if (playingD)	{
  osc=oscD;
  osc.amp(volume);
  }
  
  if (playingF)	{
  osc=oscF;
  osc.amp(volume);
  }
  
  if (playingA) {
	    fill(124, 255, 84);
	    noStroke();
	    ellipse(50, 50, 25, 25);
	  }
	  if (playingS) {
	    fill(167, 53, 255);
	    noStroke();
	    ellipse(60, 60, 30, 30);
	  }
	  if (playingD) {
	    fill(58, 245, 255);
	    noStroke();
	    ellipse(70, 70, 35, 35);
	  }
	  if (playingF) {
	    fill(228, 96, 255);
	    noStroke();
	    ellipse(80, 80, 40, 40);
    }
}

function mousePressed(){
	freqA++;
  oscA.freq(freqA);
  freqS++;
  oscS.freq(freqS);
  freqD++;
  oscD.freq(freqD);
  freqF++;
  oscF.freq(freqF);
}


function keyPressed() {
  print("got key press for ", key);
  var osc;
  if (key == 'A') {
    osc = oscA;
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
  }
  if (osc) {
    osc.amp(0.5,0.1);
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
  }
  if (osc) {
    osc.amp(0, 0.5);
    playingA = false, playingS = false, playingD = false, playingF = false;
  }
}
