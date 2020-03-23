class deathScene extends Phaser.Scene{
    constructor(){
        super('deathScene');
    }

    create(){
        timer = 30;
        if (stage == 1){
            bg = this.add.image(this.game.renderer.width/2 ,this.game.renderer.height*.5, 'bg').setScale(1).setDepth(-2);
        } else if (stage == 2){
            bg = this.add.image(this.game.renderer.width/2 ,this.game.renderer.height*.5, 'desertbg').setScale(1).setDepth(-2);
        } else if (stage == 3){
            bg = this.add.image(this.game.renderer.width/2 ,this.game.renderer.height*.5, 'graveyardbg').setScale(1).setDepth(-2);
        } else if (stage == 4){
            bg = this.add.image(this.game.renderer.width/2 ,this.game.renderer.height*.5, 'winterbg').setScale(1).setDepth(-2);
        } else if (stage == 5){
            
        }

        if (character_number == 1){
            reaper = this.physics.add.sprite(this.game.renderer.width/2 ,this.game.renderer.height/2, 'reaper', '0_Reaper_Man_Idle Blinking_000').setDepth(3).setScale(0.3);            
        } else if(character_number == 2){
            reaper = this.physics.add.sprite(this.game.renderer.width/2 ,this.game.renderer.height/2, 'reaper2', '0_Reaper_Man_Idle Blinking_000').setDepth(3).setScale(0.3);
        }else{
            reaper = this.physics.add.sprite(this.game.renderer.width/2 ,this.game.renderer.height/2, 'reaper3', '0_Reaper_Man_Idle Blinking_000').setDepth(3).setScale(0.3);           
        }

        reaper.anims.play('idle_blink'+character_number, true);

        this.add.image(this.game.renderer.width/2 ,this.game.renderer.height/2 + 200, 'lives')
        text_lives = this.add.text(this.game.renderer.width/2-160 ,this.game.renderer.height*.7, 'Lives x'+Lives, {
            fontFamily: 'Font',
            fontStyle: 'Bold',
            fontSize: '70px',
            color: '#abc8c3',
        }).setDepth(2);
    }
    update(){
        if (Lives > 0){
            if (timer > 0){
                timer -= 0.3;
                text_lives.setText('Lives x'+Lives);
            }else{
                if (stage == 1){ 
                    this.scene.start('grassLevel');
                }else if (stage == 2){
                    this.scene.start('desertLevel')
                }else if (stage == 3){
                    this.scene.start('graveyardLevel')
                }else if (stage == 4){
                    this.scene.start('winterLevel')
                }
            }
            
            
        }else{
            if (timer > 0){
                timer -= 0.3;
                console.log(timer);
            }else{
                this.scene.start('menu');
            }
            
        }
    }
}