var cat , cat1 , catW , cat4;
var mouse , mouse1 , mouseM , mouse4;
var bgImg;

function preload() {
    //load the images here
     bgImg = loadImage("images/garden.png");
     cat1 = loadImage("images/cat1.png");
     catW = loadAnimation("images/cat2.png","images/cat3.png");
     cat4 = loadImage("images/cat4.png");
     mouse1 = loadAnimation("images/mouse1.png");
     mouseM = loadAnimation("images/mouse2.png","images/mouse3.png");
     //mouse4 = loadImage("images/mouse4");
}

function setup(){
    createCanvas(1000,800);
    //create tom and jerry sprites here
    cat = createSprite(880,700);
    cat.addImage("tommy",cat1);
    cat.scale = 0.13;

    mouse = createSprite(200,700);
    mouse.addAnimation("jerry", mouse1);
    mouse.scale = 0.10;

}

function draw() {

    background(bgImg);
    //Write condition here to evalute if tom and jerry collide
     
      if(cat.x - mouse.x < cat.width - mouse.width){
      cat.velocityX = 0;
      cat.addImage("catstopped",cat4);
      cat.changeImage("catstopped",cat4);
      mouse.addAnimation("mouseop",mouse1);
      mouse.changeAnimation("mouseop",mouse1);
      cat.x = 320;
     
      
      }






    drawSprites();
}


function keyPressed(){

  //For moving and changing animation write code here
  if (keyCode === LEFT_ARROW){
      mouse.addAnimation("mouseteasing",mouseM);
      mouse.changeAnimation("mouseteasing",mouseM);
      //mouse.frameDelay = 25; 
  }

  if (keyCode === LEFT_ARROW){
      cat.addAnimation("catrunning",catW);
      cat.changeAnimation("catrunning",catW);
    //cat.frameDelay = ?
       cat.velocityX = -3;
  }
  



}
