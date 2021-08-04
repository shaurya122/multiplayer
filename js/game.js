class Game{

    constructor(){




    }
getState(){
var gameStateref=database.ref("gameState");
gameStateref.on("value",function(data){
    gameState=data.val();
})
}
update(state){

}

    start(){
        gameState=this.getState();
    if(gameState===0){

form=new Form();
form.display();

    }
    }


}