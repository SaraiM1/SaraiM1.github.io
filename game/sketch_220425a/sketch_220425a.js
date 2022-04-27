
var ballx = 300;
var bally = 300;
var ballSize = 60;
var score = 0;
var img1, img2, img3;
var gameState = "L1";

function preload(){
  img1 = loadImage('https://saraim1.github.io/images/bed1.png');
    img2 = loadImage('https://saraim1.github.io/images/hammy.png');
        img3 = loadImage('https://saraim1.github.io/images/desk.png');

}

function setup() {
  createCanvas(600,600);
  textAlign(CENTER);
  textSize(20);
  
} //end of setup


function draw() {
background(img1);
if(gameState == "L1"){
levelOne();
}
if(gameState == "L2"){
  background(img3);
    levelTwo();
}
if(gameState == "L3"){
  levelThree();
}

text(("Score: " + score), width/2, 40);

} //end of draw

function levelOne(){
  text("level 1", width/2, height-530);
  var distToBall = dist (ballx+80, bally+80, mouseX, mouseY);
  if(distToBall < ballSize/2){
    ballx = random(width);
    bally = random(height); 
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
    ballx = random(width);
    bally = random(height); 
    score = score + 1;
  }
  
  if(score>=10){
  gameState = "L3";
  }
  
 // ellipse(ballx, bally, ballSize, ballSize);
  
  image(img2,ballx, bally, 160,160);
  
   // line(ballx+80, bally+80, mouseX, mouseY);

} //end of level 2

function levelThree(){
  text("level 3", width/2, height-530);
  var distToBall = dist (ballx+80, bally+80, mouseX, mouseY);
  if(distToBall < ballSize/2){
    ballx = random(width);
    bally = random(height); 
    score = score + 1;
    //ballSize = ballSize - 2;
  }
  
  if(score>=15){
  //background(img3);
  }
  
 // ellipse(ballx, bally, ballSize, ballSize);
  
  image(img2,ballx, bally, 160,160);
  
   // line(ballx+80, bally+80, mouseX, mouseY);

} //end of level 3
