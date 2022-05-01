
var ballx = 300;
var bally = 300;
var ballSize = 100;
var score = 0;
var img1, img2, img3, img4, img5,beginImg;
var c; //ourtext color as a variable
var gameState = "begin";

function preload(){
  img1 = loadImage('https://saraim1.github.io/images/bed1.png');
    img2 = loadImage('https://saraim1.github.io/images/hammy1.png');
        img3 = loadImage('https://saraim1.github.io/images/desk.png');
           img4 = loadImage('https://saraim1.github.io/images/room.png');
               img5 = loadImage('https://saraim1.github.io/images/hammy2.png');
  beginImg = loadImage ('https://saraim1.github.io/images/HamsterDetective.png');
}

function setup() {
  createCanvas(600,600);
  let c = color(200, 100, 100); //textcolor
  fill(c);
  textAlign(CENTER);
  textStyle(BOLD);
  textSize(20);
  
  
} //end of setup

function draw() {

  if(gameState == "begin"){
    background(beginImg);
    beginGame();
  }
  if(gameState == "L1"){
    background(img1);
    text(("Score: " + score), width/2, 40);
      levelOne();
}
if(gameState == "L2"){
  background(img3);
  text(("Score: " + score), width/2, 40);
    levelTwo();
}
if(gameState == "L3"){
    background(img4);
    text(("Score: " + score), width/2, 40);
  levelThree();
}
if(gameState == "Win"){
    background(img5);
  Win();
}


} //end of draw


function beginGame(){
    if (mouseIsPressed === true) {
      gameState="L1";
  } //end of if mousePressed
} //end of beginGame

function levelOne(){
  text("level 1", width/2, height-530);
  var distToBall = dist (ballx+80, bally+80, mouseX, mouseY);
  if(distToBall < ballSize/2){
    ballx = random(width-115);
    bally = random(height-115); 
    score = score + 1;
  }
  
  if(score>=5){
  gameState = "L2";
  background(img3);
  }
  
 // ellipse(ballx, bally, ballSize, ballSize);
  
  image(img2,ballx, bally, 160,160);
    line(ballx+80, bally+80, mouseX, mouseY);

} //end of level 1

function levelTwo(){
  text("level 2", width/2, height-530);
  var distToBall = dist (ballx+80, bally+80, mouseX, mouseY);
  if(distToBall < ballSize/2){
    ballx = random(width-115);
    bally = random(height-115); 
    score = score + 1;
  }
  
  if(score>=10){
  gameState = "L3";
  background(img4);
  }
  
  //image(img2,ballx, bally, 160,160);
    image(img2,ballx, bally, ballSize, ballSize);

  
   // line(ballx+80, bally+80, mouseX, mouseY);

} //end of level 2

function levelThree(){
  text("level 3", width/2, height-530);
  var distToBall = dist (ballx+80, bally+80, mouseX, mouseY);
  if(distToBall < ballSize/2){
     ballx = random(width-115);
    bally = random(height-115); 
    score = score + 1;
    ballSize = ballSize -1;
  }
  
  if(score>=15){
    gameState = "Win";
     background(img5);
  }
  
 // ellipse(ballx, bally, ballSize, ballSize);
      image(img2,ballx, bally, ballSize, ballSize);

  //image(img2,ballx, bally, 160,160);
 
  
   // line(ballx+80, bally+80, mouseX, mouseY);

} //end of level 3

function Win(){
text("Win", width/2, height-530);
text("Thank you for bringing my hammy back!", width/2, height-20);

} //end of game
