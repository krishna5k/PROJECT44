const Engine = Matter.Engine
const World = Matter.World
const Bodies = Matter.Bodies
var backgroundImg

function preload (){
backgroundImg= loadImage("background.png.jpg")

}


function setup() {
  createCanvas(1200,400);
  engine = Engine.create();
  world = engine.world;
  
ground1 = new Ground(600,380,1200,20)
truck = new Truck(400,200,1200,20)
strawberry1 = new Strawberry (400,200,80,80)
orange1 = new Orange(300,200,80,80)
}

function draw() {
  background(backgroundImg);  
  Engine.update(engine);
  ground1.display();
truck.display();
strawberry1.display();
orange1.display();
}

