class Sand {
    constructor(x, y) {
      var options = {
          'restitution':1,
          'friction':1,
          'density':1
      }
      this.body = Bodies.circle(x, y, 5, options);
      this.radius = 5;
      
      World.add(world, this.body);
    }
    display(){
      var pos =this.body.position;
      var angle = this.body.angle;
      push();
      translate(pos.x, pos.y);
      rotate(angle);
      ellipseMode(RADIUS);
     
      ellipse(0, 0, 5);
      pop();
    }
  };