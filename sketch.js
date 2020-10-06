const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var block,block1,block2,block3,block4,block5,block6,block7,block8,block9;
var stone;
var stick;
var base;



function setup() {
  createCanvas(800,400);
  createSprite(400, 200, 50, 50);

  engine = Engine.create();
  world = engine.world;

  
  ground = new Ground(600,height,1200,20)

  platform = new Ground(150,305,300,170)

  block = new Block(700,320,70,70)
  block1 = new Block(720,320,70,70)
  block2 = new Block(740,320,70,70)
  block3 = new Block(760,320,70,70)
  block4 = new Block(780,320,70,70)
  block5 = new Block(800,320,70,70)
  block6 = new Block(710,340,70,70)
  block7 = new Block(730,340,70,70)
  block8 = new Block(750,340,70,70)
  block9 = new Block(770,340,70,70)
 
  stick = new Stick(700,317,70,5)

  stone = new Stone(500,300,40,40)

}








function draw() {
  background(255,255,255);  
  drawSprites();
}