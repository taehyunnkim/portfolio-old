var drop = [];
var canvas;
var add;
var bcolor;

function setup() {
    
  createCanvas(800, 600, P2D);
  
  
    
  for (int i = 0; i < snow.length; i++) {
    drop[i] = new Drop(random(width), random(-1000, -50), random(2.0, 2.5), 255, random(5, 10));
    //(x-axis position, y-axis position, speed, color, size)
  }
}

function mousePressed(){

   add += 10;

}

function keyPressed(){

  add -= 10;
  
}

function drawLine(){
  	//strokeWeight(5);
    line(0,0,0, height);
    line(width-1, 0, width-1, height);
    line(0, height-1, width, height-1);
 }

function draw() {
  background (bcolor+add);
  for (int i = 0; i< snow.length; i++) {
    drawLine();
    Drop[i].drawRain();
    Drop[i].rainFall(); 
    Drop[i].checkEdge();
    Drop[i].resetPos(random(-150, -50));
    
    
  	}
  }