var walk1, walk2, walk3, walk4, walk5, walk6, walk7, walk8;
var light1, light2, light3, light4, thunder;
var engine,world;
var drops=[];
var maxDrops = 100;
var rand=Math.round(1,4);

const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

function preload(){
    walk1=loadImage("walking_1.png");
    walk2=loadImage("walking_2.png");
    walk3=loadImage("walking_3.png");
    walk4=loadImage("walking_4.png");
    walk5=loadImage("walking_5.png");
    walk6=loadImage("walking_6.png");
    walk7=loadImage("walking_7.png");
    walk8=loadImage("walking_8.png");
    
    light1=loadImage("1.png");
    light2=loadImage("2.png");
    light3=loadImage("3.png");
    light4=loadImage("4.png");

    


}

function setup(){
    engine = Engine.create();
	world = engine.world;
    createCanvas(800, 700);
    umbrella = new Umbrella(400,500,120);
    
    

    for(var i=0;i<maxDrops;i++){
        drops.push(new Drops(random(0,700),random(0,600),5))
    }

    Engine.run(engine);
    
}

function draw(){
    background("grey")
    umbrella.display();
    
    
    for(var i=0;i<maxDrops;i++){
        drops[i].display();
        drops[i].update();
    }

    
    switch(rand){
        case 1:
        thunder.addImage("light1",light1);
        break;
        case 2:
        thunder.addImage("light2",light2);
        break;
        case 3:
        thunder.addImage("light3",light3);
        break;
        case 4:
        thunder.addImage("light4",light4);
        break;
    }

    thunder.display();
}   

