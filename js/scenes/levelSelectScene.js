var numButton1, numButton2, numButton3, numButton4, numButton5;
class levelSelectScene extends Phaser.Scene{
    constructor(){
        super('levelSelect');
    }

    create(){
        character_number;
        console.log(character_number);
        this.add.image(this.game.renderer.width/2 ,this.game.renderer.height*.5, 'bgBlur').setScale(1);
        this.add.image(this.game.renderer.width/2 ,this.game.renderer.height*.5, 'level_bg').setScale(0.5,0.7);
        backButton = this.add.image(this.game.renderer.width/2 -110 ,this.game.renderer.height*.827, 'backButton').setDepth(1).setScale(0.6, 0.55);
        settingsButton = this.add.image(this.game.renderer.width/2 + 110,this.game.renderer.height*.827, 'settingsButton').setDepth(1).setScale(0.6, 0.55);
        charButton = this.add.image(this.game.renderer.width/2 ,this.game.renderer.height*.827, 'charButton').setDepth(1).setScale(0.6, 0.55);
        numButton1 = this.add.image(this.game.renderer.width/2 - 100 ,this.game.renderer.height *.55 - 150, 'numberButton').setDepth(1).setScale(0.6, 0.55);
        numButton2 = this.add.image(this.game.renderer.width/2 + 100 ,this.game.renderer.height *.55 - 150, 'numberButton').setDepth(1).setScale(0.6, 0.55);
        numButton3 = this.add.image(this.game.renderer.width/2 - 100 ,this.game.renderer.height *.7 - 150, 'numberButton').setDepth(1).setScale(0.6, 0.55);
        numButton4 = this.add.image(this.game.renderer.width/2 +100 ,this.game.renderer.height *.7 - 150, 'numberButton').setDepth(1).setScale(0.6, 0.55);
        // numButton5 = this.add.image(this.game.renderer.width/2 ,this.game.renderer.height *.85 - 150, 'numberButton').setDepth(1).setScale(0.6, 0.55);
        
        this.add.text(this.game.renderer.width/2 - 50  ,this.game.renderer.height*.105, ' Level\nSelect', {
            fontFamily: 'Font',
            fontStyle: 'Bold',
            fontSize: '26.5px',
            color: '#abc8c3',
        }).setDepth(2);

        this.add.text(this.game.renderer.width/2 - 110  ,this.game.renderer.height*.3, '1', {
            fontFamily: 'Font',
            fontStyle: 'Bold',
            fontSize: '50px',
            color: '#5e9d00',
        }).setDepth(2);

        this.add.text(this.game.renderer.width/2 + 85  ,this.game.renderer.height*.3, '2', {
            fontFamily: 'Font',
            fontStyle: 'Bold',
            fontSize: '50px',
            color: '#5e9d00',
        }).setDepth(2);

        this.add.text(this.game.renderer.width/2 - 115  ,this.game.renderer.height*.45, '3', {
            fontFamily: 'Font',
            fontStyle: 'Bold',
            fontSize: '50px',
            color: '#5e9d00',
        }).setDepth(2);

        this.add.text(this.game.renderer.width/2 + 85 ,this.game.renderer.height*.45, '4', {
            fontFamily: 'Font',
            fontStyle: 'Bold',
            fontSize: '50px',
            color: '#5e9d00',
        }).setDepth(2);

        // this.add.text(this.game.renderer.width/2 - 15,this.game.renderer.height *.6, '5', {
        //     fontFamily: 'Font',
        //     fontStyle: 'Bold',
        //     fontSize: '50px',
        //     color: '#5e9d00',
        // }).setDepth(2);


        backButton.setInteractive();
        settingsButton.setInteractive();
        charButton.setInteractive();
        numButton1.setInteractive();
        numButton2.setInteractive();
        numButton3.setInteractive();
        numButton4.setInteractive();
        // numButton5.setInteractive();
        
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
            console.log('sound is = ',playSound);         
            this.scene.start('menu');
        });

        numButton1.on('pointerover', ()=>{
            numButton1.setTexture('numberButton', 'Button_10');            
        });
        numButton1.on('pointerout', ()=>{
            numButton1.setTexture('numberButton', 'Button_09');           
        });
        numButton1.on('pointerdown', ()=>{
            numButton1.setTexture('numberButton', 'Button_11');           
        });
        numButton1.on('pointerup', ()=>{        
            numButton1.setTexture('numberButton', 'Button_09');  
            MuteMusic();  
            music.stop();
            character_number;
            this.scene.start('grassLevel'); 
        });
        numButton2.on('pointerover', ()=>{
            numButton2.setTexture('numberButton', 'Button_10');            
        });
        numButton2.on('pointerout', ()=>{
            numButton2.setTexture('numberButton', 'Button_09');           
        });
        numButton2.on('pointerdown', ()=>{
            numButton2.setTexture('numberButton', 'Button_11');           
        });
        numButton2.on('pointerup', ()=>{        
            numButton2.setTexture('numberButton', 'Button_09');  
            MuteMusic();   
            music.stop();
            character_number;
            this.scene.start('desertLevel'); 
        });
        numButton3.on('pointerover', ()=>{
            numButton3.setTexture('numberButton', 'Button_10');            
        });
        numButton3.on('pointerout', ()=>{
            numButton3.setTexture('numberButton', 'Button_09');           
        });
        numButton3.on('pointerdown', ()=>{
            numButton3.setTexture('numberButton', 'Button_11');           
        });
        numButton3.on('pointerup', ()=>{        
            numButton3.setTexture('numberButton', 'Button_09');  
            MuteMusic();  
            music.stop();
            character_number;
            this.scene.start('graveyardLevel');    
        });
        numButton4.on('pointerover', ()=>{
            numButton4.setTexture('numberButton', 'Button_10');            
        });
        numButton4.on('pointerout', ()=>{
            numButton4.setTexture('numberButton', 'Button_09');           
        });
        numButton4.on('pointerdown', ()=>{
            numButton4.setTexture('numberButton', 'Button_11');           
        });
        numButton4.on('pointerup', ()=>{        
            numButton4.setTexture('numberButton', 'Button_09');  
            MuteMusic();    
            music.stop();
            character_number;
            this.scene.start('winterLevel');   
        });
        // numButton5.on('pointerover', ()=>{
        //     numButton5.setTexture('numberButton', 'Button_10');            
        // });
        // numButton5.on('pointerout', ()=>{
        //     numButton5.setTexture('numberButton', 'Button_09');           
        // });
        // numButton5.on('pointerdown', ()=>{
        //     numButton5.setTexture('numberButton', 'Button_11');           
        // });
        // numButton5.on('pointerup', ()=>{        
        //     numButton5.setTexture('numberButton', 'Button_09');     
        // });

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
            settingsButton.setTexture('settingsButton', 'GUI_81');
            //music.stop()
            Sound = false;
            scene = 2;
            this.scene.start('settings', 'settingsScene');
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
            charButton.setTexture('charButton', 'Button_34');
            scene = 2;
            this.scene.start('characterSelect');
        });
    }
}