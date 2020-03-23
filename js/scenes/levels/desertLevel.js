class Level2 extends Phaser.Scene{
    constructor(){
      super("desertLevel");
        
    }
    create(){
        stage = 2;
        worldPhys = this.physics;

        enemies = [];
        enemyCharacter = 1;
        console.log(character_number);
        map = this.make.tilemap({ key: "Map2" });
        
        var enemiesPosY = [300, 1150, 1680, 300, 300, 1590, 1200];
        var enemiesPosX = [2000, 3060, 3200, 4000, 5700, 6400, 8050];

        console.log(this.cache.tilemap.get('Map2').data);
        bg = this.add.image(this.game.renderer.width/2 ,this.game.renderer.height*.5, 'desertbg').setScale(1).setDepth(-2);
        musicDesert = this.sound.add('level2',{loop: true, volume: volume});
        musicDesert.play();
        
        var tileset = map.addTilesetImage("desertTiles", "TileDesert");
        groundLayer = map.createStaticLayer('World', tileset, 0, 0);
        groundLayer.setCollisionByExclusion([-1]);
        var tileset2 = map.addTilesetImage("grass", "TileGrass");
        waterLayer = map.createDynamicLayer('Water', tileset2, 0, 0);
        waterLayer.setCollisionByExclusion([-1]);
        invisbleLayer = map.createStaticLayer('invisbleColliders', tileset, 0, 0);
        invisbleLayer.setCollisionByExclusion([-1]);
        var objectset = map.addTilesetImage("objects");
        clearLayer = map.createStaticLayer('Clear', objectset, 0, 0);
        clearLayer.setCollisionByExclusion([-1]);
        bgLayer = map.createStaticLayer('bg', objectset, 0, 0);
        bgLayer.setCollisionByExclusion([-1]);

        if (character_number == 1){
            reaper = this.physics.add.sprite(200, this.game.renderer.height/2 + 1400, 'reaper', '0_Reaper_Man_Idle Blinking_000').setDepth(3);
            
        } else if(character_number == 2){
            reaper = this.physics.add.sprite(200, this.game.renderer.height/2 + 1400, 'reaper2', '0_Reaper_Man_Idle Blinking_000').setDepth(3);
            
        }else{
            reaper = this.physics.add.sprite(200 , this.game.renderer.height/2 + 1400, 'reaper3').setDepth(3);
            
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
        
        movingCrate = this.physics.add.image(9400, 1850, 'StoneBlock').setDepth(1).setCollideWorldBounds(true).setScale(2.5, 1);
        movingCrate.setCollideWorldBounds(true);
        movingCrate.body.setAllowGravity(false);
        movingCrate.body.immovable = true;
        
        this.physics.add.collider(groundLayer, reaper);
        this.physics.add.collider(reaper, movingCrate, movingBlock, null, this);
        this.physics.add.collider(reaper, clearLayer, nextStage, null, this);
        this.physics.add.collider(reaper, waterLayer, OutofBounds, null, this);
        
        this.physics.world.bounds.width = groundLayer.width;
        this.physics.world.bounds.height = groundLayer.height;
        this.cameras.main.setBounds(0, 0, map.widthInPixels, map.heightInPixels);
        this.cameras.main.startFollow(reaper);
        this.physics.world.createDebugGraphic();

        spawnEnemies(7, enemiesPosX, enemiesPosY);

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
        keyboard = this.input.keyboard.addKeys("W, A, S, D, SHIFT, SPACE");
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
                movingCrate.body.velocity.y = 0;
            }
            
            
        }
        checkPlayerMovement();
    }
}