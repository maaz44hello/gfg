var issImg;
var backImg
var spacecrImg
var spacecrImgright
var spacecrImgleft
var spacecrImgup







function preload() {
issImg= loadImage("iss.png")
backImg=  loadImage("spacebg.jpg")
spacecrImg=  loadImage("spacecraft1.png")
spacecrImgleft=  loadImage("spacecraft4.png")
spacecrImgright=  loadImage("spacecraft3.png")
spacecrImgup=  loadImage("spacecraft2.png")
}







function setup() {
  createCanvas(displayWidth - 50, displayHeight - 100);
  

  spacecraft= createSprite(502,600);
  spacecraft.addImage(spacecrImg);
  spacecraft.scale=0.3


  iss= createSprite(600, 300, 50, 50);
  iss.addImage(issImg)
  iss.debug=false
  iss.setCollider("rectangle",-80,-30,100,100)

  hh=createSprite(535,325,20,20);
  hh.visible=false
}

function draw() {
  background(backImg);
  drawSprites();
 //console.log(World.mouseY,World.mouseX)
console.log(spacecraft.y,spacecraft.x)

//if( spacecraft.x=535&&(spacecraft.y=327)){
  
  //console.log("succesfull")
 //}

if(keyDown(RIGHT_ARROW)){
  spacecraft.x =  spacecraft.x + 5;
  spacecraft.addImage(spacecrImgright);
}
else{
  
 spacecraft.addImage(spacecrImg);

 if(keyDown(LEFT_ARROW)){
  spacecraft.x =  spacecraft.x - 5;
  spacecraft.addImage(spacecrImgleft);
}

if(keyDown(UP_ARROW)){
  spacecraft.y =  spacecraft.y - 5;
 
}
if(keyDown(DOWN_ARROW)){
  spacecraft.addImage(spacecrImgup);
}
if( spacecraft.x<=(iss.x-20) && spacecraft.y<=(iss.y+90)) {
  textSize(50)
  text("DockingSuccesful!",550,500)
  
}

}








}


