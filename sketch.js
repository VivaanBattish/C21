var mRect,fRect;
var rect1,rect2;

function setup() {
  createCanvas(800,400);
 fRect =  createSprite(400, 200, 50, 50);
 mRect = createSprite(100,200,30,80);

 mRect.shapeColor = "green";
 fRect.shapeColor = "green";

 mRect.debug = true;
 fRect.debug = true;

 rect1 = createSprite(300,200,40,50);
 rect1.shapeColor = "blue";
 rect1.velocityX = -2;

 rect2 = createSprite(100,200,50,40);
 rect2.shapeColor = "blue";
 rect2.velocityX = 2;
}

function draw() {
  background(0);  

  mRect.x = mouseX;
  mRect.y = mouseY;

  bounceOff(rect1,rect2);

  if(isTouching(mRect,rect1)){
   rect1.shapeColor = "yellow";
   mRect.shapeColor = "red";
  }
  else{
    rect1.shapeColor = "blue";
    mRect.shapeColor = "green";
  }

  

  drawSprites();
}

