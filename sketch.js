var button1, button1a, button2, button3, button4, env, osc, cnv1, A, B, C, D, E, F, G, A2, B2, C2, scales;
var v1, v2, v3, v4, v5, v6, v7, v8, v9, v10;
var w1 = 50;
var w2 = 50;
var w3 = 50;
var w4 = 50;
var w5 = 50;
var w6 = 50;
var w7 = 50;
var w8 = 50;
var w9 = 50;
var w10 = 50;
var h1 = 50;
var h2 = 50;
var h3 = 50;
var h4 = 50;
var h5 = 50;
var h6 = 50;
var h7 = 50;
var h8 = 50;
var h9 = 50;
var h10 = 50;

function preload() {
  correct = loadSound('correct.wav');
  wrong = loadSound('wrong.wav');
  major = loadSound('major.mp3');
  minor = loadSound('minor.mp3');
  Aflatmajor = loadSound('Aflatmajor.mp3');
  Amajor = loadSound('Amajor.mp3');
  Aminor = loadSound('Aminor.mp3');
  Bflatmajor = loadSound('Bflatmajor.mp3');
  Bflatminor = loadSound('Bflatminor.mp3');
  Bmajor = loadSound('Bmajor.mp3');
  Bminor = loadSound('Bminor.mp3');
  Cmajor = loadSound('Cmajor.mp3');
  Cminor = loadSound('Cminor.mp3');
  Csharpmajor = loadSound('Csharpmajor.mp3');
  Csharpminor = loadSound('Csharpminor.mp3');
  Dmajor = loadSound('Dmajor.mp3');
  Dminor = loadSound('Dminor.mp3');
  Eflatmajor = loadSound('Eflatmajor.mp3');
  Eflatminor = loadSound('Eflatminor.mp3');
  Emajor = loadSound('Emajor.mp3');
  Eminor = loadSound('Eminor.mp3');
  Fmajor = loadSound('Fmajor.mp3');
  Fminor = loadSound('Fminor.mp3');
  Fsharpmajor = loadSound('Fsharpmajor.mp3');
  Fsharpminor = loadSound('Fsharpminor.mp3');
  Gmajor = loadSound('Gmajor.mp3');
  Gminor = loadSound('Gminor.mp3');
  Gsharpminor = loadSound('Gsharpminor.mp3');
}

function setup() {
  cnv1 = createCanvas(1250, 700);

  v1 = createVector(75, 580);
  v2 = createVector(175, 580);
  v3 = createVector(275, 580);
  v4 = createVector(375, 580);
  v5 = createVector(475, 580);
  v6 = createVector(575, 580);
  v7 = createVector(675, 580);
  v8 = createVector(775, 580);
  v9 = createVector(875, 580);
  v10 = createVector(975, 580);

  masterVolume(0.5);

  // Answer = Major
  button1 = createButton('Major');
  button1.position(520, 446);
  button1.mousePressed(check1);

  // Answer = Minor
  button1a = createButton('Minor');
  button1a.position(570, 446);
  button1a.mousePressed(check1a);

  // Play major scale
  button2 = createButton('Play');
  button2.position(420, 316);
  button2.mousePressed(playMajor);

  // Play minor scale
  button3 = createButton('Play');
  button3.position(420, 366);
  button3.mousePressed(playMinor);

  // Play activity scale
  button4 = createButton('Play');
  button4.position(325, 446);
  button4.mousePressed(playAT1);

  env = new p5.Env();
  env.setADSR(0.02, 0.05, 0.6, 0.5);
  env.setRange(1, 0);
  osc = new p5.Oscillator();
  osc.setType('sine');
  osc.amp(env);
  osc.start();

  AT1 = [Aflatmajor, Amajor, Aminor, Bflatmajor, Bflatminor, Bmajor, Bminor, Cmajor, Cminor, Csharpmajor, Csharpminor, Dmajor, Dminor, Eflatmajor, Eflatminor, Emajor, Eminor, Fmajor, Fminor, Fsharpmajor, Fsharpminor, Gmajor, Gminor, Gsharpminor];
  scales = random(AT1);
}

function draw() {

  background(255);

  textSize(50);
  textStyle(BOLD);
  fill(255, 125, 0);
  text("Activity 1: Major and Minor Scales", 250, 100);

  textSize(20);
  textStyle(NORMAL);
  fill(0);
  text("In this activity we will learn to distinguish between major and minor scales.", 50, 200);
  text("Major scales sound 'happy', while minor scales sound rather 'sad'.", 50, 250);
  text("This is what a major scale sounds like:", 50, 330);
  text("This is what a minor scale sounds like:", 50, 380);
  text("Now try to identify this scale:", 50, 460);
  text("You can now create your own scales and melodies with these musical balls:", 50, 510);
  text("Hint: drag the mouse up and down over the balls to slightly alter the pitch!", 50, 670);

  textSize(15);
  textStyle(BOLD);
  text("Answer:", 430, 460);

  fill(102, 0, 51);
  ellipse(v1.x, v1.y, w1, h1); // A
  fill(153, 0, 153);
  ellipse(v2.x, v2.y, w2, h2); // B
  fill(102, 0, 204);
  ellipse(v3.x, v3.y, w3, h3); // C
  fill(51, 51, 255);
  ellipse(v4.x, v4.y, w4, h4); // D
  fill(0, 128, 255);
  ellipse(v5.x, v5.y, w5, h5); // E
  fill(0, 255, 255);
  ellipse(v6.x, v6.y, w6, h6); // F
  fill(0, 255, 0);
  ellipse(v7.x, v7.y, w7, h7); // G
  fill(255, 255, 0);
  ellipse(v8.x, v8.y, w8, h8); // A'
  fill(255, 128, 0);
  ellipse(v9.x, v9.y, w9, h9); // B'
  fill(255, 0, 0);
  ellipse(v10.x, v10.y, w10, h10); // C'

  if (major.currentTime() > 10.4) {
    major.stop();
    button2.html("Play");
  }

  if (minor.currentTime() > 10.3) {
    minor.stop();
    button3.html("Play");
  }

  if (scales.currentTime() > 10.3) {
    scales.stop();
    button4.html("Play");
  }
}

//
//
//FUNCTIONS
//
//

function check1() { // MAJOR

  if (scales == AT1[0] || scales == AT1[1] || scales == AT1[3] || scales == AT1[5] || scales == AT1[7] || scales == AT1[9] || scales == AT1[11] || scales == AT1[13] || scales == AT1[15] || scales == AT1[17] || scales == AT1[19] || scales == AT1[21]) {

    correct.play();

  } else {

    wrong.play();
  }
}

function check1a() { // MINOR

  if (scales == AT1[2] || scales == AT1[4] || scales == AT1[6] || scales == AT1[8] || scales == AT1[10] || scales == AT1[12] || scales == AT1[14] || scales == AT1[16] || scales == AT1[18] || scales == AT1[20] || scales == AT1[22] || scales == AT1[23]) {

    correct.play();

  } else {

    wrong.play();
  }
}

function playMajor() {

  if (!major.isPlaying()) {
    major.play();
    button2.html("Stop");
  } else {
    major.stop();
    button2.html("Play");
  }
}

function playMinor() {

  if (!minor.isPlaying()) {
    minor.play();
    button3.html("Stop");
  } else {
    minor.stop();
    button3.html("Play");
  }
}

function playAT1() {

  scales.play();

  scales = random(AT1); // picks a random new scale every time the Play button is pressed
}

function envAttack() {
  env.triggerAttack();
}

function mouseReleased() {

  env.triggerRelease();

  w1 = 50;
  h1 = 50;
  w2 = 50;
  h2 = 50;
  w3 = 50;
  h3 = 50;
  w4 = 50;
  h4 = 50;
  w5 = 50;
  h5 = 50;
  w6 = 50;
  h6 = 50;
  w7 = 50;
  h7 = 50;
  w8 = 50;
  h8 = 50;
  w9 = 50;
  h9 = 50;
  w10 = 50;
  h10 = 50;
}

function mousePressed() {

  if (mouseX > v1.x - 25 && mouseX < v1.x + 25 && mouseY > 555 && mouseY < 605) { // delimits square area
    osc.freq(220);
    envAttack();
    w1 = w1 * 1.7;
    h1 = h1 * 1.7;
  }
  if (mouseX > v2.x - 25 && mouseX < v2.x + 25 && mouseY > 555 && mouseY < 605) {
    osc.freq(246.94);
    envAttack();
    w2 = w2 * 1.7;
    h2 = h2 * 1.7;
  }
  if (mouseX > v3.x - 25 && mouseX < v3.x + 25 && mouseY > 555 && mouseY < 605) {
    osc.freq(261.63);
    envAttack();
    w3 = w3 * 1.7;
    h3 = h3 * 1.7;
  }
  if (mouseX > v4.x - 25 && mouseX < v4.x + 25 && mouseY > 555 && mouseY < 605) {
    osc.freq(293.66);
    envAttack();
    w4 = w4 * 1.7;
    h4 = h4 * 1.7;
  }
  if (mouseX > v5.x - 25 && mouseX < v5.x + 25 && mouseY > 555 && mouseY < 605) {
    osc.freq(329.63);
    envAttack();
    w5 = w5 * 1.7;
    h5 = h5 * 1.7;
  }
  if (mouseX > v6.x - 25 && mouseX < v6.x + 25 && mouseY > 555 && mouseY < 605) {
    osc.freq(349.23);
    envAttack();
    w6 = w6 * 1.7;
    h6 = h6 * 1.7;
  }
  if (mouseX > v7.x - 25 && mouseX < v7.x + 25 && mouseY > 555 && mouseY < 605) {
    osc.freq(392);
    envAttack();
    w7 = w7 * 1.7;
    h7 = h7 * 1.7;
  }
  if (mouseX > v8.x - 25 && mouseX < v8.x + 25 && mouseY > 555 && mouseY < 605) {
    osc.freq(440);
    envAttack();
    w8 = w8 * 1.7;
    h8 = h8 * 1.7;
  }
  if (mouseX > v9.x - 25 && mouseX < v9.x + 25 && mouseY > 555 && mouseY < 605) {
    osc.freq(493.88);
    envAttack();
    w9 = w9 * 1.7;
    h9 = h9 * 1.7;
  }
  if (mouseX > v10.x - 25 && mouseX < v10.x + 25 && mouseY > 555 && mouseY < 605) {
    osc.freq(523.25);
    envAttack();
    w10 = w10 * 1.7;
    h10 = h10 * 1.7;
  }
}

function mouseDragged() {
  if (mouseX > v1.x - 25 && mouseX < v1.x + 25 && mouseY > 555 && mouseY < 605 && mouseIsPressed) {
    var A = map(mouseY, height, 460, 207.65, 233.08);
    osc.freq(A);
  }
  if (mouseX > v2.x - 25 && mouseX < v2.x + 25 && mouseY > 555 && mouseY < 605 && mouseIsPressed) {
    var B = map(mouseY, height, 460, 233.08, 261.63);
    osc.freq(B);
  }
  if (mouseX > v3.x - 25 && mouseX < v3.x + 25 && mouseY > 555 && mouseY < 605 && mouseIsPressed) {
    var C = map(mouseY, height, 460, 246.94, 277.18);
    osc.freq(C);
  }
  if (mouseX > v4.x - 25 && mouseX < v4.x + 25 && mouseY > 555 && mouseY < 605 && mouseIsPressed) {
    var D = map(mouseY, height, 460, 277.18, 311.13);
    osc.freq(D);
  }
  if (mouseX > v5.x - 25 && mouseX < v5.x + 25 && mouseY > 555 && mouseY < 605 && mouseIsPressed) {
    var E = map(mouseY, height, 460, 311.13, 349.23);
    osc.freq(E);
  }
  if (mouseX > v6.x - 25 && mouseX < v6.x + 25 && mouseY > 555 && mouseY < 605 && mouseIsPressed) {
    var F = map(mouseY, height, 460, 329.63, 369.99);
    osc.freq(F);
  }
  if (mouseX > v7.x - 25 && mouseX < v7.x + 25 && mouseY > 555 && mouseY < 605 && mouseIsPressed) {
    var G = map(mouseY, height, 460, 369.99, 415.3);
    osc.freq(G);
  }
  if (mouseX > v8.x - 25 && mouseX < v8.x + 25 && mouseY > 555 && mouseY < 605 && mouseIsPressed) {
    var A2 = map(mouseY, height, 460, 415.3, 466.16);
    osc.freq(A2);
  }
  if (mouseX > v9.x - 25 && mouseX < v9.x + 25 && mouseY > 555 && mouseY < 605 && mouseIsPressed) {
    var B2 = map(mouseY, height, 460, 466.16, 523.25);
    osc.freq(B2);
  }
  if (mouseX > v10.x - 25 && mouseX < v10.x + 25 && mouseY > 555 && mouseY < 605 && mouseIsPressed) {
    var C2 = map(mouseY, height, 460, 493.88, 554.37);
    osc.freq(C2);
  }
}