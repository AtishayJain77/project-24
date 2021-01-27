
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var plane;
var hammer;
var stone;
var ball;
var iron;
var sand1, sand2,sand3,sand4,sand5,sand6;
function preload()
{
	
}

function setup() {
	createCanvas(1200, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.

	plane = new Plane(600,690,1200,20);
	hammer = new Hammer(300,300,30,50);
	stone = new Stone(400,400,30,30);
	ball  = new RubberBall(300,400,);
	iron = new Iron(122,342,12,21);
	sand1 = new Sand(300,100,5);
	sand2 = new Sand(320,100,5);
	sand3 = new Sand(440,100,5);
	sand4 = new Sand(560,100,5);
	sand5 = new Sand(280,100,5);
	sand6 = new Sand(200,100,5);



	Engine.run(engine);
  
}


function draw() {

  rectMode(CENTER);
  background(rgb(23,223,211));

  plane.display();
  hammer.display();
  stone.display();
  ball.display();
  iron.display()
  sand1.display();
  sand2.display();
  sand3.display();
  sand4.display();
  sand5.display();
  sand6.display();

  drawSprites();
 
}



