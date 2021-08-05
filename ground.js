class Ground {
    constructor(x,y,scale){
        this.ground=createSprite(x,y);
       this.ground.scale=scale;
       groundgroup.add( this.ground)

       
       

    }

display(){

    if(health.width<10 || win === 4){
    this.ground.destroy();
    
    }

    cgroup.add(this.ground)

 

        if(groundgroup.isTouching(player)){
         player.collide(groundgroup);
        if(keyDown(UP_ARROW)){
               player.velocityY=-29;
               jumpSound.play();
                }
     if (j.isHeld){
       player.velocityY=-29;
       jumpSound.play();
      }
     }
         


    
    
       
     
if(gameState === level1 || gameState === level2){
    this.ground.addImage(groundImg);
   }



if(gameState === level3 || gameState === level4){
    this.ground.addImage(drygroundImg);
    
}


if(gameState === level6 || gameState === level7 || gameState === level8  || gameState === level9){
    this.ground.addImage(snowgroundImg);
    
}
      


if(player.isTouching(this.ground)){
    camera.y=this.ground.y-220;
    health.y=this.ground.y-430;
}


}
}



