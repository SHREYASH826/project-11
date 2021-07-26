var shipImg1,seaImg


function preload(){
  seaImg= loadImage("sea.png");
  shipImg1=loadAnimation("ship-1.png")

  shipImg1 = loadAnimation("shipImg1");

}

function setup(){
  createCanvas(400,400);
  spriteName.addImage(seaImg);
  
}

function draw() {
  background("blue");
  //code to reset the background
  if(sea.x < 0){
    sea.x = sea.width/2;
  }
}