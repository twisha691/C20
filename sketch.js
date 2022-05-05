//to define variables
var garden,rabbit,apple,leaf;
var gardenImg,rabbitImg,appleImg,leafImg;

// to load Images
function preload(){
  gardenImg = loadImage("garden.png");
  rabbitImg = loadImage("rabbit.png");
  appleImg  = loadImage("apple.PNG")
  leafImg   = loadImage("leaf.png")
}

function setup(){
  
  createCanvas(400,400);
  
// Moving background
 garden=createSprite(200,200);
 garden.addImage(gardenImg);

//creating rabbit     
                                 
 rabbit = createSprite(180,340,30,30);
 rabbit.scale =0.09;
 rabbit.addImage(rabbitImg);

}

function draw() {
  background(0);
  
 //to move rabbit 
 rabbit.x=World.mouseX;
  
  edges= createEdgeSprites();
  rabbit.collide(edges);
  
  drawSprites();
  
  
  
var select_Sprites=Math.round(random(1,2));
 if(frameCount%80==0){
  if(select_Sprites==1){
    createApples();
  }else{
  createLeaf()
   }

  }
function createApples(){
  apple=createSprite(random(50,350),40,10,10);
  apple.addImage(appleImg)
  apple.scale=0.07
  apple.velocityY=1;
  apple.lifetime=150;
 }
  

function createLeaf(){
  leaf=createSprite(random(50,350),40,10,10);
  leaf.addImage(leafImg)
  leaf.scale=0.04;
  leaf.velocityY=3;
  leaf.lifetime=150;
 }
  
}
  
  


  
  
