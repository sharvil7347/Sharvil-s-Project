var street, streetImage;
var waterImage;
var garbage1Image,garbage2Image;
var PLAY=1;
var gameState = PLAY;
var runner,runnerImage;

function preload(){
  streetImage = loadImage("Road.png");
  runnerImage = loadAnimation("runner1.png","runner2.png");
  waterImage = loadImage("Water.png");
  garbage1Image = loadImage("Can.png");
  garbage2Image = loadImage("banana.png");
}

function setup() {
  createCanvas(windowWidth,windowHeight);
  street=createSprite(width/2,height,width,2);
  street.addImage(streetImage);
  street.velocityY=1;
  
  runner=createSprite(width/2,height-70,50,20);
  runner.addAnimation("running",runnerImage);
  runner.scale=0.10;

  GarbageGroup = createGroup();
  WaterbottleGroup = createGroup();
}

function draw() {
  background(0);
  runner.x = World.mouseX;
  if(street.y > 400){
    street.y = 300
  }
  spawnObstacles();
  drawSprites();
}

function spawnObstacles(){
  if (frameCount % 120 === 0){
    var obstacle = createSprite(Math.round(random(600,10),10,40));
    
     //generate random obstacles
     var rand = Math.round(random(1,2));
     switch(rand) {
       case 1: obstacle.addImage(garbage1Image);
               break;
       case 2: obstacle.addImage(garbage2Image);
               break;
       default: break;
     }
    
     //assign scale and lifetime to the obstacle           
     obstacle.scale = 0.010;
     obstacle.lifetime = 300;
    
    //add each obstacle to the group
     GarbageGroup.add(obstacle);
  }
 }