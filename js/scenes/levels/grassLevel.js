var keyboard, strike= false, player, weapon;
class Level1 extends Phaser.Scene{
    constructor(){
      super("grassLevel");
        
    }
    create(){
        stage = 1;
        worldPhys = this.physics;
        curScene = this.scene;
        enemies = [];
        enemyCharacter = 1;
        console.log(character_number);
        map = this.make.tilemap({ key: "Map1" });
        
        var enemiesPosY = [500, 550, 600, 900, 1700];
        var enemiesPosX = [2300, 2500, 3700, 6000, 8800];

        console.log(this.cache.tilemap.get('Map1').data);
        bg = this.add.image(this.game.renderer.width/2 ,this.game.renderer.height*.5, 'bg').setScale(1).setDepth(-2);
        musicGrass = this.sound.add('level1',{loop: true, volume: volume});
        musicGrass.play();
        
        var tileset = map.addTilesetImage("grass", "TileGrass");
        groundLayer = map.createStaticLayer('World', tileset, 0, 0);
        groundLayer.setCollisionByProperty({ collider: true });
        waterLayer = map.createDynamicLayer('Water', tileset, 0, 0);
        invisbleLayer = map.createStaticLayer('invisbleColliders', tileset, 0, 0);
        invisbleLayer.setCollisionByExclusion([-1]);
        var objectset = map.addTilesetImage("objects");
        clearLayer = map.createStaticLayer('Clear', objectset, 0, 0);
        clearLayer.setCollisionByExclusion([-1]);
        bgLayer = map.createDynamicLayer('bg', objectset, 0, 0);
        bgLayer.setCollisionByExclusion([-1]);

        if (character_number == 1){
            reaper = this.physics.add.sprite(3000 , 500, 'reaper', '0_Reaper_Man_Idle Blinking_000').setDepth(3);
            
        } else if(character_number == 2){
            reaper = this.physics.add.sprite(200,this.game.renderer.height/2 + 1600, 'reaper2', '0_Reaper_Man_Idle Blinking_000').setDepth(3);
            
        }else{
            reaper = this.physics.add.sprite(200 , this.game.renderer.height/2 + 1600, 'reaper3').setDepth(3);
            
        }
        //connt.add(reaper);
        reaper.setCollideWorldBounds(true);
        reaper.setSize(265, 500);
        reaper.setOffset(310, 240);
        reaper.setScale(0.3)
        reaper.body.gravity.y = 520;
        reaper.alive = true;
        weapon = this.physics.add.sprite(reaper.body.x, reaper.body.y, 'weapon'+character_number).setVisible(false).setDepth(1).setScale(0.3);
        weapon.setSize(150, 350);
        weapon.setOffset(320, 50);
        weapon.body.immovable = true;
        //player = this.add.container(reaper.body.x, reaper.body.y, [this.add.sprite(0,0, 'reaper'), weapon = this.add.sprite(270, 100, 'weapon1').setVisible(false)]).setDepth(1).setScale(0.3);
        movingCrate = this.physics.add.image(9400, 1850, 'Crate').setDepth(1).setCollideWorldBounds(true).setScale(2.5, 1);
        movingCrate.setCollideWorldBounds(true);
        movingCrate.body.setAllowGravity(false);
        movingCrate.body.immovable = true;

        this.physics.add.collider(groundLayer, reaper);
        this.physics.add.collider(reaper, movingCrate, movingBlock, null, this);
        this.physics.add.collider(reaper, clearLayer, nextStage, null, this);
       
        this.physics.world.bounds.width = groundLayer.width;
        this.physics.world.bounds.height = groundLayer.height;
        this.cameras.main.setBounds(0, 0, map.widthInPixels, map.heightInPixels);
        this.cameras.main.startFollow(reaper);
        this.physics.world.createDebugGraphic();

        spawnEnemies(5, enemiesPosX, enemiesPosY);

       // Create worldLayer collision graphic above the player, but below the help text
        // const graphics = this.add
        // .graphics()
        // .setAlpha(0.75)
        // .setDepth(20);
        // groundLayer.renderDebug(graphics, {
        // tileColor: null, // Color of non-colliding tiles
        // collidingTileColor: new Phaser.Display.Color(243, 134, 48, 255), // Color of colliding tiles
        // faceColor: new Phaser.Display.Color(40, 39, 37, 255) // Color of colliding face edges
        // });

        bg.setScrollFactor(0);
        
        keyboard = this.input.keyboard.addKeys("W, A, S, D, SHIFT, F");
        anims = this.anims;
        reaper.anims.play('idle_blink'+character_number, true);
        stopper = false;
    }
    update(){
        speed = 175;
        
        enemies.forEach(function arr(enemy, idx){
            checkEnemies(enemy, idx);
        });

        if (stopper == true){
            if (movingCrate.body.y >= 1100){
                movingCrate.body.velocity.y -= 2;
            }else{
                tween.stop();
                movingCrate.body.velocity.y = 0;
            }
            
        }
        checkPlayerMovement();
            
    }
}
