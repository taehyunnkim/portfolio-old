function drop {
  var x;
  var y;
  var yspeed;
  var wlen;
  var hlen;
  var back;
  var str;
  var len;
  var total = 0;

  this.drop = function(var xpos, var ypos, var ys, var s, var h) {
    this.x = xpos;
    this.y = ypos;
    this.str = s;
    this.hlen = h;
    this.wlen = h;
    this.yspeed = ys;
    this.len = h;

    fill(this.s, this.s, this.s, 200);
    stroke(this.s);
  }

  this.drawRain = function() {
    ellipse(this.x, this.y, this.wlen, this.hlen);
  }

  this.rainFall = function() {
    this.y += this.yspeed;
  }

  this.checkEdge = function() {

    if (this.y > height) {
      this.yspeed = 0; 
      this.hlen -= random(0, 0.1);
    }
  }

  this.resetPos = function(var ran) {

    this.back = ran;

    if (this.hlen < 0.5) {
      this.hlen = this.len;
      this.y = this.back;
      this.yspeed = random(2, 2.5);
    }
  }
}