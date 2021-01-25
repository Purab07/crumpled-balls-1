
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var paperball;
function preload(){
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	paperball = new Paperball(100,100,50);

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  
  paperball.display();
  drawSprites();
 
}



