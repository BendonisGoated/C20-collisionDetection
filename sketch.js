var fixedRect;
var movingRect;

function setup() {
  createCanvas(800,400);
  fixedRect = createSprite(400,200,100,50);
  fixedRect.shapeColor = "blue";


  movingRect= createSprite(300,100,100,90);
  movingRect.shapeColor = "blue";
}

function draw() {
  background(255,255,255);  
  movingRect.x = World.mouseX;
  movingRect.y = World.mouseY;

  if(movingRect.x - fixedRect.x <= movingRect.width/2 + fixedRect.width/2 &&
     fixedRect.x - movingRect.x <= movingRect.width/2 + fixedRect.width/2 && 
     movingRect.y - fixedRect.y <= movingRect.width/2 + fixedRect.width/2 &&
      fixedRect.y - movingRect.y <= movingRect.width/2 + fixedRect.width/2 
     ){
    movingRect.shapeColor = "red";
    fixedRect.shapeColor = "red";
  }
  else{
    movingRect.shapeColor = "blue";
    fixedRect.shapeColor = "blue"; 
  }

  drawSprites();
}