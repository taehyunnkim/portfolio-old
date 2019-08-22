function snake() {
    this.xSpeed = 0; 
    this.ySpeed = 0;
    this.posX = [];
    this.posY = [];
    this.tail = 0;
    this.totalBodies = 1;
    this.index;
   
    for(var i = 0; i < cols; i++) {
          for(var j = 0; j < rows; j++) {
              var x = i * s;
              var y = j * s;

              this.posX[i] = x;
              this.posY[j] = y;
              
        }
    }
    
    this.position = [];
    this.x = 20;
    this.y = 20;
    
    
    
    this.drawPlayer = function() {
              stroke(255);
              fill(51);
        
            for(var i = 0; i < this.totalBodies; i++) {
                rect(this.posX[this.position[i].x], this.posY[this.position[i].y], s, s);
            }
                  
    }
    
    this.update = function() { 
        
        if(this.totalBodies == this.position.length) {
            for(var i = 0; i < this.position.length-1; i++) {
                this.position[i] = this.position[i+1];
        }
    }
        this.position[this.totalBodies-1] = createVector(this.x, this.y);  
        
            this.x += this.xSpeed;
            this.y += this.ySpeed;  
    }
    
    this.dir = function (x,y) {
        this.xSpeed = x; 
        this.ySpeed = y;
    }
    
    this.addTail = function() {
            this.tail++;
            this.totalBodies++;
            //print(this.position);
    }
  
  
}