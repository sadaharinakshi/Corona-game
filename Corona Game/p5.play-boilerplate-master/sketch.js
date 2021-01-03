var Chinaimage;
var china;
var coronaImg1,coronaImg2;
var scalesize = 0.05;
function preload()
{
Chinaimage = loadImage("Images/CHINA map.jpg");
coronaImg1 = loadImage("Images/corona1.png");
humanfront = loadAnimation("Images/front3.png");
humanleft = loadAnimation("Images/left.png");
humanright = loadAnimation("Images/right1.png");
humanback = loadAnimation("Images/back.png");
tankerimg = loadImage("Images/tanker.png");
bullet1 = loadImage("Images/syringe.png");
}

function setup() {
createCanvas(displayWidth-30,displayHeight-30);
china = createSprite(displayWidth/2,displayHeight/2,displayWidth-100,displayHeight-100);
china.addImage(Chinaimage);
tanker = createSprite(displayWidth/2,displayHeight/2-50);
tanker.addImage(tankerimg);
tanker.scale = 0.5;


  
}

function draw() {
  background("black");
  if(keyDown("SPACE"))
  {
    var bullet = createSprite(tanker.x-50,tanker.y);
    bullet.addImage(bullet1);
    bullet.scale = 0.5;
  }
  if(frameCount%250===0)
  {
    spawnCorona();
    
  } 
  if(frameCount%200===0)
  {
    spawnHuman();
    
  }   
  drawSprites();
}
function spawnCorona()
{
  var corona = createSprite(random(100,800),random(100,800));
  corona.addImage(coronaImg1);
  corona.scale = scalesize;
  corona.velocityX = random(-1,2);
  corona.velocityY = random(-1,2);

}
function spawnHuman()
{
  var human = createSprite(random(50,600),random(50,600));
  var rand = Math.round(random(1,4));
  if(rand===1)
  {
    human.addAnimation("front",humanfront);
    human.velocityY = 1;
    human.velocityX = random(0,1);
  }
  if(rand===2)
  {
    human.addAnimation("back",humanback);
    human.velocityY = -1;
    human.velocityX = random(0,1);
  }
 
  if(rand===3)
  {
    human.addAnimation("right",humanright);
    human.velocityY = random(0,1);
    human.velocityX = 1;
  }
  if(rand===4)
  {
    human.addAnimation("left",humanleft);
    human.velocityY = random(0,1);
    human.velocityX = -1;
  }
}