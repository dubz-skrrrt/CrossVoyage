
class LoadScene extends Phaser.Scene{
    constructor(){
        super({key: 'loader', active: true,
               pack: {
                   files: [
                       {   
                            
                           type: 'image',
                           key: 'logo',
                           url: 'assets/images/UI/logo.png'
                       }
                   ]
               }
    
    });
    }

    init(){
        
    }
    preload(){
       
        curScene = this.scene;
        //UI
        this.load.image('level_bg', 'assets/images/windows/Windows_02.png');
        this.load.image('character_bg', 'assets/images/windows/Windows_08.png');
        this.load.image('settings_bg', 'assets/images/windows/Windows_12.png');
        //this.load.image('coin_bg', 'assets/images/windows/Windows_36.png');
        this.load.image('lives', 'assets/images/windows/Windows_31.png');
        //BGs
        this.load.image('bg', 'assets/images/grass/png/BG/BG.png');
        this.load.image('desertbg', 'assets/images/desert/png/BG.png');
        this.load.image('graveyardbg', 'assets/images/graveyard/png/BG.png');
        this.load.image('winterbg', 'assets/images/winter/png/BG/BG.png');
        this.load.image('bgBlur', 'assets/images/grass/png/BG/BG_blur.png');
        this.load.image('gameLogo', 'assets/images/UI/gameLogo.png');
        this.load.image('credits', 'assets/images/UI/Credits.png');
        //tilesets
        this.load.image('TileGrass', 'assets/images/grass/grass.png');
        this.load.image('TileDesert', 'assets/images/desert/desertTiles.png');
        this.load.image('TileGrave', 'assets/images/graveyard/graveyard.png');
        this.load.image('TileWinter', 'assets/images/winter/winter.png');
        this.load.image('TileSpace', 'assets/images/scifi/sciFi.png');
        this.load.image('Crate', 'assets/images/grass/png/Object/Crate.png');
        this.load.image('StoneBlock', 'assets/images/desert/png/Objects/StoneBlock.png');
        this.load.image('objects', 'assets/images/objects.png');
        //atlas Sprites
        this.load.atlas('nameButton', 'assets/images/UI/button.png', 'assets/images/JSON/button.json');
        this.load.atlas('addminusButton', 'assets/images/UI/add_minusBtn.png', 'assets/images/JSON/add_minusBtn.json');
        this.load.atlas('settingsButton', 'assets/images/UI/settings.png', 'assets/images/JSON/settings.json');
        this.load.atlas('musicButton', 'assets/images/UI/musicBtn.png', 'assets/images/JSON/musicBtn.json');
        this.load.atlas('backButton', 'assets/images/UI/backBtn.png', 'assets/images/JSON/backBtn.json');
        this.load.atlas('yesButton', 'assets/images/UI/yesBtn.png', 'assets/images/JSON/yesBtn.json');
        this.load.atlas('noButton', 'assets/images/UI/noBtn.png', 'assets/images/JSON/noBtn.json');
        this.load.atlas('playButton', 'assets/images/UI/playBtn.png', 'assets/images/JSON/playBtn.json');
        this.load.atlas('levelsButton', 'assets/images/UI/levelsBtn.png', 'assets/images/JSON/levelsBtn.json');
        this.load.atlas('numberButton', 'assets/images/UI/numberBtn.png', 'assets/images/JSON/numberBtn.json');
        this.load.atlas('charButton', 'assets/images/UI/characterBtn.png', 'assets/images/JSON/characterBtn.json');
        this.load.atlas('arrowButton', 'assets/images/UI/arrows.png', 'assets/images/JSON/arrows.json');
        //sprites
        this.load.atlas('star', 'assets/sprites/star.png', 'assets/sprites/star.json');
        this.load.atlas('reaper', 'assets/sprites/reaper.png', 'assets/sprites/reaper.json');
        this.load.atlas('reaper2', 'assets/sprites/reaper2.png', 'assets/sprites/reaper2.json');
        this.load.atlas('reaper3', 'assets/sprites/reaper3.png', 'assets/sprites/reaper3.json');
        this.load.atlas('Golem1', 'assets/sprites/enemy1.png', 'assets/sprites/enemy1.json');
        this.load.atlas('Golem2', 'assets/sprites/enemy2.png', 'assets/sprites/enemy2.json');
        this.load.atlas('Golem3', 'assets/sprites/enemy3.png', 'assets/sprites/enemy3.json');
        this.load.atlas('weapon1', 'assets/images/UI/ReaperStrike1.png', 'assets/images/JSON/ReaperStrike1.json');
        this.load.atlas('weapon2', 'assets/images/UI/ReaperStrike2.png', 'assets/images/JSON/ReaperStrike2.json');
        this.load.atlas('weapon3', 'assets/images/UI/ReaperStrike3.png', 'assets/images/JSON/ReaperStrike3.json');
        //music and sounds
        this.load.audio('title music', 'assets/sounds/Intro Theme.mp3');
        this.load.audio('level1', 'assets/sounds/Grasslands Theme.mp3');
        this.load.audio('level2', 'assets/sounds/Desert Theme.mp3');
        this.load.audio('level3', 'assets/sounds/Dungeon Theme.mp3');
        this.load.audio('level4', 'assets/sounds/Iceland Theme.mp3');
        this.load.audio('level5', 'assets/sounds/Boss Theme.mp3');
        this.load.audio('creditsTheme', 'assets/sounds/little town.ogg');
        this.load.audio('attackhit', 'assets/sounds/soundfx/Socapex - new_hits_4.wav', {
            instances: 1
          });
          this.load.audio('diedhit', 'assets/sounds/yelling sounds/3grunt6.wav', {
            instances: 1
          });
          this.load.audio('diedenemy', 'assets/sounds/monster/deathe.wav', {
            instances: 1
          });
        //maps
        this.load.tilemapTiledJSON('Map1', 'assets/maps/level1.json');
        this.load.tilemapTiledJSON('Map2', 'assets/maps/level2.json');
        this.load.tilemapTiledJSON('Map3', 'assets/maps/level3.json');
        this.load.tilemapTiledJSON('Map4', 'assets/maps/level4.json');

        
        var progressBar = this.add.graphics();
        var progressBox = this.add.graphics({
            fillStyle:{
                color: 0x22282b
            }
        });
        
        progressBar.fillStyle(0xc0d6c0, 0.3);
        progressBox.fillRect(this.game.renderer.width/2 - 240 ,this.game.renderer.height/2-30, 460, 50).setDepth(-1);

        var width = this.cameras.main.width;
        var height = this.cameras.main.height;
        var loadingText = this.make.text({
            x: width / 2 + 10,
            y: height / 2 - 50,
            text: 'Loading...',
            style: {
                font: '26px Font',
                fill: '#ffffff'
            }
        });
        loadingText.setOrigin(0.5, 0.5);

        var percentText = this.make.text({
            x: width / 2,
            y: height / 2 - 5,
            text: '0%',
            style: {
                font: '18px Font',
                fill: '#ffffff'
            }
        });
        percentText.setOrigin(0.5, 0.5);

        var assetText = this.make.text({
            x: width / 2+10,
            y: height / 2 + 50,
            text: '',
            style: {
                font: '22px Font',
                fill: '#ffffff'
            }
        });
        assetText.setOrigin(0.5, 0.5);
        this.load.image('logo', 'assets/images/logo.png');
        for (var i; i < 1000; i++){
            this.load.image('logo' + i, 'assets/images/logo.png');
            
        }
        
        this.load.on("progress", (percent)=>{
            
            progressBar.clear();
            progressBar.fillStyle(0xc0d6c0, 1);
            progressBar.fillRect(this.game.renderer.width/2-230 ,this.game.renderer.height/2-20, 440 * percent, 30);
            percentText.setText(parseInt(percent* 100) + '%');
            
        });

        this.load.on('fileprogress', (file) =>{
            assetText.setText('Loading asset: ' + file.key);

        });
         
        this.load.on('complete', ()=> {
            progressBar.destroy();
            progressBox.destroy();
            loadingText.destroy();
            percentText.destroy();
            assetText.destroy();
            console.log('complete');

            
        });

        
    }

    create(){
        
        logo = this.add.image(this.game.renderer.width/2 ,this.game.renderer.height*.5, 'logo').setScale(0.6);
        delayedEvent = this.time.delayedCall(1500, fadePicture, this);
     
        tween = this.tweens.add({
            targets: logo,
            duration: 1200,
            alpha: 0,
            delay: 500,
            ease: "Power2"
        });
        logo.alpha = 1;
            
        anims = this.anims;
        
        anims.create({
            key: 'spinning',
            frames: anims.generateFrameNames('arrow', {
                prefix: 'speed',
                start: 0,
                end: 16
                }),
                frameRate: 10,
                repeat: -1
        });
        //weapon strike
        this.anims.create({
            key: 'weaponStrike1',
            frames: anims.generateFrameNames('weapon1', {prefix: 'SlashFX_', start: 0, end: 1, zeroPad: 3}),
            frameRate: 15,
            showOnStart: false,
            hideOnComplete: true
        });
        this.anims.create({
            key: 'weaponStrike2',
            frames: anims.generateFrameNames('weapon2', {prefix: 'SlashFX_', start: 0, end: 1, zeroPad: 3}),
            frameRate: 15,
            showOnStart: false,
            hideOnComplete: true
        });
        this.anims.create({
            key: 'weaponStrike3',
            frames: anims.generateFrameNames('weapon3', {prefix: 'SlashFX_', start: 0, end: 1, zeroPad: 3}),
            frameRate: 15,
            showOnStart: false,
            hideOnComplete: true
        });
        //Reapers-PlayerCharacter
        anims.create({
            key: 'idle_blink1',
            frames: anims.generateFrameNames('reaper', {prefix: '0_Reaper_Man_Idle Blinking_',start: 0, end: 17, zeroPad: 3}),
                frameRate: 15,
                repeat: -1
        });
        anims.create({
            key: 'walk1',
            frames: anims.generateFrameNames('reaper', {prefix: '0_Reaper_Man_Walking_',start: 0, end: 23, zeroPad: 3}),
                frameRate: 15,
                repeat: -1
        });
        anims.create({
            key: 'run1',
            frames: anims.generateFrameNames('reaper', {prefix: '0_Reaper_Man_Running_',start: 0, end: 11, zeroPad: 3}),
                frameRate: 15,
                repeat: -1
        });
        anims.create({
            key: 'slash1',
            frames: anims.generateFrameNames('reaper', {prefix: '0_Reaper_Man_Slashing_',start: 0, end: 11, zeroPad: 3}),
                frameRate: 20,
             
        });
        anims.create({
            key: 'jump1',
            frames: anims.generateFrameNames('reaper', {prefix: '0_Reaper_Man_Jump Loop_',start: 0, end: 11, zeroPad: 3}),
                frameRate: 15,
                repeat: -1
        });
        anims.create({
            key: 'falling1',
            frames: anims.generateFrameNames('reaper', {prefix: '0_Reaper_Man_Falling Down_',start: 0, end: 5, zeroPad: 3}),
                frameRate: 15,
                repeat: -1
        });
        anims.create({
            key: 'dead1',
            frames: anims.generateFrameNames('reaper', {prefix: '0_Reaper_Man_Dying_',start: 0, end: 14, zeroPad: 3}),
                frameRate: 15,
        });
        anims.create({
            key: 'hurt1',
            frames: anims.generateFrameNames('reaper', {prefix: '0_Reaper_Man_Hurt_',start: 0, end: 11, zeroPad: 3}),
                frameRate: 15,
                repeat: -1
        });
        
        anims.create({
            key: 'idle_blink2',
            frames: anims.generateFrameNames('reaper2', {prefix: '0_Reaper_Man_Idle Blinking_',start: 0, end: 17, zeroPad: 3}),
                frameRate: 15,
                repeat: -1
        });
        anims.create({
            key: 'walk2',
            frames: anims.generateFrameNames('reaper2', {prefix: '0_Reaper_Man_Walking_',start: 0, end: 23, zeroPad: 3}),
                frameRate: 15,
                repeat: -1
        });
        anims.create({
            key: 'run2',
            frames: anims.generateFrameNames('reaper2', {prefix: '0_Reaper_Man_Running_',start: 0, end: 11, zeroPad: 3}),
                frameRate: 15,
                repeat: -1
        });
        anims.create({
            key: 'slash2',
            frames: anims.generateFrameNames('reaper2', {prefix: '0_Reaper_Man_Slashing_',start: 0, end: 11, zeroPad: 3}),
                frameRate: 20,
                repeat: -1
        });
        anims.create({
            key: 'jump2',
            frames: anims.generateFrameNames('reaper2', {prefix: '0_Reaper_Man_Jump Loop_',start: 0, end: 11, zeroPad: 3}),
                frameRate: 15,
                repeat: -1
        });
        anims.create({
            key: 'falling2',
            frames: anims.generateFrameNames('reaper2', {prefix: '0_Reaper_Man_Falling Down_',start: 0, end: 5, zeroPad: 3}),
                frameRate: 15,
                repeat: -1
        });
        anims.create({
            key: 'dead2',
            frames: anims.generateFrameNames('reaper2', {prefix: '0_Reaper_Man_Dying_',start: 0, end: 14, zeroPad: 3}),
                frameRate: 15,
        
        });
        anims.create({
            key: 'hurt2',
            frames: anims.generateFrameNames('reaper2', {prefix: '0_Reaper_Man_Hurt_',start: 0, end: 11, zeroPad: 3}),
                frameRate: 15,
                repeat: -1
        });
    
        anims.create({
            key: 'idle_blink3',
            frames: anims.generateFrameNames('reaper3', {prefix: '0_Reaper_Man_Idle Blinking_',start: 0, end: 17, zeroPad: 3}),
                frameRate: 15,
                repeat: -1
        });
        anims.create({
            key: 'walk3',
            frames: anims.generateFrameNames('reaper3', {prefix: '0_Reaper_Man_Walking_',start: 0, end: 23, zeroPad: 3}),
                frameRate: 15,
                repeat: -1
        });
        anims.create({
            key: 'run3',
            frames: anims.generateFrameNames('reaper3', {prefix: '0_Reaper_Man_Running_',start: 0, end: 11, zeroPad: 3}),
                frameRate: 15,
                repeat: -1
        });
        anims.create({
            key: 'slash3',
            frames: anims.generateFrameNames('reaper3', {prefix: '0_Reaper_Man_Slashing_',start: 0, end: 11, zeroPad: 3}),
                frameRate: 20,
                repeat: -1
        });
        anims.create({
            key: 'jump3',
            frames: anims.generateFrameNames('reaper3', {prefix: '0_Reaper_Man_Jump Loop_',start: 0, end: 11, zeroPad: 3}),
                frameRate: 15,
                repeat: -1
        });
        anims.create({
            key: 'falling3',
            frames: anims.generateFrameNames('reaper3', {prefix: '0_Reaper_Man_Falling Down_',start: 0, end: 5, zeroPad: 3}),
                frameRate: 15,
                repeat: -1
        });
        anims.create({
            key: 'dead3',
            frames: anims.generateFrameNames('reaper3', {prefix: '0_Reaper_Man_Dying_',start: 0, end: 14, zeroPad: 3}),
                frameRate: 15,
        });
        anims.create({
            key: 'hurt3',
            frames: anims.generateFrameNames('reaper3', {prefix: '0_Reaper_Man_Hurt_',start: 0, end: 11, zeroPad: 3}),
                frameRate: 15,
                repeat: -1
        });

        //Golems-enemyCharacters
        anims.create({
            key: 'dying1',
            frames: anims.generateFrameNames('Golem1', {prefix: '0_Golem_Dying_',start: 0, end: 14, zeroPad: 3}),
                frameRate: 15,
             
        });
        anims.create({
            key: 'hurtEnemy1',
            frames: anims.generateFrameNames('Golem1', {prefix: '0_Golem_Hurt_',start: 0, end: 11, zeroPad: 3}),
                frameRate: 15,
                repeat: -1
        });
        anims.create({
            key: 'enemyWalk1',
            frames: anims.generateFrameNames('Golem1', {prefix: '0_Golem_Walking_',start: 0, end: 23, zeroPad: 3}),
                frameRate: 15,
                repeat: -1
        });
        anims.create({
            key: 'enemyIdle1',
            frames: anims.generateFrameNames('Golem1', {prefix: '0_Golem_Idle Blinking_',start: 0, end: 17, zeroPad: 3}),
                frameRate: 15,
                repeat: -1
        });
        anims.create({
            key: 'dying2',
            frames: anims.generateFrameNames('Golem2', {prefix: '0_Golem_Dying_',start: 0, end: 14, zeroPad: 3}),
                frameRate: 15,
                
        });
        anims.create({
            key: 'hurtEnemy2',
            frames: anims.generateFrameNames('Golem2', {prefix: '0_Golem_Hurt_',start: 0, end: 11, zeroPad: 3}),
                frameRate: 15,
                repeat: -1
        });
        anims.create({
            key: 'enemyWalk2',
            frames: anims.generateFrameNames('Golem2', {prefix: '0_Golem_Walking_',start: 0, end: 23, zeroPad: 3}),
                frameRate: 15,
                repeat: -1
        });
        anims.create({
            key: 'enemyIdle2',
            frames: anims.generateFrameNames('Golem2', {prefix: '0_Golem_Idle Blinking_',start: 0, end: 17, zeroPad: 3}),
                frameRate: 15,
                repeat: -1
        });
        anims.create({
            key: 'dying3',
            frames: anims.generateFrameNames('Golem3', {prefix: '0_Golem_Dying_',start: 0, end: 14, zeroPad: 3}),
                frameRate: 15,
        });
        anims.create({
            key: 'hurtEnemy3',
            frames: anims.generateFrameNames('Golem3', {prefix: '0_Golem_Hurt_',start: 0, end: 11, zeroPad: 3}),
                frameRate: 15,
        });
        anims.create({
            key: 'enemyWalk3',
            frames: anims.generateFrameNames('Golem3', {prefix: '0_Golem_Walking_',start: 0, end: 23, zeroPad: 3}),
                frameRate: 15,
                repeat: -1
        });
        anims.create({
            key: 'enemyIdle3',
            frames: anims.generateFrameNames('Golem3', {prefix: '0_Golem_Idle Blinking_',start: 0, end: 17, zeroPad: 3}),
                frameRate: 15,
                repeat: -1
        });
        
        attackhit =this.sound.add('attackhit');
        diedhit = this.sound.add('diedhit');
        enemydied = this.sound.add('diedenemy');
        musicCredits = this.sound.add('creditsTheme');
    }
    update(){
        
        delayedEvent.getProgress();
        if (change){
            curScene.start('menu', 'from loader');
            volume = 1;
            playSound = true;
            Sound = true;
            music = this.sound.add('title music',{loop: true, volume: volume});
            
        }
    }
}

