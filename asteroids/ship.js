(function(root){
  
  var Asteroids = root.Asteroids = (root.Asteroids || {});
  
  var Ship = Asteroids.Ship = function(pos, vel) {
    Asteroids.MovingObject.call(this, pos, vel, 30, '#FF00FF');
    this.rotation = 0;

    this.xImg = 40;
    this.yImg = 0;
    this.imageHeight = 40;
    this.imageWidth = 39
  };

  Ship.MAX_SPEED = 12;
  
  Ship.inherits(Asteroids.MovingObject);

  Ship.turnSpeed = 10
  
  var headingVec = function(rotation){
    var x = Math.cos((rotation - 90)/180 * Math.PI);
    var y = Math.sin((rotation - 90)/180 * Math.PI);
    return [x,y];
  }
  
  Ship.prototype.turnLeft = function() {
    this.xImg = 0;
    this.imageWidth = 39
    this.rotation -= Ship.turnSpeed;
  }

  Ship.prototype.turnRight = function() {
    this.xImg = 80;
    this.imageWidth = 35;
    this.rotation += Ship.turnSpeed;
  }

  Ship.prototype.forwardImage = function() {
    this.xImg = 40;
    this.imageWidth = 39
  }
  
  Ship.prototype.power = function(impulse) {
    this.yImg = 40;
    this.imageHeight = 45;
    var headingV = headingVec(impulse);
    this.vel[0] += headingV[0];
    this.vel[1] += headingV[1]; 
    if (this.vel[0] > Ship.MAX_SPEED) {
      this.vel[0] = Ship.MAX_SPEED;
    }
    if (this.vel[1] > Ship.MAX_SPEED) {
      this.vel[1] = Ship.MAX_SPEED;
    }
    if (this.vel[0] < Ship.MAX_SPEED * -1) {
      this.vel[0] = Ship.MAX_SPEED * -1;
    }
    if (this.vel[1] < Ship.MAX_SPEED * -1) {
      this.vel[1] = Ship.MAX_SPEED * -1;
    }
  };

  Ship.prototype.move = function(dimX, dimY) {
    Asteroids.MovingObject.prototype.move.call(this, dimX, dimY);
    this.slowDown();
  }

  Ship.prototype.draw = function(ctx) {
    this.drawImg(ctx, {
      imageWidth: this.imageWidth,
      imageHeight: this.imageHeight,
      stretchX: 60,
      stretchY: 60
    })
  };

  Ship.prototype.slowDown = function() {
    if (Math.abs(this.vel[0]) < 0.2 && Math.abs(this.vel[1]) < 0.2) {
      this.vel = [0, 0];
    } else {
      this.vel = [this.vel[0] * 0.99, this.vel[1] * 0.99];
    }
  }
  
  Ship.prototype.fireBullet = function() {
    var bulletSpeed = 8;
    var bulletVel = [headingVec(this.rotation)[0]*bulletSpeed + this.vel[0],
                     headingVec(this.rotation)[1]*bulletSpeed + this.vel[1]];
    var bulletPos = [this.pos[0], this.pos[1]];
    return new Asteroids.Bullet(bulletPos, bulletVel, this.rotation);
  };
  
})(this);