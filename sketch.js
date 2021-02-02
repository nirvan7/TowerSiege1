const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var block1,block2,block3,block4,block5,block6,block7,block8,block9,block10,block11;
var block12,block13,block14,block15,block16,block17,block18,block19,block20,block21;
var block22,block23,block24,block25;
var ground,polygon,slingshot;
var stand1,stand2;
var engine,world;

function preload(){
}

function setup(){
    var canvas = createCanvas(1000,600);
    engine = Engine.create();
    world = engine.world;

   ground= new Ground(600,600,1200,20);
   stand1= new Ground(375,450,280,10);
   stand2= new Ground(770,300,245,10);
   polygon= new Polygon(50,200,20);
   block1= new Block(285,425,30,40,"pink");
   block2= new Block(315,425,30,40,"pink");
   block3= new Block(345,425,30,40,"pink");
   block4= new Block(375,425,30,40,"pink");
   block5= new Block(405,425,30,40,"pink");
   block6= new Block(435,425,30,40,"pink");
   block7= new Block(465,425,30,40,"pink");
   block8= new Block(315,385,30,40,"blue");
   block9= new Block(345,385,30,40,"blue");
   block10= new Block(375,385,30,40,"blue");
   block11= new Block(405,385,30,40,"blue");
   block12= new Block(435,385,30,40,"blue");
   block13= new Block(345,345,30,40,"pink");
   block14= new Block(375,345,30,40,"pink");
   block15= new Block(405,345,30,40,"pink");
   block16= new Block(375,305,30,40,"blue");
   block17= new Block(710,275,30,40,"blue");
   block18= new Block(740,275,30,40,"blue");
   block19= new Block(770,275,30,40,"blue");
   block20= new Block(800,275,30,40,"blue");
   block21= new Block(830,275,30,40,"blue");
   block22= new Block(740,235,30,40,"pink");
   block23= new Block(770,235,30,40,"pink");
   block24= new Block(800,235,30,40,"pink");
   block25= new Block(770,195,30,40,"blue");
   
   slingshot= new Slingshot(polygon.body,{x:100,y:200})
   Engine.run(engine);

}

function draw(){
background("lightblue");
Engine.update(engine);
ground.display();
stand1.display();
stand2.display();
block1.display();
block2.display();
block3.display();
block4.display();
block5.display();
block6.display();
block7.display();
block8.display();
block9.display();
block10.display();
block11.display();
block12.display();
block13.display();
block14.display();
block15.display();
block16.display();
block17.display();
block18.display();
block19.display();
block20.display();
block21.display();
block22.display();
block23.display();
block24.display();
block25.display();
slingshot.display();
polygon.display();

fill("Blue");
textSize(25);
noStroke();
text("Drag The Hexagonal Stone And Launch It,To Release It Towards The Blocks!", 120, 30);


}

function mouseDragged() {
    Matter.Body.setPosition(polygon.body,{x:mouseX,y:mouseY})
	}
	
function mouseReleased(){
	slingshot.fly();	
}