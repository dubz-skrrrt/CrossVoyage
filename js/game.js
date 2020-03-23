var config = {
    type: Phaser.AUTO,
    scale:{
        parent: 'phaser-example',
        mode: Phaser.DOM.FIT,
        autoCenter: Phaser.DOM.CENTER_BOTH,
        width: 1000,
        height: 720,
        min:{
            width: 600,
            height: 450
        },
        max: {
            width: 1000,
            height: 740,
        }
    },
    
    scene: [LoadScene, MenuScene, SettingsScene, levelSelectScene, characterSelectScene, Level1, Level2, Level3, Level4, deathScene],
    
    physics: {
        default: 'arcade',
        
        arcade: {
            gravity: {y: 0},
            debug: false
        }
    },
   
};


let game = new Phaser.Game(config);
var enemies = [];
var logo, timer = 30;
var delayedEvent;
var change = false;
var tween;
var  hoverSprite, music, Sound, playbtnTxt, volume, scene, playSound;
var playButton, musicButton, settingsButton, noButton, yesButton, numButton, backButton,  levelsButton, 
charButton, bg, Glogo;
var reaper, reaper2, reaper3, map, anims, Lives = 3, text_lives;
var movingCrate, movingCrate2;
var tileset, groundLayer, waterLayer, bgLayer, bgLayer2, clearLayer, invisbleLayer;
var musicGrass, musicDesert, musicGrave, musicWinter, musicSpace;
var cursors, worldPhys, curScene;
var speed, stopper=false, runner;
var enemyHit, enemyLife = 20;
var enemyCharacter;
var stage;
function fadePicture(){
    console.log('works');
    change = true;
    
}

function movingBlock(){

    if (movingCrate.body.touching.up){
        if (keyboard.W.isDown == true && !reaper.body.onFloor()) {
            reaper.body.setVelocityY(-550);  
        }
        stopper = true;
        runner = true;      
    }  
}

function spawnEnemies(amt, posX, posY){
    for(var i=0;i<amt;i++){
        this.enemy = worldPhys.add.sprite(posX[i], posY[i], 'Golem'+enemyCharacter);
        this.enemy.velocity = 125;
        this.enemy.alive = true;
        this.enemy.body.gravity.y = 520;
        this.enemy.setSize(265, 500);
        this.enemy.setOffset(310, 240);
        this.enemy.setScale(0.3)
        this.enemy.setCollideWorldBounds(true);
        worldPhys.add.collider(groundLayer, this.enemy);
        worldPhys.add.collider(invisbleLayer, this.enemy);
        enemies.push(this.enemy);
    }
  }
  function checkEnemies(enemy, idx){
    if(enemy.alive){
      enemy.anims.play('enemyWalk'+enemyCharacter, true);
      if(enemy.body.blocked.right){
        enemy.body.setVelocityX(-125);
        enemy.velocity = -125;
        enemy.flipX = true;
      }
      else if(enemy.body.blocked.left){
        enemy.body.setVelocityX(125);
        enemy.velocity = 125;
        enemy.flipX = false;
      }
      else{
        enemy.body.setVelocityX(enemy.velocity);
      }
      worldPhys.world.overlap(enemy, weapon, WeaponCollide, null, this);
      worldPhys.add.collider(reaper, enemy, collideWithPlayer, null, this);
    }
  }
  function collideWithPlayer(plr, enemy){
    if (plr.body.touching.right || plr.body.touching.left || plr.body.touching.down && enemy.body.touching.up){
        plr.body.enable = false;
        plr.alive = false;
            reaper.anims.play('dead'+character_number, true);
            reaper.once('animationcomplete', ()=>{
                Lives -= 1;
                // plr.body.setVelocityX(0);
                console.log("dead");
                //plr.alpha = 0;
                if (stage == 1){
                    musicGrass.stop();
                }else if (stage == 2){
                    musicDesert.stop();
                }else if (stage == 3){
                    musicGrave.stop();
                }else if (stage == 4){
                    musicWinter.stop();
                }
                stage;
                curScene.start('deathScene');
            });
        //console.log('enemyhit');
    }
    
  }

  function WeaponCollide(enemy, wpn){
      if (strike && enemy.body.touching.right || strike && enemy.body.touching.left){  
        enemy.alive = false;
        enemy.body.setVelocityX(0);
            enemy.anims.play('dying'+enemyCharacter, true);
            enemy.once('animationcomplete', ()=>{
                console.log("dead");
                enemy.destroy();
            });
        
      }
    
  }

 function nextStage(){
    if (stage == 1){
        this.scene.start('desertLevel');
    } else if (stage == 2){
        this.scene.start('graveyardtLevel');
    } else if (stage == 3){
        this.scene.start('winterLevel');
    } else if (stage == 4){
        //this.scene.start('desertLevel');
    }
    
  }

function checkPlayerMovement(){
    // Stop any previous movement from the last frame
    if (reaper.alive){
        if (keyboard.F.isDown){
            if (!weapon.flipX){
                weapon.body.x = reaper.body.x+90;
            }else{
                weapon.body.x = reaper.body.x-60;
            }
            
            weapon.body.y = reaper.body.y;
            strike = true;
        }else{
            strike =false;
        }
        if (keyboard.A.isDown) {
            weapon.body.x = reaper.body.x+20;
            weapon.body.y = reaper.body.y;
            if (keyboard.SHIFT.isDown) {   
                reaper.body.setVelocityX(-speed-150);
                reaper.flipX = true;
                weapon.flipX = true;
            }else{
                reaper.body.setVelocityX(-speed);
                reaper.flipX = true;
                weapon.flipX = true;
            }

        } else if (keyboard.D.isDown) {
            weapon.body.x = reaper.body.x+20;
            weapon.body.y = reaper.body.y;
            if (keyboard.SHIFT.isDown) {
                reaper.body.setVelocityX(speed+150);
                reaper.flipX = false;
                weapon.flipX= false;
            }else{
                reaper.body.setVelocityX(speed);
                reaper.flipX = false;
                weapon.flipX = false;
            }
        }else {
            
            reaper.body.setVelocityX(0);
        }
    
    // Vertical movement
        //console.log(movingCrate.body.y);
    
        stopper = false;
        
            if (keyboard.W.isDown == true && reaper.body.onFloor()) {
                reaper.body.setVelocityY(-550);  
            }
            if (reaper.body.velocity.y < 0 && keyboard.W.isDown){
                reaper.anims.play('jump'+character_number, true);
            }else if (reaper.body.onFloor() && strike == true){
                weapon.anims.play('weaponStrike'+character_number, true);
                reaper.anims.play('slash'+character_number, true);
            } else if (reaper.body.velocity.y > 0 && !reaper.body.blocked.down && stopper == false){
                reaper.anims.play('falling'+character_number, true);
            }
            else if(reaper.body.velocity.x < 0 && reaper.body.velocity.x >= -speed && runner == true || reaper.body.velocity.x > 0 && reaper.body.velocity.x <= speed && runner == true) {               
                reaper.anims.play('walk'+character_number, true);
            }
        
            else if(reaper.body.velocity.x < 0 && reaper.body.velocity.x >= -speed && reaper.body.blocked.down || reaper.body.velocity.x > 0 && reaper.body.velocity.x <= speed && reaper.body.blocked.down) {
                reaper.anims.play('walk'+character_number, true);
            }
            else if(reaper.body.velocity.x == -speed-150 && keyboard.SHIFT.isDown && reaper.body.blocked.down || reaper.body.velocity.x == speed+150 && reaper.body.blocked.down && keyboard.SHIFT.isDown) {
        
                reaper.anims.play('run'+character_number, true);
            }
            else if(reaper.body.velocity.x == -speed-150 && keyboard.SHIFT.isDown && runner == true || reaper.body.velocity.x == speed+150 && keyboard.SHIFT.isDown && runner == true) {
                reaper.anims.play('run'+character_number, true);
            }
            
            else{
                reaper.anims.play('idle_blink'+character_number, true);
            }
    }
}