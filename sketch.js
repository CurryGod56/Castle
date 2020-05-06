function setup() {
  createCanvas(800,800);
  rectMode(CENTER)
   createSprite(40,400,50,200);
   createSprite(340,400,50,200);
   createSprite(640,400,50,200);
   createSprite(40,400,100,10);
   createSprite(340,400,100,10);
   createSprite(640,400,100,10);
   createSprite(400,300,800,10);
   createSprite(600,250,10,100);
   createSprite(100,250,10,100);
   createSprite(600,200,50,30);
   createSprite(100,200,50,30);
 
}

function draw() {
  background(255,255,255);  
  
  drawSprites();
}