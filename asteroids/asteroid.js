(function(root){
  
  var Asteroids = root.Asteroids = (root.Asteroids || {});
  
  
  var Asteroid = Asteroids.Asteroid = function(pos, vel, radius, color) {
    this.radius = 40;
    this.imageHeight = 40;
    this.rotation = 0;
    this.rotateSpeed = Math.random() * 3 - 1.5;

    this.xImg = 0;
    this.yImg = 240;
    Asteroids.MovingObject.call(this, pos, vel, this.radius, '#339900');
  };
  
  Asteroid.inherits(Asteroids.MovingObject);

  Asteroid.prototype.move = function(dimX, dimY) {
    Asteroids.MovingObject.prototype.move.call(this, dimX, dimY);
    this.rotation += this.rotateSpeed;
  };

  Asteroid.prototype.draw = function(ctx) {
    this.drawImg(ctx, {
      imageWidth: 55,
      imageHeight: 55,
      stretchX: this.radius * 2,
      stretchY: this.radius * 2
    })
  };

  Asteroid.prototype.randomAsteroid = function (dimX, dimY) {
    var x = Math.floor(Math.random() * dimX);
    var y = Math.floor(Math.random() * dimY);
    var SPEED_MODIFIER = 40;
    var modX = (dimX / SPEED_MODIFIER);
    var modY = (dimY / SPEED_MODIFIER);
    var velX = Math.floor((Math.random() - 0.5) * modX);
    var velY = Math.floor((Math.random() - 0.5) * modY);
    var that = this;
    return new Asteroid([x, y], [velX, velY]);
  };
  
})(this);