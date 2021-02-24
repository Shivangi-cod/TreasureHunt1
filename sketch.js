var monkey, monkey_running;
var bg, bgImg;
var ground;
var bananaImg, banana, bananaGrp;
var obstacleImg, obstacle, obstacleGrp;
var boy, boyImg;
var bullet, bulletImage;
var fireBall, fireBallImg;
var monster, monsterImg;
var score;
var bh2,bg3;
var gameState = "play";
var timer = 30;

function preload() {
  bgImg = loadImage("jungle.jpg");
  boyImg = loadAnimation("thief_01.png", "thief_02.png");
  monsterImg = loadImage("monster.png")
  bulletImage = loadImage("bullet.png")
  fireBallImg = loadImage("fireBall.png")
  gameOverImg = loadImage("gameOver.jpg")
  restartImg = loadImage("restart.png")
  bg2 = loadImage("background.jpg")
  boy2=loadImage("player.png")
  demonImg = loadImage("demon.png")
  bg3 = loadImage("green.jpg")
}





function setup() {
  createCanvas(600, 400);
  bg = createSprite(400, 200, 800, 400);
  bg.addImage(bgImg);
  bg.velocityX = -4;
  bg.scale = 1.5
  bg.x = bg.width / 2;

  boy = createSprite(100, 300, 50, 50);
  boy.addAnimation("running", boyImg)
  boy.scale = 0.5

  ground = createSprite(400, 370, 800, 10);
  ground.velocityX = -4;
  ground.x = ground.width / 2;
  ground.visible = false;

  gameOver = createSprite(300,200,50,50)
  gameOver.addImage(gameOverImg);
  

  restart = createSprite(560,360,50,50);
  restart.addImage(restartImg);
  restart.scale = 0.3;

  score = 0;

  boy.debug = true;
  boy.setCollider("rectangle",0,0,180,180)
  

  monstersGroup = createGroup();
  bulletGroup = createGroup();
  fireBallGroup = createGroup();
  demonsGroup = createGroup();

}

function draw() {
  background(0);

  

  if( gameState === "play"){

    if (bulletGroup.isTouching(monstersGroup)) {
      monstersGroup.destroyEach();
      bulletGroup.destroyEach();
      score = score + 5;
    }
    if (bulletGroup.isTouching(fireBallGroup)) {
      fireBallGroup.destroyEach();
      bulletGroup.destroyEach();
      score = score + 5;
    }

    if (bulletGroup.isTouching(demonsGroup)) {
      demonsGroup.destroyEach();
      bulletGroup.destroyEach();
      score = score + 10;
    }

    if (score >= 5) {
      createfire();
      monstersGroup.destroyEach();
    }

    if (score >= 10) {
      
      bg.addImage(bg2);
      bg.scale = 1;
      spawnDemons();
      fireBallGroup.destroyEach();
      monstersGroup.destroyEach();
     
    }

    
    if (score >= 20) {
     
      bg.addImage(bg3);
      boy.velocityX=0;
boy.velocityY=0; 
bg.velocityX = 0;


if(keyDown(UP_ARROW)) {
  boy.velocityX = 0;
  boy.velocityY = -7;
}
if(keyDown(DOWN_ARROW)) {
  boy.velocityX = 0;
  boy.velocityY = 7;
}
if(keyDown(RIGHT_ARROW)) {
  boy.velocityX =7;
  boy.velocityY = 0;
}
if(keyDown(LEFT_ARROW)) {
 boy.velocityX = -7;
  boy.velocityY = 0;
}
boy.scale = 0.2;
cb1 = createSprite(85, 100,190,20);
cb2 = createSprite(375, 345,50,20);
cb3 = createSprite(460, 370,20,90);
cb4 = createSprite(475, 335,50,20);
cb5 = createSprite(330, 105,20,70);  
cb6 = createSprite(500, 275,20,70); 
cb7 = createSprite(480, 230,100,20); 
cb8 = createSprite(460, 210,20,60);
cb9 = createSprite(500, 105,20,80);  
cb10 = createSprite(300, 280,100,20); 
cb11= createSprite(400, 55,20,100);  
cb12= createSprite(360, 375,20,50);  
cb13 = createSprite(250, 300,20,117); 
cb14 = createSprite(55, 300,100,20);
cb15 = createSprite(300, 150,100,20);
cb16 = createSprite(290, 200,20,100);
cb17 = createSprite(240, 240,110,20);
cb18 = createSprite(200, 348,100,20);
cb19 = createSprite(100,200,20,100);
cb20 = createSprite(170,150,20,80);
cb21 = createSprite(250, 4,20,100);
cb22 = createSprite(500, 10,20,50);  

boy.bounceOff(cb1);
boy.bounceOff(cb2);
boy.bounceOff(cb3);
boy.bounceOff(cb4);
boy.bounceOff(cb5);
boy.bounceOff(cb6);
boy.bounceOff(cb7);
boy.bounceOff(cb8);
boy.bounceOff(cb9);
boy.bounceOff(cb10);
boy.bounceOff(cb11);
boy.bounceOff(cb12);
boy.bounceOff(cb13);
boy.bounceOff(cb14);
boy.bounceOff(cb15);
boy.bounceOff(cb16);
boy.bounceOff(cb17);
boy.bounceOff(cb18);
boy.bounceOff(cb19);
boy.bounceOff(cb20);
boy.bounceOff(cb21);
boy.bounceOff(cb22);

      fireBallGroup.destroyEach();
      monstersGroup.destroyEach();
      demonsGroup.destroyEach();
      
    }
  
    boy.velocityY = boy.velocityY + 0.5;
    gameOver.visible= false;
    restart.visible = false;
    
  
    if (ground.x < 0) {
      ground.x = ground.width / 2;
    }
    if (bg.x < 200) {
      bg.x = bg.width / 2;
    }
    if (keyDown("space")) {
      createBullets();
  
  
    }
    if (keyDown("UP_ARROW") && boy.y >= 301.5) {
      boy.velocityY = -11
  
    }
  
    if (monstersGroup.isTouching(boy)) {
      boy.scale = 0.3;
    }
    if(fireBallGroup.isTouching(boy)){
      gameState = "end";
    }
    if(demonsGroup.isTouching(boy)){
      demonsGroup.destroyEach();
      gameState = "end";
    }
  
    
  
    spawnMonsters();

  }
  else{
    ground.velocityX = 0;
    bg.velocityX = 0;
    gameOver.visible= true;
    restart.visible = true;
    monstersGroup.setLifetimeEach(-1);
    fireBallGroup.setLifetimeEach(-1);
    fireBallGroup.setVelocityXEach(0);
     monstersGroup.setVelocityXEach(0);
        
     
     if(mousePressedOver(restart)) {
      reset();
    }
     
  }

  

  boy.collide(ground);

  drawSprites();
  stroke(10);
  fill("blue");
  textSize(25);

  text("Score: " + score, 450, 50);

}
function reset(){
  gameState = "play";
  gameOver.visible = false;
  restart.visible = false;
  score = 0;
  monstersGroup.destroyEach();
  fireBallGroup.destroyEach();


}


function spawnMonsters() {
  //write code here to spawn the monsters
  if (frameCount % 20 === 0) {
    var monster = createSprite(800, 320, 40, 10);
    monster.y = Math.round(random(250, 350));
    monster.addImage(monsterImg);
    monster.scale = 0.5;
    monster.velocityX = -3;

    //assign lifetime to the variable
    monster.lifetime = 200;

    //add each monster to the group
    monstersGroup.add(monster);
    monstersGroup.debug=true;

  }
}

function createBullets() {
  var bullet = createSprite(100, 100, 60, 10);
  bullet.addImage(bulletImage);
  bullet.x = boy.x + 70;
  bullet.y = boy.y;
  bullet.velocityX = 4;
  bullet.lifetime = 100;
  bullet.scale = 0.3;
  bulletGroup.add(bullet);
  return bullet;

}

function createfire() {
  if (frameCount % 100 === 0) {
    var fireBall = createSprite(800, 320, 40, 10);
    fireBall.y = 30;
    fireBall.x = Math.round(random(180, 450));
    fireBall.addImage(fireBallImg);
    fireBall.scale = 0.5;
    fireBall.velocityY = 5;

    //assign lifetime to the variable
    fireBall.lifetime = 200;

    //add each monster to the group
    fireBallGroup.add(fireBall);

    
  }
}
function spawnDemons() {
  //write code here to spawn the demons
  if (frameCount % 30 === 0) {
    var demon = createSprite(800,320,40,10);
    demon.y = Math.round(random(250,350));
    demon.addImage(demonImg);
   
    demon.scale = 0.1;
    demon.velocityX = -3;
    
     //assign lifetime to the variable
    demon.lifetime = 200;
    
    //add each demon to the group
    demonsGroup.add(demon);
  }
}