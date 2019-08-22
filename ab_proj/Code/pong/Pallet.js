function Pallet(xpos, ypos){
  
  this.h = 100;
  this.w = 10;
  this.x = xpos;
  this.y = ypos; 
  this.setYspeed = 0;

  
  this.display = function (){
    
    this.yposition = constrain(this.y, 0 + this.h/2, height - this.h/2);
    rectMode(CENTER);
    rect(this.x, this.yposition, this.w, this.h);
    
  }
  
  this.setSpeed = function (speed) {
        this.setYspeed = speed;
      }
    
  this.update = function(){
    
    this.y += this.setYspeed;
  }
  
  
  
}
