
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var roof, ball1, ball2, ball3, ball4, ball5, rope1, rope2, rope3, rope4, rope5;
function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.

	roof = new Roof(450,100,30,300);

	ball1 = new Ball(350,400,50);
	ball2 = new Ball(400,400,50)
	ball3 = new Ball(450,400,50);
	ball4 = new Ball(500,400,50);
	ball5 = new Ball(550,400,50);

	rope1 = new Rope(ball1.body,{x:350, y:100});
	rope2 = new Rope(ball2.body,{x:400, y:100});
	rope3 = new Rope(ball3.body,{x:450, y:100});
	rope4 = new Rope(ball4.body,{x:500, y:100});
	rope5 = new Rope(ball5.body,{x:550, y:100});

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background("blue");

  roof.display();

  ball1.display();
  ball2.display();
  ball3.display();
  ball4.display();
  ball5.display();

  rope1.display();
  rope2.display();
  rope3.display();
  rope4.display();
  rope5.display();

  
  drawSprites();
 
}

function keyPressed() {
	if(keyCode === UP_ARROW) {
		Matter.Body.applyForce(ball1.body,ball1.body.position,{x:-30, y:155})
	}
}



