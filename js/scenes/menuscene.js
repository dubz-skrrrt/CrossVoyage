
class MenuScene extends Phaser.Scene{
    constructor(){
        super('menu');
    }

    // init(data){
    //     // console.log(data);
    //     // console.log('got it');
    // }
    create(){
        this.sound.pauseOnBlur = false;
        console.log(volume);
        
        Glogo = this.add.image(this.game.renderer.width/2 ,this.game.renderer.height*.26, 'gameLogo').setDepth(2).setScale(1.2);
        bg = this.add.image(this.game.renderer.width/2 ,this.game.renderer.height*.5, 'bg').setScale(1);

        playButton = this.add.image(this.game.renderer.width/2 ,this.game.renderer.height*.8, 'playButton').setDepth(1).setScale(0.5);
        charButton = this.add.image(this.game.renderer.width/2 -150,this.game.renderer.height*.8, 'charButton').setDepth(1).setScale(0.5);
        levelsButton = this.add.image(this.game.renderer.width/2 +150 ,this.game.renderer.height*.8, 'levelsButton').setDepth(1).setScale(0.5);
        musicButton = this.add.image(this.game.renderer.width/2 + 300 ,this.game.renderer.height*.8, 'musicButton').setDepth(1).setScale(0.5);
        settingsButton = this.add.image(this.game.renderer.width/2 - 300,this.game.renderer.height*.8, 'settingsButton').setDepth(1).setScale(0.5);
        //this.add.image(20, 20,'coin_bg').setOrigin(0).setDepth(0).setScale(0.7);
        // playbtnTxt= this.add.text(playButton.x-65, playButton.y-35, 'PLAY ', {
        //     fontFamily: 'Font',
        //     fontStyle: 'Bold',
        //     fontSize: '50px',
        //     color: '#5e9d00'
        // }).setDepth(2);
        Glogo.alpha = 0;
        tween = this.tweens.add({
            targets: Glogo,
            alpha: 1,
            duration: 3000,
            ease: "Power2",
            delay: 200,
        });
        tween = this.tweens.add({
            targets: Glogo,
            y: this.game.renderer.height*.3,
            duration: 1500,
            ease: "Sine.easeInOut",
            repeat: -1,
            yoyo: true
        });
        

        cursors = this.input.keyboard.createCursorKeys();

        //menu Buttons
        playButton.setInteractive();
        levelsButton.setInteractive();
        charButton.setInteractive();
        musicButton.setInteractive();
        settingsButton.setInteractive();

        playButton.on('pointerover', ()=>{
            // playbtnTxt.setColor('#92bf00');
            playButton.setTexture('playButton', 'Button_15');
        });
        playButton.on('pointerout', ()=>{
            // playbtnTxt.setColor('#5e9d00');
            playButton.setTexture('playButton', 'Button_14');
            //hoverSprite.setVisible(false);
        });
        playButton.on('pointerdown', ()=>{
            playButton.setTexture('playButton', 'Button_16');
        });
        playButton.on('pointerup', ()=>{
            playButton.setTexture('playButton', 'Button_14');
            Sound;
            playSound;
            music.stop();
            this.scene.start('grassLevel');
        });

        levelsButton.on('pointerover', ()=>{
            levelsButton.setTexture('levelsButton', 'Button_67');          
        });
        levelsButton.on('pointerout', ()=>{           
            levelsButton.setTexture('levelsButton', 'Button_66');            
        });
        levelsButton.on('pointerdown', ()=>{            
            levelsButton.setTexture('levelsButton', 'Button_68');           
        });
        levelsButton.on('pointerup', ()=>{
            Sound;
            playSound;
            levelsButton.setTexture('levelsButton', 'Button_66');
            this.scene.start('levelSelect');
        });

        charButton.on('pointerover', ()=>{
            charButton.setTexture('charButton', 'Button_35');          
        });
        charButton.on('pointerout', ()=>{           
            charButton.setTexture('charButton', 'Button_34');            
        });
        charButton.on('pointerdown', ()=>{            
            charButton.setTexture('charButton', 'Button_36');           
        });
        charButton.on('pointerup', ()=>{
            Sound;
            playSound;
            scene = 1;
            charButton.setTexture('charButton', 'Button_34');
            this.scene.start('characterSelect');
        });

        musicButton.on('pointerover', ()=>{
            musicButton.setTexture('musicButton', 'GUI_50');
        });
        musicButton.on('pointerout', ()=>{
            musicButton.setTexture('musicButton', 'GUI_49');
        });
        musicButton.on('pointerdown', ()=>{
            musicButton.setTexture('musicButton', 'GUI_51');          
        });
        musicButton.on('pointerup', ()=>{
            musicButton.setTexture('musicButton', 'GUI_49');
            if (Sound == true){
                console.log(Sound);
                music.stop()
                Sound = false;
                playSound = false;
                
            }else{
                console.log(Sound);
                music.play({
                    loop: true
                });
                Sound = true;
                playSound = true;
            }
        });

        settingsButton.on('pointerover', ()=>{
            settingsButton.setTexture('settingsButton', 'GUI_82');
        });
        settingsButton.on('pointerout', ()=>{
            settingsButton.setTexture('settingsButton', 'GUI_81');        
        });
        settingsButton.on('pointerdown', ()=>{
            settingsButton.setTexture('settingsButton', 'GUI_83');         
        });
        settingsButton.on('pointerup', ()=>{
            Sound;
            playSound;
            settingsButton.setTexture('settingsButton', 'GUI_81');
            scene = 1;
            this.scene.start('settings', 'settingsScene');
        });     
        if (!playSound){
            music.stop();
        }else{
            music.play();
           
        }
        

    }
    update(){
        
    }
}
