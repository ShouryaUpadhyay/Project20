var car, wall;
var speed, weight;

function setup() {
  createCanvas(800,400);

  speed=random(55,80)
  weight=random(400,1500)

  car = createSprite(100, 200, 50, 50);
  car.shapeColor="white";

 car.velocityX=speed;

  wall = createSprite(700, 200, 20, 190);
  wall.shapeColor="white";
}

function draw() {
  background("black");  

  if(wall.x-car.x<car.width/2-wall.width/2){

    car.velocityX=0;

 var deformation=0.5*weight*speed*speed/22500

 if(deformation>180){
car.shapeColor="yellow";
 }
 if(deformation<180 && deformation>100){
  car.shapeColor="green";
  
   }
   if(deformation<100){
    car.shapeColor="red";
     }
  }

  drawSprites();
}