  var car,wall;
  var speed,weight;

function setup() {
  createCanvas(1600,400);

  speed = random(55,90)
  weight = random(500,1400)

  car=createSprite(50, 200, 30, 30);
  car.velocityX = speed;
  car.shapeColor=color(211,211,211);

  wall=createSprite(1200,200,20,height/2);
  
}

function draw() {
  background(0,0,0);
  if(wall.x - car.x < (car.width+wall.width)/2){
    car.velocityX = 0;
    var deformation = 0.5 * weight * speed* speed/22509;
  }
  if(deformation>180){
      car.shapeColor=color(255,0.0);
  }else if(deformation<180 && deformation>100){
    car.shapeColor=color(255,255,0);
  }else if(deformation<100 && deformation>0){
    car.shapeColor=color(0,255,0);
  }else{
    car.shapeColor=color(211,211,211);
  }
  drawSprites();
}