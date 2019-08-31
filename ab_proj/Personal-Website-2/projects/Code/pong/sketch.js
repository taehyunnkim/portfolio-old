var palletLeft;
var palletRight;
var ball = [];
var speed = 6;
var Textx;
var Texty;
var canvas;

function setup() {
  
  canvas = createCanvas(800, 600, P2D);
  canvas.parent("pong");
  
  palletLeft = new Pallet(0 + 5, height/2);
  palletRight = new Pallet(width - 7, height/2);
  ball = new Ball();
    
  Textx = width/2;
  Texty = height/2 + 30;
  
}

function keyPressed (){
  
  if (keyCode == "38"){
    palletRight.setSpeed(-speed);
  } else if (keyCode == "40"){
    palletRight.setSpeed(speed);
  } else if (keyCode == "87"){
    palletLeft.setSpeed(-speed);
  } else if (keyCode == "83"){
    palletLeft.setSpeed(speed);
  } else if (keyCode == "32"){
    ball.reset();
    Textx = -1000;
    Texty = -1000;
    //print(ball.angle);
  } else if(keyCode == "13"){
    startingText();  
    Textx = width/2;
    Texty = height/2 + 30;
    ball.restart();
  } 
}

function keyReleased (){
  
  if(keyCode == "38" || keyCode == "40"){
    palletRight.setSpeed(0);
  } else if (keyCode == "87" || keyCode == "83"){
    palletLeft.setSpeed(0);
  }
}



function draw() {
  background(50);
  
  startingText();
    
  //checkAngle()    
  score();
  palletLeft.display(); 
  palletRight.display();
  palletRight.update();
  palletLeft.update();
    
  ball.display();
  ball.checkEdges();
  ball.update();
  ball.checkRightpallet(palletRight);
  ball.checkLeftpallet(palletLeft);
  ball.checkXedge();
}

function score(){
    
  push();
  fill(255);
  textStyle(BOLD);
  textAlign(CENTER);
  textSize(50);
  text(ball.score1, 50, 50);
  text(ball.score2, width - 50, 50);
  pop();

  push();
  fill(255);
  textStyle(BOLD);
  textAlign(CENTER);
  textSize(15);  
  text("PLAYER 1", 50, 70);
  text("PLAYER 2", width - 50, 70);
  pop();  
}

function startingText(){
  push();
  fill(255);
  textStyle(BOLD);
  textAlign(CENTER);
  text("PRESS SPACE TO START", Textx, Texty);
  text("PRESS ENTER TO RESTART", Textx, Texty + 15);
  pop();
    
}

function checkAngle(){
      if ( ball.angle < PI/6){
          ball.reset();
      } else if (ball.angle > 5*PI/6 && ball.angle < 7*PI/6){
          ball.reset();
      } else if (ball.angle > 11*PI/6){
          ball.reset();
      } else if (ball.angle > PI/3 && ball.angle < 2*PI/3){
          ball.reset();
      } else if (ball.angle > 4 * PI/3 && ball.angle < 5*PI/3){
          ball.reset();
      }
}


