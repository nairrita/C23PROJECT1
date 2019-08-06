const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
var box1;
var engine,world;
var boxes = [];
var ground;


function setup(){
    var canvas = createCanvas(600,400);
    engine = Engine.create();
    world = engine.world;
    
    box1 = new Box(200,100,50,50);
    ground = new Ground(300,390,600,50);
 
}

function mousePressed(){
boxes.push(new Box(mouseX,mouseY,50,50));
}
function draw(){
    background(0);
    Engine.update(engine);

    for (var i=0;i<boxes.length;i++){
        boxes[i].display();
    }

    ground.display();
    
    }
    
   
    



