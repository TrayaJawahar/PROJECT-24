
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var paper1;
var ground;
var wall1,wall2,wall3;
function preload()
{
	
}

function setup() {
	createCanvas(1600, 400);
	engine = Engine.create();
	world = engine.world;

  //Create the Bodies Here.
  ground = new Ground(0,390,5000,20);
    paper1= new Paper (200,200,5,5);

    wall1 = new Dustbin(1200,370,200,20);
  wall2 = new Dustbin(1100,330,20,100);
    wall3 = new Dustbin(1300,330,20,100);
	Engine.run(engine);
  
}


function draw() {
  
  rectMode(CENTER);
  background(0);
  ground.display();
  paper1.display();
  wall1.display();
  wall2.display();
  wall3.display();
  drawSprites();
 
}

function keyPressed(){
  if(keyCode === UP_ARROW){
    Matter.Body.applyForce(paper1.body,paper1.body.position,{x:85,y:-85});
  }
}


