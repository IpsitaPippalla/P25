
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var dustbinimage

function preload()
{
dustbinimage = loadImage("dustbingreen.png")	
paper = loadImage("paper.png")
}

function setup() {
	createCanvas(2000, 500);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	
	dustbin = new Dustbin(850,300);
	
	paper = new Paper(200,200,40)

	ground = new Ground(1000,height,2000,20);

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);



  paper.display();
  
  ground.display();
  dustbin.display();
  
  
 
}

function keyPressed(){
if(keyCode === UP_ARROW){
	Matter.Body.applyForce (paper.body,paper.body.position,{x:285,y:-285})
}
}



