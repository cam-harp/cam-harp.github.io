let cWidth = 600;
let cHeight = 300;
let yPoint = 180;
let xPoint = 100;
let bPoint = 750;
let cPoint = 100;


let scyPoint = yPoint + 10;
let scxPoint = xPoint + 10;
let scWidth = cWidth - 20;
let scHeight = cHeight - 20;
let csyPoint = yPoint + 50; 
let csxPoint = xPoint + 50;
let csWidth = cWidth - 100;
let csHeight = cHeight - 100;
let byPoint = yPoint + 25;
let mbyPoint = yPoint + 20; 
let qyPoint = yPoint + 15;
let mbqPoint = yPoint + 30;
let abPoint = yPoint + 65;
let bbPoint = yPoint + 85;
let xbPoint = yPoint + 45; 
let uaPoint = yPoint + 155;
let lraPoint = yPoint + 175;
let daPoint = yPoint + 195;
let jslPoint = yPoint + 60;
let jsrPoint = yPoint + 175;
let hbPoint = yPoint + 228;
//canvas
let width = 800;
let height = 600;

//how many pixels the line moves per press
let x, y;
const MOVE_AMOUNT = 10;


function setup() {
  createCanvas(800, 600);
  background(233,229,205);
  angleMode(DEGREES);
  drawSwitch(); //draws switch when setup
//starting point for the etch a sketch line
  x = width / 2;
  y = height / 2;
  strokeWeight(4);
  stroke(0);
  point(x, y);
}

function drawSwitch() {
 //Nintendo LOGO
push();
 strokeWeight(8);
 stroke('white');
 fill('red');
 rect(150, 20, 500, 75, 60);
pop();
push();
 fill(250);
 textFont('Courier New');
 textSize(50);
 text('Nintendo Switch', 175, 75);
pop();


//Right Button
push();
 strokeWeight(3);
 fill(0);
 beginShape();
   curveVertex(710, yPoint);
   curveVertex(765, yPoint);
   curveVertex(775, mbyPoint);
   curveVertex(710, mbyPoint);
  endShape(CLOSE);

//Left Button 
 beginShape();
   curveVertex(95, yPoint);
   curveVertex(35, yPoint);
   curveVertex(25, mbyPoint);
   curveVertex(95, mbyPoint);
 endShape(CLOSE);
pop();

//Right controller
push();
 fill(81, 225, 92);
 strokeWeight(0);
 rect(685, yPoint, 95, cHeight, 25);
pop();

//Left controller
push();
 fill(246, 30, 93);
 strokeWeight(0);
 rect(20, yPoint, 95, cHeight, 25);
pop();


//+ menu button
push();
 strokeWeight(0);
 fill(0);
 beginShape();
   quad(710, qyPoint, 710, mbqPoint, 715, mbqPoint, 715, qyPoint);
   quad(705, mbyPoint, 720, mbyPoint, 720, byPoint, 705, byPoint);
 endShape(CLOSE);

//- menu button
 quad(80, mbyPoint, 95, mbyPoint, 95, byPoint, 80, byPoint);
pop();

//console
 fill(0);
 rect(xPoint, yPoint, cWidth, cHeight); 

//screen cover
push();
 strokeWeight(0.5);
 fill(30);
 rect(scxPoint, scyPoint, scWidth, scHeight,20); 
pop();

//console screen
 fill(220);
 rect(csxPoint, csyPoint, csWidth, csHeight); 

//Right Controller Buttons
//X Button
push();
 fill(0);
 ellipse(737.5, xbPoint, 17);
//Y Button
 ellipse(717, abPoint, 17);
//B Button
 ellipse(737.5, bbPoint, 17);
//A Button 
 ellipse(757, abPoint, 17);
pop();
//Letters for each button
push();
 fill(250);
 text('A',753, abPoint+4);
 text('B', 733.5, bbPoint+4);
 text('Y', 713, abPoint+4);
 text('X', 733.5, xbPoint+4);
pop();

//Left Controller Buttons
//Up Arrow Button
push();
 fill(0);
 ellipse(62.5, uaPoint, 17);
//Left Arrow Button
 ellipse(42, lraPoint, 17);
//Right Arrow Button
 ellipse(82, lraPoint, 17);
//Down Arrow button
 ellipse(62.5, daPoint, 17);
pop();
//Arrows(Triangles) for each button
push();
 fill(35);
//up
 triangle(62.5, uaPoint-6, 55.5, uaPoint+3, 68.5,uaPoint+3);
//left
 triangle(35, lraPoint, 45, lraPoint-6, 45, lraPoint+6);
//right
 triangle(89, lraPoint, 79, lraPoint-6, 79, lraPoint+6);
//down
 triangle(62.5, daPoint+6, 68.5, daPoint-3, 55.5, daPoint-3);
pop();

//Left Contoller Joy-Stick
 fill(0);
 ellipse(cPoint - 40, jslPoint, 35);
push();
 fill(40);
 ellipse(cPoint - 40, jslPoint, 30);
pop();

//Right Controller Joy-Stick
 fill(0);
 ellipse(bPoint - 12.5, jsrPoint, 35);
push();
 fill(40);
 ellipse(bPoint - 12.5, jsrPoint, 30);
pop();

//Capture Screenshot button
 square(68, hbPoint - 8, 16);
 fill(40);
 ellipse(76, hbPoint, 14);

//Home button
push();
 strokeWeight(4);
 stroke('grey');
 noFill();
 ellipse(720, hbPoint, 16)
pop();
 fill(0);
 ellipse(720, hbPoint, 15);

//little house for home button
push();
 stroke('grey');
 beginShape();
   vertex(715, hbPoint - 2);
   vertex(720, hbPoint - 5);
   vertex(725, hbPoint - 2);
   vertex(724, hbPoint + 3);
   vertex(716, hbPoint + 3);
 endShape(CLOSE);
pop();

textSize(7);
text("Press home to clear", 710, hbPoint + 20);

}
// using arrow keys to make a line
function keyPressed() {
  let previousX = x;
  let previousY = y;
  switch(keyCode) {
    case UP_ARROW:
      y -= MOVE_AMOUNT;
      break;
    case RIGHT_ARROW:
      x += MOVE_AMOUNT;
      break;
    case DOWN_ARROW:
      y += MOVE_AMOUNT;
      break;
    case LEFT_ARROW:
      x -= MOVE_AMOUNT;
      break;
  }
  //keeping line inside of canvas(switch)
  x = constrain(x, 150, 650);
  y = constrain(y, 230, 430);
  stroke(0);
  strokeWeight(4);
  line(previousX, previousY, x, y);
}
//Clearing canvas when clicking home button
function mousePressed() {
let d = dist(mouseX, mouseY, 720, hbPoint);
if (d < 15) {
  console.log("Home button pressed... clearing canvas");
  shake();
}
}
//clearing canvas function (basically just redrawing the screen)
function shake() { 
  fill(220);
  noStroke();
  rect(csxPoint, csyPoint, csWidth, csHeight); 
  x = width / 2; 
  y = height / 2;
}