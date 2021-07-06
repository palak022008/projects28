
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render = Matter.Render;
const Constraint = Matter.Constraint;

var paper1,launcher;
var dustbin1, dustbin2, dustbin3;
var ground1;
var dustbinobj, dustbinobjp;

function preload(){
  dustbinobjp = loadImage("dustbingreen.png");

}

function setup() {
	createCanvas(1500, 700);

	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
  paper1 = new Paper(50, height - 90, 50);

	// dustbin1 = new Dustbin(width/2+573, height-40, 200, 20);
  // dustbin2 = new Dustbin(width/2+473, height-150, 20, 200);
  // dustbin3 = new Dustbin(width/2+673, height-150, 20, 200);
  dustbinObj=new Dustbin(900,650);

  //ground1 = new Ground(width/2, 780, 1500, 20);
  ground1 = new Ground(width/2, 670, width, 20);
  Engine.run(engine);

  launcher= new Launcher(paper1.body,{x:200, y:400});

  // dustbinobj = createSprite(width/2+400, height-120, 100, 100);
  // dustbinobj.addImage("dustbin", dustbinobjp);
  // dustbinobj.scale = 0.8;
  // var render = Render.create({
	//   element: document.body,
	//   engine: engine,
	//   options: {
	//     width: 1500,
	//     height: 800,
	//     wireframes: false
	//   }
	// });


	// Render.run(render);
	
  
}

function draw() {
  rectMode(CENTER);
  background(180);
  
  ground1.display();
  dustbinObj.display();
  
  //dustbin1.display();
  //dustbin2.display();
  //dustbin3.display();
  paper1.display();
  launcher.display();
  //drawSprites();

}

function mouseDragged(){

  Matter.Body.setPosition(paper1.body,{x:mouseX,y:mouseY});

}

function mouseReleased(){

  launcher.fly();

}



