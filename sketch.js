const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;

var ground;
var box1;
var stand1;
var object, slingshot;

function setup() {
  createCanvas(1095,450);
 engine = Engine.create();
 world = engine.world;

 ground = new Ground();

  box1 = new Box(700, 220, 50, 50);
  box2 = new Box(730, 220, 50, 50);
  box3 = new Box(670, 220, 50, 50);
  box4 = new Box(700, 160, 50, 50);

  box5 = new Box(500, 345, 50, 50);
  box6 = new Box(530, 345, 50, 50);
  box7 = new Box(470, 345, 50, 50);
  box8 = new Box(500, 285, 50, 50);

  box9  = new Box( 900, 100, 50, 50);
  box10 = new Box( 930, 100, 50, 50);
  box11 = new Box( 870, 100, 50, 50);
  box12 = new Box(900,40,50, 50);

  box13 = new Box(900,365, 50, 50);
  box14 = new Box(930,365, 50, 50);
  box15 = new Box(870,365, 50, 50);
  box16 = new Box(900,285, 50, 50);

  box17 = new Box( 500, 100, 50, 50);
  box18 = new Box( 530, 100, 50, 50);
  box19 = new Box( 470, 100, 50, 50);
  box20 = new Box(500,40,50, 50);
  
  stand1 = new Stand(700, 250,100);
  stand2 = new Stand(500,400,100);
  stand3 = new Stand(500,150,100);
  stand4 = new Stand(900,150,100);
  stand5 = new Stand(900,400,100);
  
  object = new Ball(100,100);
 slingshot = new Launcher(object.body,{x : 150, y :225});

}

function draw() {
  background(0);  
  Engine.update(engine);
  
  ground.display();

  box1.display();
  box2.display();
  box3.display();
  box4.display();

  box5.display();
  box6.display();
  box7.display();
  box8.display();

  box9.display();
  box10.display();
  box11.display();
  box12.display();

  box13.display();
  box14.display();
  box15.display();
  box16.display();

  box17.display();
  box18.display();
  box19.display();
  box20.display();

  stand1.display();
  stand2.display();
  stand3.display();
  stand4.display();
  stand5.display();

 object.display();
  slingshot.display();

}
function mouseDragged(){
  Matter.Body.setPosition(object.body,{x: mouseX, y: mouseY});
}

function mouseReleased(){
  slingshot.fly();
}

function keyPressed(){
  if(keyCode === 32){
     slingshot.attach(object.body);
     Matter.Body.setPosition(object.body,{x: 100, y:225});
  }
}