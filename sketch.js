
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);
	var ball_options= {
		density: 1.2,
		isStatic: false,
		restitution: 0.3,
		friction: 0,

	}

	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	ball = new Ball(100,200,10);
	ground = new Ground(400,680,800,20);
	leftSide = new Bin(550, 620, 20, 100);
	rightSide = new Bin(670, 620, 20, 100);
	Engine.run(engine);

}


function draw() {
  rectMode(CENTER);
  background(0);
  Engine.update(engine);
  ball.display();
  ground.display();
  leftSide.display();
  rightSide.display();
  

  
  drawSprites();
}
function keyPressed() {
	if (keyCode === UP_ARROW) {
		Matter.Body.applyForce(ball.body, ball.body.position, {x:15, y:-15});
	}
  }


