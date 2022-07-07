class Bin {

  constructor(x, y, width,height) {
    let options = {
      isStatic: true,
      restitution: 0,
      friction: 1,
      density: 0.1
    }
    this.body = Bodies.rectangle(x,y,width,height,options);
    this.w = width;
    this.h =height;
    World.add(world, this.body );
  }
  display() {
    rectMode(CENTER);
    fill(255);
    rect(this.body.position.x, this.body.position.y, this.w, this.h);

  }
}


