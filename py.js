let capture;

function setup() {
  createCanvas(600, 400);
  capture = createCapture(VIDEO);
  capture.size(320, 240);
  capture.hide(); 
}

function draw() {
  background(220);
  image(capture, 150, 75);
  fill(255,255,255);
  stroke(255,255,255);
  rect(50,15, 500, 55);
  //here!
  fill(255, 255, 255);
  stroke(255,255,255);
  rect(34, 60, 55, 250);
  fill(255, 255, 255);
  stroke(255,255,255);
  rect(514, 60, 55, 250);
  first();
  secondium();
  third();
  //my own army of circles! im proud lol
  fill(0, 72, 255);
  stroke(0,72,255);
  circle(60,100,60);
  fill(255, 221, 0);
  stroke(255,221,0);
  circle(540,100,60);
  //next, the lines i guess.
  fill(255, 255, 255);
  stroke(255,255,255);
  rect(34, 130, 55, 250);
  fill(255, 255, 255);
  stroke(255,255,255);
  rect(514, 130, 55, 250);
  //happy bday text
  fill(255,255,255);
  stroke(255,255,255);
  rect(50,325, 500, 55)
  textSize(32);
  textFont('Impact');
  fill(248,24,148);
  text('HAPPY', 50, 350);
  text('BIRTHDAY', 50, 380);
  fill(255, 0, 183);
  stroke(255, 0, 183);
  circle(540,350,30);

  //LETS try the tiny circles that are on the thingy
  tinybois()
}

function tinybois(){
    fill(245, 190, 88);
    stroke(245, 190, 88);
    circle(70,150,10);
    circle(50,200,10);
    circle(70,250,10);

    //ok, one side done... next!

    circle(535,150,10);
    circle(555,200,10);
    circle(535,250,10);

    //now the bottom

    circle(200,350,10);
    circle(250,350,10);
    circle(300,350,10);
    circle(350,350,10);
    circle(400,350,10);
    circle(450,350,10);

    //i did it, im a legend >:)


}

function first(){
  fill(255, 221, 0);
  stroke(255,221,0);
  circle(60,40,60);
  fill(0, 72, 255);
  stroke(0,72,255);
  circle(120,40,60);
  fill(255, 0, 183);
  stroke(255, 0, 183);
  circle(180,40,60);

}

function secondium(){
    //second set
  fill(255, 221, 0);
  stroke(255,221,0);
  circle(240,40,60);
  fill(0, 72, 255);
  stroke(0,72,255);
  circle(300,40,60);
  fill(255, 0, 183);
  stroke(255, 0, 183);
  circle(360,40,60);

}

function third(){
  //third set
  fill(255, 221, 0);
  stroke(255,221,0);
  circle(420,40,60);
  fill(0, 72, 255);
  stroke(0,72,255);
  circle(480,40,60);
  fill(255, 0, 183);
  stroke(255, 0, 183);
  circle(540,40,60);

}

function mousePressed(){
     
    save('myCanvas.png');
    return false;
}

