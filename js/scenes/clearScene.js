class ClearScene extends Phaser.Scene{
    constructor(){
        super('clearScene');
    }
    init(data){
        console.log(data, 'got it');
    }
    create(){
        timer = 30;
        musicCredits.play();
        credits = this.add.image(this.game.renderer.width/2 ,this.game.renderer.height/2-150, 'credits').setScale(0.7).setDepth(1);
        bg = this.add.image(this.game.renderer.width/2 ,this.game.renderer.height*.5, 'bg').setScale(1).setDepth(-2);
        yesButton = this.add.image(this.game.renderer.width/2 ,this.game.renderer.height*.85, 'nameButton').setScale(0.6).setDepth(1);
        this.add.text(this.game.renderer.width/2 - 48  ,this.game.renderer.height*.785, ' Main\nMenu', {
            fontFamily: 'Font',
            fontStyle: 'Bold',
            fontSize: '35.5px',
            color: '#5e9d00',
        }).setDepth(2);
        yesButton.setInteractive();

        yesButton.on('pointerover', ()=>{
            //this.text.setColor('#92bf00');
            yesButton.setTexture('nameButton', 'Button_06');
        });
        yesButton.on('pointerout', ()=>{
            yesButton.setTexture('nameButton', 'Button_05');
            //this.text.setColor('#5e9d00');
        });
        yesButton.on('pointerdown', ()=>{
            yesButton.setTexture('nameButton', 'Button_07');
        });
        yesButton.on('pointerup', ()=>{
            yesButton.setTexture('nameButton', 'Button_05');
            
            musicCredits.stop();
            this.scene.start('menu');
        });

        tween = this.tweens.add({
            targets: credits,
            alpha: 1,
            duration: 3000,
            ease: "Power2",
            delay: 200,
        });
        tween = this.tweens.add({
            targets: credits,
            y: this.game.renderer.height/2-200,
            duration: 1500,
            ease: "Sine.easeInOut",
            repeat: -1,
            yoyo: true
        });

        reaper = this.physics.add.sprite(this.game.renderer.width/2 - 150 ,this.game.renderer.height/2+100, 'reaper').setDepth(3).setScale(0.3);            
        reaper2 = this.physics.add.sprite(this.game.renderer.width/2 - 250,this.game.renderer.height/2+140, 'reaper2').setDepth(3).setScale(0.3);
        reaper3 = this.physics.add.sprite(this.game.renderer.width/2  - 350,this.game.renderer.height/2+180, 'reaper3').setDepth(3).setScale(0.3);           
        Golem1 = this.physics.add.sprite(this.game.renderer.width/2 + 150,this.game.renderer.height/2+100, 'Golem1').setDepth(3).setScale(0.3);            
        Golem2 = this.physics.add.sprite(this.game.renderer.width/2 + 250,this.game.renderer.height/2+140, 'Golem2').setDepth(3).setScale(0.3);
        Golem3 = this.physics.add.sprite(this.game.renderer.width/2 + 350,this.game.renderer.height/2+180, 'Golem3').setDepth(3).setScale(0.3);           
        Golem1.flipX = true;
        Golem2.flipX = true;
        Golem3.flipX = true;


        reaper.anims.play('idle_blink1', true);
        reaper2.anims.play('idle_blink2', true);
        reaper3.anims.play('idle_blink3', true);
        Golem1.anims.play('enemyIdle1', true);
        Golem2.anims.play('enemyIdle2', true);
        Golem3.anims.play('enemyIdle3', true);

        
    }
  
    update(){

        if (timer>0){
            timer -= 0.3;
        }else{
            //this.scene.start('menu');
        }
    }
}