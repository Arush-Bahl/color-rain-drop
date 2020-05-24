const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

var engine, world, drop;

var drops = [];

function setup() {

  createCanvas(800, 400);

  engine = Engine.create();
  world = engine.world;
  
  for(var i = 0; i < 100; i ++){

    drop = new Drop(random(1,100),0,10,20);

    drops.push(drop);

    if(drop.y > 400){

      drop.y = 0;

    }

  }

}

function draw() {

  background(0,0,0); 

  Engine.update(engine); 

  for(var r = 0; r < drops.length; r++){

    drops[r].display();

  }

}