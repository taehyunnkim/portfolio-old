var rows = 40;
var cols = 40;
var s = 15;
var w = cols * s;
var h = rows * s;

var text1 = "Welcome to Eric's Snake Game";
var text2 = "Press any arrowkeys to start";



function setup() {
  
  createCanvas(w,h);  
  player = new snake();
  apple = new food();
}

function draw() {
  background(51);
  //grid();    
  intro();    
  keyPressed();  
  checkCollision();
  score();
  player.update();
  player.drawPlayer();
  apple.drawFood();
  frameRate(15);
  
}

function keyPressed() {
    if (keyCode == 38) {
        //UP
        player.dir(0,-1);
        text1 = "";
        text2 = "";
    } else if (keyCode == 40) {
        //DOWN
        player.dir(0,1);
        text1 = "";
        text2 = "";
    } else if (keyCode == 39) {
        //RIGHT
        player.dir(1,0);
        text1 = "";
        text2 = "";
    } else if (keyCode == 37) {                      
        //LEFT
        player.dir(-1,0);
        text1 = "";
        text2 = "";
     } else if (keyCode == 32) {                      
        //SPACE
        //noLoop();
     }
}

function intro() {
    push();
    stroke("Green");
    textSize(30);
    fill(255);
    textAlign(CENTER);
    text(text1, width/2, height/3);
    pop();
    
    push();
    stroke("Green");
    textSize(15);
    fill(255);
    textAlign(CENTER);
    text(text2, width/2, height/2.5);
    pop();
}


function score() {
    textSize(30);
    fill(255);
    text(player.tail, 50, 50);
}

function grid() {
    for(var i = 0; i < cols; i++) {
      for(var j = 0; j < rows; j++) {
          var x = i * s;
          var y = j * s;

          stroke(0);
          fill(51);
          rect(x,y,s,s);
      }
  }
}

function checkCollision() {
   if(player.x == apple.x && player.y == apple.y) {
       player.addTail();
       apple.addFood();
       //print("Collision");
      }
    
    if((player.x > cols-1)) {
       restart();    
    }
    
    if((player.x < 0)) {
       restart();    
    }
    
    if((player.y > rows-1)) {
       restart();   
    }
    
    if((player.y < 0)) {
       restart();   
    }
      
    for(var i = 0; i < player.position.length-1; i++) {
        if(player.position[player.position.length-1].x == player.position[i].x && player.position[player.position.length-1].y == player.position[i].y) {
            restart();
        }
    }
    
}    

function restart() {
    setup();
    loop();
}
