var addButton, minusButton, volBtn;
// var volume = music.volume;
class SettingsScene extends Phaser.Scene{
    constructor(){
        super('settings');
    }
    init(data){
        console.log(data);
    }
    create(){
        this.add.image(this.game.renderer.width/2 ,this.game.renderer.height*.5, 'bgBlur').setScale(1);
        this.add.image(this.game.renderer.width/2 ,this.game.renderer.height*.5, 'settings_bg').setScale(1, 1.3);
        backButton = this.add.image(this.game.renderer.width/2 - 410 ,this.game.renderer.height*.1, 'backButton').setDepth(1).setScale(0.5);
        addButton = this.add.image(this.game.renderer.width/2 + 200 ,this.game.renderer.height*.40, 'addminusButton').setDepth(1).setScale(0.5);
        minusButton = this.add.image(this.game.renderer.width/2 - 200 ,this.game.renderer.height*.40, 'addminusButton', 'Button_82').setDepth(1).setScale(0.5);

       
        
        // music.play({
        //     loop: true
        // });
        
        backButton.setInteractive();
        addButton.setInteractive();
        minusButton.setInteractive();

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
            console.log('sound is also = ',Sound);
            // music.stop()
            if (scene == 1){
                this.scene.start('menu');
            }else if (scene == 2){
                this.scene.start('levelSelect');
            }
            
        });

        addButton.on('pointerover', ()=>{
            addButton.setTexture('addminusButton', 'Button_75');
            
        });

        addButton.on('pointerout', ()=>{
            addButton.setTexture('addminusButton', 'Button_74');
            
        });
        addButton.on('pointerdown', ()=>{
            addButton.setTexture('addminusButton', 'Button_76');
            
        });
        addButton.on('pointerup', ()=>{
            volBtn = 1;
            music.mute = false;
            console.log(volume);
            if (volume >= 0.99){
                    addButton.setTexture('addminusButton', 'Button_77');
                    volume = 1;
                
            }else{
                if (volBtn==1){  
                    addButton.setTexture('addminusButton', 'Button_74'); 
                    music.volume += 0.1;
                    volume = music.volume;
                }
                console.log(volume*100);
            }
        });

        minusButton.on('pointerover', ()=>{
            minusButton.setTexture('addminusButton', 'Button_83');
            
        });

        minusButton.on('pointerout', ()=>{
            minusButton.setTexture('addminusButton', 'Button_82');
            
        });
        minusButton.on('pointerdown', ()=>{
            minusButton.setTexture('addminusButton', 'Button_84');
            
        });
        minusButton.on('pointerup', ()=>{
            volBtn = 2;
            console.log(volBtn);
            if (volume < 0.1){
                music.mute = true;
                minusButton.setTexture('addminusButton', 'Button_85');
            }else{
                if (volBtn == 2){
                    minusButton.setTexture('addminusButton', 'Button_82');
                    music.volume -= 0.1;
                    volume = music.volume;
                }
                console.log(volume*100);
            }
        });

        this.add.text(this.game.renderer.width/2 - 105 ,this.game.renderer.height*.12, 'SETTINGS ', {
            fontFamily: 'Font',
            fontStyle: 'Bold',
            fontSize: '40px',
            color: '#abc8c3',
        }).setDepth(2);

        this.add.text(this.game.renderer.width/2 - 105 ,this.game.renderer.height*.35, 'Sounds', {
            fontFamily: 'Font',
            fontStyle: 'Bold',
            fontSize: '50px',
            color: '#abc8c3',
        }).setDepth(2);

    }

    update(){

    }

}