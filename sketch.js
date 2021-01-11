const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint=Matter.Constraint;

var canvas;
var canvasmouse;

function setup() {
 createCanvas(windowWidth/2 , windowHeight/1.5);
 engine = Engine.create();
 world = engine.world;

  
  roof=new Roof(450,100,500,40);
  roof=new Roof(400,100,500,40);
	bob1=new Bob(300,305,25);
	bob2=new Bob(350,305,25);
	bob3=new Bob(400,305,25);
	bob4=new Bob(450,305,25);
  bob5=new Bob(500,305,25);
  rope1=new Sling(bob1.body,);
	rope2=new Sling(bob2.body,150);
	rope3=new Sling(bob3.body,250);
	rope4=new Sling(bob4.body,350);
	rope5=new Sling(bob5.body,450);

  Engine.run(engine);
}

function draw() {
  background(0);  
  roof.display();
  rope1.display();
  rope2.display();
  rope3.display();
  rope4.display();
  rope5.display();
  bob1.display();
  bob2.display();
  bob3.display();
  bob4.display();
  bob5.display();
}

function mouseDragged() 
{ 
		 Matter.Body.setPosition(bob1.body,{x:mouseX,y:mouseY});
} 