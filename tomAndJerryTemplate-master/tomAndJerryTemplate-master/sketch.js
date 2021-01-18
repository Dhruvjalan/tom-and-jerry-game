//declaring all the variables.
let backgroundload, garden, mouseloadm,mouseloads, mouseloadS1, mouse, mouse2; 
var catloadm,catloads, catloadS, string = "cat_moving", cat2;
let cat, OFF = 2, ON = 1, gameState,gameState2, x = 1, y = 0;

function preload() {
//load the images here
    backgroundload = loadImage("images/garden.png");
    catloadm = loadAnimation( "images/tomTwo.png" ,"images/tomThree.png"); 
  catloadS = loadImage("images/tomFour.png");
   catloads = loadImage("images/tomOne.png");
   mouseloadm = loadAnimation("images/jerryTwo.png" ,"images/jerryThree.png");
  mouseloadS1 = loadImage("images/jerryFour.png");
  mouseloads = loadImage("images/jerryOne.png");
}

function setup(){
    createCanvas(1000,800);     

    garden = createSprite(500,400,30,30);
    //create tom and jerry sprites here
    garden.addImage(backgroundload);
    cat = createSprite(650,600,10,10);
    cat.addImage(catloads);
    cat.scale = 0.2;
    cat.debug = true;
    cat.setCollider("rectangle",0,0,cat.width/2,cat.height/2);
    cat2 = createSprite(650,600,10,10);
   cat2.addAnimation("cat_moving",catloadm);
   cat2.scale = 0.2;
   cat2.visible = false;

mouse = createSprite(200,600,10,10);
    mouse.addAnimation("mouse_moving", mouseloadm);
    mouse.scale = 0.2;
    mouse.debug = true;
    mouse.setCollider("rectangle",0,0,mouse.width/2,mouse.height/2);
    
    mouse2 = createSprite(200,600,10,10);
    mouse2.addImage(mouseloads);
    mouse2.scale = 0.2;
mouse2.visible = false;
mouse2.debug = true;
mouse2.setCollider("rectangle",0,0,mouse2.width/2,mouse2.height/2)



gameState = ON;

}

function draw() {
    background(255);
   
    //command to move cat to the left once space is pressed.
    if(keyDown("space")){
       
cat2.visible = true;
cat.visible = false;     
cat2.x = cat2.x-5;
        cat.x = cat2.x;  
    } else{
        cat.visible = true;
        cat2.visible = false;
        
        cat.addImage(catloads);


    }
// algorithm to detect if cat is touching mouse or not. Only x-axis component included, as none of them will move in the y=axis direction. 
   if(cat.x-mouse.x <= (cat.width/2+mouse.width/2)-200 && mouse.x-cat.x <= (cat.width/2+mouse.width/2)-200){ 
     cat.visible = true;
     cat2.visible = false;
     // gameState2, to determine whether the cat has alrady touched mouse or not. helpful in determining when to reset when r is pressed.
     gameState2 = ON;

       cat.addImage(catloadS);
        mouse.visible = false;
        mouse2.visible = true;
        // algoithm to alternatively change the image of the mouse, every time it touches it. 
        if(x=== 1 ){
        mouse2.addImage(mouseloads);
        
       
        }else if(x === 0 && y === 0){
          mouse2.addImage(mouseloadS1);
          y = 1;
          

        }
    
   }
     else{
      

        mouse.visible = true;
        mouse2.visible = false;
        mouse2.addImage(mouseloads);
        gameState = OFF;
        
  }

  // command to reset game.
  if(gameState2 === ON && (keyDown("r")|| cat.x < 0)){
    cat.x =650;
    cat2.x = 650;
    cat.visible = true;
    cat2.visible = true;
    gameState2=OFF;
    x = 0;
      if(x === 0 && y === 1){
        x = 1;
        y = 0;
   
     
   
  }
}
    drawSprites();
}


//function keyPressed(){

  //For moving and changing animation write code here


//}
