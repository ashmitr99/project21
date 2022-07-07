class Ball
{
  constructor(x, y,radius) {
    let options = {
      isStatic: false,
      restitution: 0.3,
      friction: 0.5,
      density: 1.2
    }
    this.body = Bodies.circle(x,y,radius,options);
    this.r = radius;
    World.add(world, this.body );
  }
  display() {
   ellipseMode(RADIUS);
    fill(255);
    circle(this.body.position.x,this.body.position.y,this.r);

  }
}


