

var wall,thickess 
var bullet,speed,weight
var damage


function setup() {
  createCanvas(1000,400);

  thickess = random(55,90)
  speed = random(223,321)
  weight = random(30,52)

  bullet = createSprite( 50, 200, 50, 25);
  bullet.shapeColor= (255,255,255)

  wall = createSprite( 800, 200, thickess, height/2 );
  wall.shapeColor=(80,80,80)
}

function draw() {
  background(200,200,200);
  
  bullet.velocityX = speed

  console.log(damage)

  if (hasCollided(bullet,wall)){

    bullet.velocityX = 0
   

    damage = (0.5 * weight * speed * speed) / (thickess * thickess * thickess)
    
    if (damage < 10){
      wall.shapeColor="green"
    }
  
    if (damage > 10){
      wall.shapeColor= "red"
    }
  
  }

  drawSprites();
}
function hasCollided(lbullet,lwall)
{

  bulletRightEdge=lbullet.x + lbullet.width;
  wallLeftEdge= lwall.x;
  if(bulletRightEdge >= wallLeftEdge)
  {
    return true
  }

  return false

}