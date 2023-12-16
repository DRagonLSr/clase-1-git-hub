var a;
function setup() {
  createCanvas(800,800);
a=createSprite(400,400,400,400);
}
function draw() 
{
  background(30);
  if(keyIsDown(RIGHT_ARROW)){
    a.position.x=a.position.x+5
  }
  if(keyIsDown(LEFT_ARROW)){
    a.position.x=a.position.x-5
  }
 
  drawSprites();
}




