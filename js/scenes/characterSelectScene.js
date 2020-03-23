var leftButton, rightButton;
var character_number = 1, changeS = false;
class characterSelectScene extends Phaser.Scene{
    constructor(){
        super('characterSelect');
    }
    create(){
        this.add.image(this.game.renderer.width/2 ,this.game.renderer.height*.5, 'bgBlur').setScale(1);
        this.add.image(this.game.renderer.width/2 ,this.game.renderer.height*.5, 'character_bg').setScale(1, 0.95);
        backButton = this.add.image(this.game.renderer.width/2 - 410 ,this.game.renderer.height*.1, 'backButton').setDepth(1).setScale(0.5);
        reaper = this.physics.add.sprite(this.game.renderer.width/2 ,this.game.renderer.height/2, 'reaper',).setDepth(3).setScale(0.5);
        reaper2 = this.physics.add.sprite(this.game.renderer.width/2 ,this.game.renderer.height/2, 'reaper2', '0_Reaper_Man_Idle Blinking_000').setDepth(3).setScale(0.5);
        reaper3 = this.physics.add.sprite(this.game.renderer.width/2 ,this.game.renderer.height/2, 'reaper3').setDepth(3).setScale(0.5);

        leftButton = this.add.image(this.game.renderer.width/2 -240 ,this.game.renderer.height/2, 'arrowButton', 'Button_78').setDepth(1).setScale(0.6, 0.55);
        rightButton =this.add.image(this.game.renderer.width/2 + 240 ,this.game.renderer.height/2, 'arrowButton').setDepth(1).setScale(0.6, 0.55);
        yesButton = this.add.image(this.game.renderer.width/2 ,this.game.renderer.height *.9, 'yesButton').setDepth(2).setScale(0.6, 0.55);
        
        this.add.text(this.game.renderer.width/2- 90  ,this.game.renderer.height*.02, 'Character\n    Select', {
            fontFamily: 'Font',
            fontStyle: 'Bold',
            fontSize: '28.5px',
            color: '#abc8c3',
        }).setDepth(2);
        
        reaper2.setVisible(false);
        reaper3.setVisible(false);

        backButton.setInteractive();
        yesButton.setInteractive();
        rightButton.setInteractive();
        leftButton.setInteractive();
        backButton.on('pointerover', ()=>{
            backButton.setTexture('backButton', 'GUI_34');            
        });
        backButton.on('pointerout', ()=>{
            backButton.setTexture('backButton', 'GUI_33');           
        });
        backButton.on('pointerdown', ()=>{
            backButton.setTexture('backButton', 'GUI_35');           
        });
        backButton.on('pointerup', ()=>{        
                   
            if (scene == 1){
                this.scene.start('menu');
            }else if (scene == 2){
                this.scene.start('levelSelect');
            }
        });

        rightButton.on('pointerover', ()=>{
            rightButton.setTexture('arrowButton', 'Button_71');            
        });
        rightButton.on('pointerout', ()=>{
            rightButton.setTexture('arrowButton', 'Button_70');           
        });
        rightButton.on('pointerdown', ()=>{
            rightButton.setTexture('arrowButton', 'Button_72');     
            
            if (character_number == 1){
                
                reaper3.setVisible(false);
                reaper2.setVisible(true);
                reaper.setVisible(false);
                character_number = 2;
                 
            } else if (character_number == 2){
                
                reaper3.setVisible(true);
                reaper2.setVisible(false);
                reaper.setVisible(false);
                character_number = 3;
            }  
        });
        rightButton.on('pointerup', ()=>{      
            console.log(character_number);  
            rightButton.setTexture('arrowButton', 'Button_70'); 
            
        });

        leftButton.on('pointerover', ()=>{
            leftButton.setTexture('arrowButton', 'Button_79');            
        });
        leftButton.on('pointerout', ()=>{
            leftButton.setTexture('arrowButton', 'Button_78');           
        });
        leftButton.on('pointerdown', ()=>{
            leftButton.setTexture('arrowButton', 'Button_80');     
             
            if (character_number == 2){
                reaper.setVisible(true);
                reaper2.setVisible(false);
                reaper3.setVisible(false);
                character_number = 1;
                 
            } else if (character_number == 3){
                reaper3.setVisible(false);
                reaper2.setVisible(true);
                reaper.setVisible(false);
                character_number = 2;
                  
            }    
        });
        leftButton.on('pointerup', ()=>{        
            leftButton.setTexture('arrowButton', 'Button_78');
        });

        yesButton.on('pointerover', ()=>{
            yesButton.setTexture('yesButton', 'GUI_06');            
        });
        yesButton.on('pointerout', ()=>{
            yesButton.setTexture('yesButton', 'GUI_05');           
        });
        yesButton.on('pointerdown', ()=>{
            yesButton.setTexture('yesButton', 'GUI_07');           
        });
        yesButton.on('pointerup', ()=>{        
            yesButton.setTexture('yesButton', 'GUI_05');     
            character_number;
            this.scene.start("levelSelect");
        });

       
        reaper.anims.play('idle_blink1');
    
        reaper2.anims.play('idle_blink2');
    
        reaper3.anims.play('idle_blink3');
        

       
    }
    
}