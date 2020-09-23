var thickness , wall;
var bullet, speed, weight;
function setup() {
  createCanvas(800,400);
   bullet = createSprite(400, 200, 50, 50);
   bullet.velocityX = speed;
   wall = createSprite(600,200,thickness,height/2);
  // wall.shapeColor(80,80,80);
   speed =random(223,321);
   weight= random(30,52);
   thickness = random(22,83);
}

function draw() {
  background(255,255,255);
  
  if(wall.x - bullet.x < (bullet.weight+wall.weight)/2);
  {
     bullet.velocityX=2;
    var deformation=0.5* weight*speed*speed/22509;
if(deformation>180)
  {
bullet.shapeColor=color(255,0,0);
      }

if(deformation<180 && deformation>100)
{
  bullet.shapeColor=color(230,230,0);
  }

  if(deformation<100)
  {
    bullet.shapeColor=color(0,255,0);
  }
}
  drawSprites();
}

function hasCollided (Lbullet,Lwall)
{
    bulletRightEdge=lbullet.x +lbullet.width;
    wallLeftEdge=lwall.x;
    if(bulletRightEdge>=wallLeftEdge)
    {
      return true
    }
    return false ;
    if(hasCollided(bullet,wall))
    {
      bullet.velocityX=0;
      var damage=0.5 * weight * speed* speed/(thickness*thickness*thickness) ;
      
    }
    if(damage>10)
    {
      wall.shapeColor=color(255,0,0);
    }

    if(damage<10)
    {
      wall.shapeColor=color(0,255,0);
    }
}