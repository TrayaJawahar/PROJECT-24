class Paper {
  constructor(x, y, radius) {
    var options = {
      isStatic:false,
        'restitution':0.3,
        'friction':0.5,
        'density':1.2
    }
    this.body = Bodies.circle(x, y,20, options);
  
    World.add(world, this.body);
  }
  display(){
    var pos =this.body.position;
    push();
    translate(pos.x, pos.y);
    rectMode(CENTER);
    stroke ("blue");
    strokeWeight(5);
    fill("pink");
    ellipse(0, 0, this.width, this.height);
    pop();
  }
};
