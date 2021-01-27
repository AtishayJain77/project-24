class Hammer {
    //since the width and the height of the bird are constant, we dont 
    // want the user to enter it, constructor has only x and y values
    // but they have to be include when you create the body
    /* */
    constructor(x, y, width, height) {
      var options = {
          'restitution':2,
          'friction':1,
          'density':0.5
      }
      this.body = Bodies.rectangle(x,y, this.width,this.height, options);
      this.width = width;
      this.height = height;
      
      World.add(world, this.body);
    }
    display(){
      var pos =this.body.position;
      pos.x = mouseX;
      pos.y = mouseY;
      var angle = this.body.angle;
      push();
      translate(pos.x, pos.y);
      rotate(angle);
      rectMode(CENTER);
      fill("red");
      strokeWeight(2 );
      stroke("green");
      rect(0, 0, this.width, this.height);
      pop();
    }
  };