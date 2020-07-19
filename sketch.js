const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var ground;

var particles=[]
var plinko=[]
var division=[]
var divisionHeight=300;

function setup() {
  createCanvas(480,800);

  engine=Engine.create();
  world = engine.world;
  
ground = new Ground(240,800,480,25);
for(var k = 0; k<=width; k=k+80){

  division.push(new Divisions(k,height,divisionHeight/2,10,divisionHeight));
  
  }
}




function draw() {
  
  background(0);  
  Engine.update(engine);
//ground.display();
for (var k = 0; k < division.length; k++) {
     
  division[k].display();
}



}