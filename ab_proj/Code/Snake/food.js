function food() {
    this.posX = [];
    this.posY = [];
   
    for(var i = 0; i < cols; i++) {
          for(var j = 0; j < rows; j++) {
              var x = i * s;
              var y = j * s;

              this.posX[i] = x;
              this.posY[j] = y;
          }
    }
    
    this.x = int(random(0,39));
    this.y = int(random(0,39));    
    
    this.drawFood = function() {
              stroke('red');
              fill(51);
              rect(this.posX[this.x],this.posY[this.y],s,s);
    }
    
    this.addFood = function() {
           this.x = int(random(0,39));
           this.y = int(random(0,39));
    }
    
}
    
