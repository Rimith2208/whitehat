var fixedrect,movingrect




function setup() {
  createCanvas(1200,800);
  fixedrect=createSprite(400, 200, 50, 50);
  movingrect=createSprite(200,100,80,30)
}

function draw() {
  background("green");  
movingrect.x=mouseX
movingrect.y=mouseY
textSize(30)
fill("red")
text(movingrect.x-fixedrect.x,100,100)
text(movingrect.width/2+fixedrect.width/2,100,200)
if(movingrect.x-fixedrect.x<movingrect.width/2+fixedrect.width/2&&
  fixedrect.x-movingrect.x<movingrect.width/2+fixedrect.width/2&&
  fixedrect.y-movingrect.y<movingrect.height/2+fixedrect.height/2&&
  movingrect.y-fixedrect.y<fixedrect.height/2+movingrect.height/2){ 
  movingrect.shapeColor="white"
  fixedrect.shapeColor="orange"
}
else{movingrect.shapeColor="blue";fixedrect.shapeColor="yellow"}
  drawSprites();
}