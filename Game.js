class Game {
    constructor(){
  
    }
  
    getState(){
      var gameStateRef  = database.ref('gameState');
      gameStateRef.on("value",function(data){
         gameState = data.val();
      })
  
    }
  
    update(state){
      database.ref('/').update({
        gameState: state
      });
    }
  
    async start(){
      if(gameState === 0){
        player = new Player();
        var playerCountRef = await database.ref('playerCount').once("value");
        if(playerCountRef.exists()){
          playerCount = playerCountRef.val();
          player.getCount();
        }
        form = new Form()
        form.display();
      }
    background(bg2)
    target1 = createSprite(1000,500);
    target1.addImage(target_1);
    target1.scale = 0.9;

  
    p1 = createSprite(130,615);
    p1.addImage(p_1);
    p1.scale = 0.7;

    p2 = createSprite(410,606);
    p2.addImage(p_2);
    p2.scale =  0.7;

    p3 = createSprite(335,540);
    p3.addImage(p_3);
    p3.scale =  0.7;
   
    p4 = createSprite(520,550);
    p4.addImage(p_4);
    p4.scale =  0.7;

    n1 = createSprite(1135,600);
    n1.addImage(n_1);
    n1.scale =  0.7;

    n2 = createSprite(1180,455);
    n2.addImage(n_2);
    n2.scale =  0.7;

    n3 = createSprite(1090,455);
    n3.addImage(n_3);
    n3.scale =  0.7;

    n4 = createSprite(1320,410);
    n4.addImage(n_4);
    n4.scale =  0.7;        

    s1 = createSprite(150,680);
    s1.addImage(s_1);
    s1.scale = 0.7;
  
    s2 = createSprite(450,670);
    s2.addImage(s_2);
    s2.scale = 1.2;
   
    s3 = createSprite(350,600);
    s3.addImage(s_3);
    s3.scale = 1.2;

    s4 = createSprite(520,600);
    s4.addImage(s_4);
    s4.scale = 1.2;
  
    s5 = createSprite(1150,670);
    s5.addImage(s_5);
    s5.scale = 1.3;
  
    s6 = createSprite(1170,500);
    s6.addImage(s_6);
    s6.scale = 1.2;

    s7 = createSprite(1090,520);
    s7.addImage(s_7);
    s7.scale = 1.2;
  
    s8 = createSprite(1300,450);
    s8.addImage(s_8);
    s8.scale = 0.8;
  
    }
  
    play(){
      form.hide();
      
      Player.getPlayerInfo();
      
      if(allPlayers !== undefined){
        background(bg);
        
        //var display_position = 100;
        
        //index of the array
        var index = 0;
  
        for(var plr in allPlayers){
          //add 1 to the index for every loop
          index = index + 1 ;

         
          if (index === player.index){
            stroke(10);
            fill("red");
            camera.position.x = displayWidth/2;
            camera.position.y = displayHeight/2;
          }
         
          if (player.index===1){
            var options={
              isStatic:true

            }
            gun1=Matter.Bodies.circle(600,500,50,options)
            Matter.World.add(world,gun1)
            image(gun_1,gun1.position.x,gun1.position.y)    
            if(keyDown("space")){
              this.shootBullet(gun1.angle)

          
           }          
          }
          if (player.index===2){
            var options={
              isStatic:true
              
            }
            gun2=Matter.Bodies.circle(600,500,50,options)
            Matter.World.add(world,gun2)
            image(gun_2,gun2.position.x,gun2.position.y) 
            if (keyDown("space")){
            this.shootBullet(gun2.angle)

           

          }       
          }

          //textSize(15);
          //text(allPlayers[plr].name + ": " + allPlayers[plr].distance, 120,display_position)
        }
        
  
      }
  
      drawSprites();
    }
  
    shootBullet(angle){
      var options={
        isStatic:true
      }
    var bullet1=Matter.Bodies.circle(200,200,20,options)
    Matter.World.add(world,bullet1)
    image (b_1,bullet1.position.x,bullet1.position.y)
    var newAngle=angle*(3.14/180)
    var velocity=p5.Vector.fromAngle(newAngle)
    velocity.mult(0.5)
    Matter.Body.setStatic(bullet1,false)
    Matter.Body.setVelocity(bullet1,{x:velocity.x*(180/3.14),y:velocity.y*(180/3.14)})
    }  
    }
  
  