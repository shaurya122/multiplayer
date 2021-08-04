var  database;
var playerCount,gameState;
var form,game,player;

function setup(){
  database = firebase.database();
  console.log(database);
  createCanvas(500,500);
game=new Game();
game.start();
}
function draw(){
  background("white");
  
   
    drawSprites();
  
}

