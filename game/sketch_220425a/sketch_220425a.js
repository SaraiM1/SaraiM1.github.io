
var ballx = 300;
var bally = 300;
var ballSize = 40;
var score = 0
var img1, img2;

function preload(){
  img1 = loadImage('https://saraim1.github.io/images/bed1.png');
    img2 = loadImage('https://saraim1.github.io/images/hammy.png');
}

function setup() {
  createCanvas(600,600);
  textAlign(CENTER);
  textSize(20);
  
} //end of setup


function draw() {
background(img1);

levelOne();

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
  //background(random(255));
  }
  
 // ellipse(ballx, bally, ballSize, ballSize);
  
  image(img2,ballx, bally, 160,160);
  
    line(ballx+80, bally+80, mouseX, mouseY);

} //end of level 1
