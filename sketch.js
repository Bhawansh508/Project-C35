var hyperballoon,gamebackground,database,hyperballoonPosition;
var position;
var balloonImg,backgroundImg;
function preload() {
balloonImg=loadImage("HotAirBallon-02.png");
backgroundImg=loadImage("HotAirBallon-01.png");
}
function setup() {
  createCanvas(800,400);

  backgroundImage=createSprite(400, 200, 400, 200);
  
  backgroundImage.addImage(backgroundImg);
  backgroundImage.scale=0.2;
 
  
  hyperballoon=createSprite(400, 200, 50, 50);

  database=firebase.database();
  hyperballoonPosition=database.ref("balloon/position");
  hyperballoonPosition.on("value",readPosition)
  hyperballoon.addImage(balloonImg);
  hyperballoon.scale=0.2;
  hyperballoon.depth=9;
}

function draw() {
  background(255,255);  
  if(keyDown(LEFT_ARROW)){
    writePosition(-1,0);
 }
 else if(keyDown(RIGHT_ARROW)){
    writePosition(1,0);
 }
else if(keyDown(UP_ARROW)){
    writePosition(0,-1);
}
else if(keyDown(DOWN_ARROW)){
    writePosition(0,+1);
}
drawSprites();
}
function readPosition(data){
  position=data.val();
  console.log(position.x);
  hyperballoon.x=position.x; 
  hyperballoon.y=position.y; 
}
function writePosition(x,y){
  database.ref('balloon/position').set({
      x:position.x+x,
      y:position.y+y
  })}
