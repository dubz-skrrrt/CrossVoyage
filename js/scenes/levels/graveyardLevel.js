class Level3 extends Phaser.Scene{
    constructor(){
      super("graveyardLevel");
        
    }
    create(){
        stage = 3;
        worldPhys = this.physics;

        enemies = [];
        enemyCharacter = 3;
        console.log(character_number);
        map = this.make.tilemap({ key: "Map3" });
        
        // var enemiesPosY = [500, 550, 600, 900, 1700];
        // var enemiesPosX = [2300, 2500, 3700, 6000, 8800];

        console.log(this.cache.tilemap.get('Map3').data);
        bg = this.add.image(this.game.renderer.width/2 ,this.game.renderer.height*.5, 'graveyardbg').setScale(1).setDepth(-2);
        musicGrave = this.sound.add('level3',{loop: true, volume: volume});
        musicGrave.play();
        
        var tileset = map.addTilesetImage("graveTiles", "TileGrave");
        groundLayer = map.createStaticLayer('World', tileset, 0, 0);
        groundLayer.setCollisionByExclusion([-1]);
        // waterLayer = map.createDynamicLayer('Water', tileset, 0, 0);
        // invisbleLayer = map.createStaticLayer('invisbleColliders', tileset, 0, 0);
        // invisbleLayer.setCollisionByExclusion([-1]);
        var objectset = map.addTilesetImage("objects");
        // clearLayer = map.createStaticLayer('Clear', objectset, 0, 0);
        // clearLayer.setCollisionByExclusion([-1]);
        bgLayer = map.createStaticLayer('bg', objectset, 0, 0);
        bgLayer.setCollisionByExclusion([-1]);

        if (character_number == 1){
            reaper = this.physics.add.sprite(200 , 1400, 'reaper', '0_Reaper_Man_Idle Blinking_000').setDepth(3);
            
        } else if(character_number == 2){
            reaper = this.physics.add.sprite(200,this.game.renderer.height/2 + 1600, 'reaper2', '0_Reaper_Man_Idle Blinking_000').setDepth(3);
            
        }else{
            reaper = this.physics.add.sprite(200 , this.game.renderer.height/2 + 1600, 'reaper3').setDepth(3);
            
        }
  
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
        
        // movingCrate = this.physics.add.image(9400, 1850, 'Crate').setDepth(1).setCollideWorldBounds(true).setScale(2.5, 1);
        // movingCrate.setCollideWorldBounds(true);
        // movingCrate.body.setAllowGravity(false);
        // movingCrate.body.immovable = true;

        this.physics.add.collider(groundLayer, reaper);
        //this.physics.add.collider(reaper, movingCrate, movingBlock, null, this);
        //this.physics.add.collider(reaper, clearLayer, nextStage, null, this);
       
        this.physics.world.bounds.width = groundLayer.width;
        this.physics.world.bounds.height = groundLayer.height;
        this.cameras.main.setBounds(0, 0, map.widthInPixels, map.heightInPixels);
        this.cameras.main.startFollow(reaper);
        this.physics.world.createDebugGraphic();

        //spawnEnemies(5, enemiesPosX, enemiesPosY);

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
        reaper.anims.play('idle_blink'+character_number, true);
        //stopper = false;
    }
    update(){
        speed = 175;
        
        // enemies.forEach(function arr(enemy, idx){
        //     checkEnemies(enemy, idx);
        // });

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