
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var ball;

function preload()
{
	
}

function setup() {
	createCanvas(1920, 880);


	engine = Engine.create();
	world = engine.world;

	var ball_options={
		restitution: 0.3,
		friction: 0,
		density:1.2
	}

	//Create the Bodies Here.
	ball = Bodies.circle(200,100,10,ball_options)
	World.add(world,ball)

	groundObj = new Ground (width/2,670,width,20);
	leftSide = new Ground (1100,600,20,120);

	Engine.run(engine);
  

}


function draw() {
  rectMode(CENTER);
  background(0);
  
  drawSprites();
  display()
}


function keyPressed(){
	if (keycode === UP_ARROW){
		
	}
}
