class Level4 extends Phaser.Scene{
    constructor(){
      super("winterLevel");
        
    }
    create(){
        stage = 4;
        worldPhys = this.physics;

        enemies = [];
        enemyCharacter = 2;
        console.log(character_number);
        map = this.make.tilemap({ key: "Map4" });
        
        var enemiesPosY = [1490, 750, 490, 1600, 1200, , 240];
        var enemiesPosX = [3550, 2800, 4470, 5870, 7500, 7500];

        console.log(this.cache.tilemap.get('Map4').data);
        bg = this.add.image(this.game.renderer.width/2 ,this.game.renderer.height*.5, 'winterbg').setScale(1).setDepth(-2);
        musicWinter = this.sound.add('level4',{loop: true, volume: volume});
        musicWinter.play();
        
        var tileset = map.addTilesetImage("winterTiles", "TileWinter");
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
        bgLayer2 = map.createStaticLayer('bg2', objectset, 0, 0);
        bgLayer2.setCollisionByExclusion([-1]);
        bgLayer = map.createStaticLayer('bg', objectset, 0, 0);
        bgLayer.setCollisionByExclusion([-1]);
        

        if (character_number == 1){
            reaper = this.physics.add.sprite(200,this.game.renderer.height/2 + 1600, 'reaper', '0_Reaper_Man_Idle Blinking_000').setDepth(3);
            
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
   
        this.physics.add.collider(groundLayer, reaper);
        this.physics.add.collider(reaper, clearLayer, nextStage, null, this);
        this.physics.add.collider(reaper, waterLayer, OutofBounds, null, this);

        this.physics.world.bounds.width = groundLayer.width;
        this.physics.world.bounds.height = groundLayer.height;
        this.cameras.main.setBounds(0, 0, map.widthInPixels, map.heightInPixels);
        this.cameras.main.startFollow(reaper);
        this.physics.world.createDebugGraphic();

        spawnEnemies(6, enemiesPosX, enemiesPosY);

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
                tween.stop();
                movingCrate.body.velocity.y = 0;
            }
            
        }
        checkPlayerMovement();
        
    }
}