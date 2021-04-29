const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var ground;
var particles=[];
var plinkos=[];
var division = [];
var divisionHeight = 300;

function setup(){
    var canvas = createCanvas(800,800);
    engine = Engine.create();
    world = engine.world;

    ground = new Ground(200,780,1200,20);

    for (var k =0; k<=width; k=k+80){
        division.push(new Division(k, height-divisionHeight/2, 10, divisionHeight));
    }

    for (var j = 75; j<=width; j=j+50){
        plinkos.push(new Plinko(j, 75));
    }
    for (var j = 50; j<=width; j=j+50){
        plinkos.push(new Plinko(j, 175));
    }

    for (var j = 75; j<=width; j=j+50){
        plinkos.push(new Plinko(j, 275));
    }

    for (var j = 75; j<=width-10; j=j+50){
        plinkos.push(new Plinko(j, 375));
    }

}

function draw(){
    background(0);
    Engine.update(engine);
    ground.display();
 
    for (var l =0; l < plinkos.length; l++){
        plinkos[l].display();
    }

    if(frameCount%60===0){
        particles.push(new Particle(random(width/2-30,width/2+30), 10, 10));
    }

    for (var m =0; m < particles.length; m++){
        particles[m].display();
    }

    for (var n =0; n < division.length; n++){
        division[n].display();
    }
   
}