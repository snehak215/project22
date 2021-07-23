const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var roof;

var rope1;
var rope2;
var rope3;
var rope4;
var rope5;

var bob1;
var bob2;
var bob3;
var bob4;
var bob5;

function setup() {
	createCanvas(800, 600);
	rectMode(CENTER);
	ellipseMode(RADIUS);

	engine = Engine.create();
	world = engine.world;

	var roof_options={
		isStatic:true			
	}

	roof = Bodies.rectangle(400,100,230,20,roof_options);
    World.add(world,roof);

	var bob_options={
		density:0.9,
		friction:0,
		isStatic:false,
		restitution:1.3
	}

	bob1=Bodies.circle(288,210,28.75,bob_options);
	rope1= new rope(bob1,roof,-115,0,0,0);

	bob2=Bodies.circle(345.5,210,28.75,bob_options);
	rope2= new rope(bob2,roof,-57.5,0,0,0);

	bob3=Bodies.circle(403,210,28.75,bob_options);
	rope3= new rope(bob3,roof,0,0,0,0);

	bob4=Bodies.circle(460.5,210,28.75,bob_options);
	rope4= new rope(bob4,roof,57.5,0,0,0);

	bob5=Bodies.circle(518,210,28.75,bob_options);
	rope5= new rope(bob5,roof,115,0,0,0);

	World.add(world,rope1);
	World.add(world,rope2);
	World.add(world,rope3);
	World.add(world,rope4);
	World.add(world,rope5);

	World.add(world,bob1);
	World.add(world,bob2);
	World.add(world,bob3);
	World.add(world,bob4);
	World.add(world,bob5);

	Engine.run(engine);
	
  
}

function draw() {
  rectMode(CENTER);
  ellipseMode(RADIUS);

  background("#99004d");
  Engine.update(engine);

  rect(roof.position.x,roof.position.y,230,20);

  ellipse(bob1.position.x,bob1.position.y,28.75);
  ellipse(bob2.position.x,bob2.position.y,28.75);
  ellipse(bob3.position.x,bob3.position.y,28.75);
  ellipse(bob4.position.x,bob4.position.y,28.75);
  ellipse(bob5.position.x,bob5.position.y,28.75);

  rope1.display();
  rope2.display();
  rope3.display();
  rope4.display();
  rope5.display();
 
}

function keyPressed(){
	if(keyCode==LEFT_ARROW){
		Matter.Body.applyForce(bob1,{x:0,y:0},{x:-50,y:50});
	}
}