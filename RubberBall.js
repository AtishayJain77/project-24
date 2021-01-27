class RubberBall {
    constructor(x, y) {
      var options = {
          'restitution':0.4,
          'friction':1,
          'density':1
      }
      this.body = Bodies.circle(x, y, 20, options);
     
      
      World.add(world, this.body);
    }
    display(){
      var pos =this.body.position;
      var angle = this.body.angle;
      push();
      translate(pos.x, pos.y);
      rotate(angle);
      ellipseMode(RADIUS);
      fill(255);
      strokeWeight(3);
      stroke("green");
      ellipse(0, 0, 20);
      pop();
    }
  };