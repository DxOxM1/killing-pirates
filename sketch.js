const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;

function preload(){
    TheOldDays = loadImage("background.gif")
}

function setup(){
    var canvas = createCanvas(1200,600);
    engine = Engine.create();
    world = engine.world;
    
    tower=new Tower(150,350,160,310)
    cannon = new Cannon(180,110,110,50,-PI/4)
}

function draw(){
    background(0);
    Engine.update(engine);
    image(TheOldDays,0,0,1200,600)
    tower.display()
    cannon.display()
}
