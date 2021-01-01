var wall, car;
var speed, weight;
var bullet, speed, weight;
var thickness;


function setup() {
  createCanvas(800,800);
 
 speed=random(55,90);
 weight=random(30,50);
 thickness=random(20,80);
  bullet=createSprite(20,200,20,20);
  bullet.shapeColor=color("yellow");
 bullet.velocityX=speed;
 wall=createSprite(600,200,thickness,height/2);
 wall.shapeColor=color("yellow");
}

function draw() {
  background("black");  
   if (hascollided(bullet,wall)){
	   bullet.velocityX=0;
	   var damage=0.5 * weight * speed * speed/(thickness * thickness * thickness );

	   if(damage>10){
		   wall.shapeColor=color("blue")
	   }
	   if(damage<10){
		wall.shapeColor=color("red")
	   }
   }
  drawSprites();
}
function hascollided(bullet,wall){
	bulletRightEdge=bullet.x +bullet.width;
	wallLeftEdge=wall.x;
	if (bulletRightEdge>=wallLeftEdge){
		return true
	}
    return false;
}