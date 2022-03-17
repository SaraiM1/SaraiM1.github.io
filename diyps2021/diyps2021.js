var img;
var initials ='jm'; // your initials
var choice = '1'; // starting choice, so it is not empty
var screenbg = 250; // off white background
var lastscreenshot=61; // last screenshot never taken

function preload() {
// preload() runs once, it may make you wait
//  img = loadImage('cat.jpg');  // cat.jpg needs to be next to this .js file
// you can link to an image on your github account
  //img = loadImage('https://dma-git.github.io/images/74.png');
  img2 = loadImage('https://saraim1.github.io/diyps2021/star_o.png');

}

function setup() {
createCanvas(600, 650);  // canvas size
background(screenbg);   // use our background screen color

}

function draw() {
  if (keyIsPressed) {
    choice = key; // set choice to the key that was pressed
    clear_print(); // check to see if it is clear screen or save image
  }
  if (mouseIsPressed){
    newkeyChoice(choice);  // if the mouse is pressed call newkeyChoice
  }
}

function newkeyChoice(toolChoice) { //toolchoice is the key that was pressed
  // the key mapping if statements that you can change to do anything you want.
  // just make sure each key option has the a stroke or fill and then what type of 
  // graphic function

 if (toolChoice == '1' ) {  // first tool //transparentline
   
    stroke(0, 75);
    strokeWeight(3)
    line(mouseX, mouseY, pmouseX, pmouseY);
    
  } else if (toolChoice == '2') { // second tool //purpleline

    stroke(92, 36, 133);
    var weight = dist(mouseX-5, mouseY-5, pmouseX, pmouseY);
  strokeWeight(weight);
  line(mouseX, mouseY, pmouseX, pmouseY);
    
    
    
  } else if (toolChoice == '3') { // third tool //linessss
  stroke(300, 100, 0);
  fill(255);
  strokeWeight(1);
   ellipse(50, mouseY, 20, 20);
   ellipse(mouseX, 150, 20, 20);
   ellipse(550, mouseY, 20, 20);
   ellipse(mouseX, 550, 20, 20);
  
    //line(mouseX, mouseY, pmouseX, pmouseY);
  } else if (toolChoice == '4') { /////Yellow line
  strokeWeight(10);
    stroke(247, 244, 40);
    line(mouseX, mouseY, pmouseX, pmouseY);
    
  } else if (key == '5') { // this tool calls a function ///blackSQ w/gray outline
  stroke(random(20, 145), random(100), random(80, 100))
    strokeWeight(3)
    testbox(8, 10, 56);
    //testbox(11, 112, 16);
    
 // make testbox do something!
    line(mouseX, mouseY, pmouseX, pmouseY);
  } else if (toolChoice == '6') { //////rectangle line
  
    stroke(512,258,51);
    strokeWeight(0.5);
    fill(random(20, 145), random(100), random(80, 100),52)
    rect(mouseX, mouseY, pmouseX, pmouseY);
  } else if (toolChoice == '7') {  //////triangle line

    fill(100, 200, 100,20);
    stroke(3);
    triangle(300, mouseY, mouseX, mouseY, mouseX,150);

   // ellipse(mouseX, mouseY, 20, 20);
  } else if (toolChoice == '8') {  /////polka dots

    stroke(random(500), random(200), random(100));
    strokeWeight(5);
    line(mouseX,mouseY,mouseX,mouseY);
  } else if (toolChoice == '9') { ///// tiny squares
    noStroke();
    fill(300, 100, 0);
    rect(mouseX, mouseY, 5, 5);
  } else if (toolChoice == '0') { ////random squaress
    stroke(random(225), random(225), random(30),60);
    strokeWeight(20);
    fill(random(255), random(255), random(255), random(255));
    rect(mouseX, mouseY, 50, 50);
  //} else if (toolChoice == 'g' || toolChoice == 'G') { // g places the image we pre-loaded
    //image(img, mouseX-30, mouseY-30);
    
  } else if (toolChoice == 's' || toolChoice == 'S') { // s places the image we pre-loaded
    image(img2, mouseX, mouseY);
    
  }
 }
 
function testbox(r, g, b) {
// this is a test function that will show you how you can put your own functions into the sketch
  x = mouseX;
  y = mouseY;
  fill(r, g, b);
  rect(x-50, y-50, 100, 100);

}

function clear_print() {
// this will do one of two things, x clears the screen by resetting the background
// p calls the routine saveme, which saves a copy of the screen
  if (key == 'x' || key == 'X') {
    background(screenbg); // set the screen back to the background color
  } else if (key == 'p' || key == 'P') {
     saveme();  // call saveme which saves an image of the screen
  }
}

function saveme(){
    //this will save the name as the intials, date, time and a millis counting number.
    // it will always be larger in value then the last one.
  filename=initials+day() + hour() + minute() +second();
  if (second()!=lastscreenshot) { // don't take a screenshot if you just took one
    saveCanvas(filename, 'jpg');
  }
  lastscreenshot=second(); // set this to the current second so no more than one per second
  
}
