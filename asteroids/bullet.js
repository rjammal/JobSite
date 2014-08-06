(function(root){
  
  var Asteroids = root.Asteroids = (root.Asteroids || {});  
  
  var Bullet = Asteroids.Bullet = function(pos, vel, rotation) {
    Asteroids.MovingObject.call(this, pos, vel, 8, '#FF00FF');
    this.rotation = rotation;
    this.lifespan = 40;


    this.xImg = 63; //55 for bullet1, 63 for bullet2
    this.yImg = 127;
  };
  
  Bullet.inherits(Asteroids.MovingObject);
  
  Bullet.prototype.move = function(x, y) {
    var bullet = this;
    Asteroids.MovingObject.prototype.move.call(bullet, x, y);
    this.lifespan -= 1;
    this.toggleImage();
  };

  Bullet.prototype.draw = function (ctx) {
    this.drawImg(ctx, {
      imageWidth: 6,
      imageHeight: 18,
      stretchX: this.radius * 2,
      stretchY: this.radius * 5
    });
  };

  Bullet.prototype.toggleImage = function () {
    // only change every 4 milliseconds
    var time = Date.now();
    if (time % 4 === 0) {
      return;
    }
    if (this.xImg === 63) {
      this.xImg = 55;
    } else {
      this.xImg = 63;
    }
  }
  
})(this);
  