function Ball(){
  
  this.w = 20;
  this.h = 20;
  this.speed = 7;
  
  this.pos = createVector(width/2, height/2);
    
  this.angle = random(TWO_PI);
  this.xspeed = 0;
  this.yspeed = 0;

  this.score1 = 0;
  this.score2 = 0;
  
  this.display = function(){
    ellipseMode(CENTER);
    ellipse(this.pos.x, this.pos.y, this.w, this.h);
  }
  
  this.update = function(){
    
    this.pos.x += this.xspeed;
    this.pos.y += this.yspeed;
    
  }
  
  this.checkEdges = function(){
    
    if (this.pos.y > height - this.w/2 ){
      this.yspeed *= -1;
    } else if (this.pos.y < 0 + this.w/2){
      this.yspeed *= -1;
    }
    
  }
  
  this.checkRightpallet = function(pallet){
    if (this.pos.x + this.w/2 > pallet.x - pallet.w/2){
      if (this.pos.y < pallet.y + pallet.h/2 && this.pos.y > pallet.y - pallet.h/2){
        this.xspeed *= -1;
      }
    }
  }
  
  this.checkLeftpallet = function(pallet){
    if (this.pos.x - this.w/2 < pallet.x + pallet.w/2){
      if (this.pos.y < pallet.y + pallet.h/2 && this.pos.y > pallet.y - pallet.h/2){
        this.xspeed *= -1;
      }
    }
  }
  
  this.reset = function(){
         this.pos.x = width/2;
         this.pos.y = height/2;
         this.angle = random(TWO_PI);
         this.xspeed = this.speed * cos(this.angle);
         this.yspeed = this.speed * sin(this.angle);
  }
  
   this.restart = function(){
         this.pos.x = width/2;
         this.pos.y = height/2;
         this.xspeed = 0;
         this.yspeed = 0;
         this.score1 = 0;
         this.score2 = 0;
  }
  
  this.checkXedge = function(){
      if (this.pos.x > width){
         this.score1++;
         this.pos.x = width/2;
         this.pos.y = height/2;
         this.angle = random(TWO_PI);
         this.xspeed = 0 * cos(this.angle);
         this.yspeed = 0 * sin(this.angle);
     }   
      
      if (this.pos.x < 0){
         this.score2++;
         this.pos.x = width/2;
         this.pos.y = height/2;
         this.angle = random(TWO_PI);
         this.xspeed = 0 * cos(this.angle);
         this.yspeed = 0 * sin(this.angle);
     }   
      
  }
  
}

