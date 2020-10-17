 var score = 0;
var survivalTime = 0    
var background1, backgroundImage
var PLAY = 1;
var END = 0;
var gameState = PLAY;

var ground

var rock, rockImage;
var monkey,monkeyImage, mooo




var fruit, fruitImage
var fruitGroup;
var rockGroup;

function preload(){
  monkeyImage = loadAnimation("Monkey_01.png","Monkey_02.png", "Monkey_03.png", "Monkey_04.png", "Monkey_05.png", "Monkey_06.png", "Monkey_07.png", "Monkey_08.png", "Monkey_09.png", "Monkey_10.png" )
  fruitImage = loadImage("banana.png")
  backgroundImage = loadImage("jungle.jpg")
  moo = loadAnimation("Monkey_01.png ")
  
    rockImage = loadImage("stone.png")

}

function setup() {
  createCanvas(600, 200);    
  
  
  background1 = createSprite( 300, 100, 600, 200 )
  background1.addImage("jungle", backgroundImage)
       
   
 
  
   
  monkey = createSprite(50, 100, 20, 20)
  monkey.addAnimation("animation",monkeyImage)
    monkey.addAnimation("moo",moo)

  monkey.scale = 0.1
    monkey.setCollider("rectangle", 10, 10, 500, 500);

  
  fruitGroup = createGroup();
  rockGroup = createGroup();
  
  
  ground = createSprite(200, 180, 800, 10)
  
  
}

function draw() {
  background("white");
   
  if (gameState === PLAY){
    if(monkey.isTouching(fruitGroup)){
    fruitGroup.destroyEach();
    score = score+1
  }
  
  if(keyDown("space")                 && monkey.y >= 140){
      monkey.velocityY = -15 ;
      
    }
 
    if(monkey.isTouching(rockGroup)){
      gameState = END
    }
  monkey.velocityY = monkey.velocityY + 0.8
  monkey.collide(ground)
    spawnRocks();
    spawnFruits();
  }
  else if(gameState === END) {
           //set velcity of each game object to 0
    
    monkey.velocityY = 0;
    fruitGroup.setVelocityXEach(0);
    rockGroup.setVelocityXEach(0);
    monkey.changeAnimation("moo",moo)
    
    //change the trex animation
    
    
    //set lifetime of the game objects so that they are never destroyed
    fruitGroup.setLifetimeEach(-1);
    rockGroup.setLifetimeEach(-1)
    reset();
  
     
   
    
    //change the trex animation
   
    
   
    
    
  }
  
  //console.log(trex.y);
  
  //stop trex from falling down
 
  drawSprites();
stroke("White");
   textSize(20);
   fill("White");
    survivaltime = Math.round(frameCount/4);
    text("Survival Time : " + survivaltime, 100, 50)
  text("Score: "+ score, 500,50);
}

function reset(){
  
  
  
 
  
  score = 0;
  
}



function spawnRocks() {
  if(frameCount % 160 === 0) {
    var rock = createSprite(600,165,10,40);
    rock.velocityX = -4;
    
    //generate random obstacles
    var rand = Math.round(random(1,6));
    
    rock.addImage("stone",rockImage)
    rock.scale = 0.15
    //assign scale and lifetime to the obstacle           
    rock.scale = 0.175;
    rock.lifetime = 300;
    //add each obstacle to the group
    rockGroup.add(rock)
  }
}

function spawnFruits() {
  if(frameCount % 160 === 0) {
     fruit = createSprite(600,100,10,40);
    fruit.velocityX = -4;
    fruit.lifetime = 300;
    fruit.scale = 0.5;
    //generate random obstacles
    var rand = Math.round(random(1,6));
    //fruitGroup.add(fruit)
    
    
    fruitGroup.add(fruit)
    fruit.addImage("fruit",fruitImage);
    fruit.scale = 0.05
              
    
   
    
  }
}