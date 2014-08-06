

(function(root){
  
  var Asteroids = root.Asteroids = (root.Asteroids || {});
  
  var MovingObject = Asteroids.MovingObject = function(pos, vel, radius, color){
    this.pos = pos;
    this.vel = vel;
    this.radius = radius;
    this.color = color;

    var img = new Image();
    img.src = 'shipImage.gif';
    this.img = img; 
  };
  
  MovingObject.prototype.draw = function(ctx) {
    ctx.fillStyle = this.color;
    ctx.beginPath();

    ctx.arc(
      this.pos[0],
      this.pos[1],
      this.radius,
      0,
      2 * Math.PI,
      false
    );
    
    ctx.fill();
  };
  
  MovingObject.prototype.isCollidedWith = function(obj) {
    return this.distance(obj) < (this.radius + obj.radius);
  };

  MovingObject.prototype.distance = function(obj) {
    var deltaX = this.pos[0] - obj.pos[0];
    var deltaY = this.pos[1] - obj.pos[1];
    return Math.sqrt(Math.pow(deltaX, 2) + Math.pow(deltaY, 2));
  };
  
  MovingObject.prototype.move = function (maxX, maxY) {
    this.pos[0] += this.vel[0];
    this.pos[1] += this.vel[1];
    this.pos[0] = (this.pos[0] < 0 ? maxX : this.pos[0] % maxX);
    this.pos[1] = (this.pos[1] < 0 ? maxY : this.pos[1] % maxY);
  };

  MovingObject.prototype.drawImg = function(ctx, options) {
    var imageWidth = options.imageWidth, 
        imageHeight = options.imageHeight,
        stretchX = options.stretchX || options.imageWidth, 
        stretchY = options.stretchY || options.imageHeight;

    var xCenter = this.pos[0] - (stretchX / 2);
    var yCenter = this.pos[1] - (stretchY / 2); 
    ctx.translate(this.pos[0], this.pos[1]);
    ctx.rotate(Math.PI * this.rotation / 180);
    ctx.translate(this.pos[0] * -1, this.pos[1] * -1);

    ctx.drawImage(
      this.img, 
      this.xImg, this.yImg, // x and y coords of top left corner of source image
      imageWidth, imageHeight, // number of pixels to take from source
      xCenter, yCenter, // position to place the image on the canvas
      stretchX, stretchY // number of pixels to take on canvas- will stretch image if larger than
                         // imageWidth and imageHeight 
    );

    ctx.translate(this.pos[0], this.pos[1]);
    ctx.rotate(Math.PI * this.rotation * -1 / 180);
    ctx.translate(this.pos[0] * -1, this.pos[1] * -1);
  }; 
  
})(this);