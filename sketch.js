var man,mIman;
var path;
var pt;
var lefts,rights;

 
function preload()
{
    mIman = loadAnimation("Runner-1.png","Runner-2.png");
    pt = loadImage("path.png")
}


function setup()
{
  createCanvas(400,400);
  //create sprites here
     
     path = createSprite(200,180,20,50);
     path.addImage("path",pt);
     path.x = path.width /2;
     path.velocityY = -4;
     man = createSprite(50,160,20,50);
     man.addAnimation("Runnunig",mIman);
     man.scale = 0.1;
     rights= createSprite(390,0,100,800)
     rights.visible=false
     lefts=createSprite(0,0,40,800)
     lefts.visible=false

     
} 

function draw() {
    background(0);
    path.velocityY=4
    man.x=World.mouseX;

   man.collide(lefts)
   man.collide(rights)


    if(path.y>400)
    {
      path.y=height/2
    }
  drawSprites()
}
