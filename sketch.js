var Runner,RunnerImage, pathImage, path,left_boundary, right_boundary,  coin, coinImage, coinscore,song,slider;
function preload(){
 
  RunnerImage=loadAnimation("Runner1.png", "Runner2.png");
  pathImage=loadImage("path.png");
  coinImage=loadImage("coin.png");
}

function setup(){
  createCanvas(400,400);
  path=createSprite(200,200);
  path.addImage(pathImage);
  path.velocityY=5;
  path.y=path.height/30;
  Runner=createSprite(180,340,50,170);
  Runner.addAnimation("running",RunnerImage);
  
  coin=createSprite(200,200,80,90);
  coin.addImage(coinImage);
  coin.scale=0.3
  coin=createSprite(100,200,80,90);
  coin.addImage(coinImage);
  coin.scale=0.3
  coin=createSprite(300,200,80,90);
  coin.addImage(coinImage);
  coin.scale=0.3;
  left_boundary=createSprite(0,300,100,600);
  right_boundary=createSprite(390,300,80,600);
 left_boundary.visible=false;
right_boundary.visible=false;
}

function draw() {
  background(0);
  textSize(10);
  text('coin Score', 1,200);
  textSize(10);
  text('0', 20,230);
  path.velocityY=5;
  Runner.x=World.mouseX;
  if(path.y>400) {
  path.y=height/2 ;
  if(Runner.isTouching(coin)) {
  coinscore = coinscore+1;
 }
  
}
  Runner.collide(left_boundary);
  Runner.collide(right_boundary);
  Edges=createEdgeSprites();
  Runner.collide(edges[3]);
drawSprites();
}

