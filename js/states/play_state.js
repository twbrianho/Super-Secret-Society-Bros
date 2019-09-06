let playState = {

    create: function () {
        this.notWon = true;

        SFX_EXTRA_HEART = game.add.audio('sfxExtraHeart', GLOBAL_SFX_VOLUME);
        SFX_EXTRA_SPECIAL = game.add.audio('sfxExtraSpecial', GLOBAL_SFX_VOLUME);
        SFX_HIT_ENEMY = game.add.audio('sfxHitEnemy', GLOBAL_SFX_VOLUME * 0.8);
        SFX_KILL_ENEMY = game.add.audio('sfxKillEnemy', GLOBAL_SFX_VOLUME);
        SFX_PLAYER_HIT = game.add.audio('sfxPlayerHit', GLOBAL_SFX_VOLUME);
        SFX_WEAPON_CHANGE = game.add.audio('sfxWeaponChange', GLOBAL_SFX_VOLUME * 0.8);

        game.physics.startSystem(Phaser.Physics.ARCADE);

        this.bgManager = new BackgroundManager();

        this.controlsP1 = new Controls();
        this.controlsP2 = new Controls();

        const playerX = UI_WIDTH + 85;
        const playerY = 400;
        this.playerGroup = game.add.physicsGroup();
        this.player1 = new Player(GAME_WIDTH - playerX, playerY, this.controlsP1, 1);
        this.player2 = new Player(playerX, playerY, this.controlsP2, 2);

        this.controlsP1.bindTo(this.player1);
        this.controlsP2.bindTo(this.player2);
        this.playerGroup.add(this.player1.sprite);
        this.playerGroup.add(this.player2.sprite);

        this.pwrUpManager = new PwrUpManager(this.player1, this.player2);

        this.enemyManager = new EnemyManager(this.player1, this.player2, this.pwrUpManager);

        this.stageController = new StageController(this.enemyManager); // Pass in a stage number to start at that stage

        this.uiManager = new UIManager(this.player1, this.player2);
        this.uiBoxGroup = game.add.physicsGroup();
        this.uiBoxGroup.add(this.uiManager.uiBoxP1.sprite);
        this.uiBoxGroup.add(this.uiManager.uiBoxP2.sprite);
    },

    update: function () {
        let totalScore = this.player1.score + this.player2.score;
        let currStage = this.stageController.stageProgression[this.stageController.currStageIndex];
        if (this.notWon && currStage === "finish" && (this.player1.hearts > 0 || this.player2.hearts > 0)) {
            this.player1.sprite.kill();
            this.player2.sprite.kill();
            this.stageController.youWinUi.showScreen(totalScore);
            this.notWon = false;
        }
        game.physics.arcade.collide(this.uiBoxGroup, this.enemyManager.enemy1Manager.enemies);
        game.physics.arcade.collide(this.uiBoxGroup, this.enemyManager.enemy2Manager.enemies);
        game.physics.arcade.collide(this.uiBoxGroup, this.enemyManager.enemy3Manager.enemies);
        game.physics.arcade.collide(this.uiBoxGroup, this.playerGroup);
        this.stageController.checkStageProgression();
        this.enemyManager.update();
        this.controlsP1.update();
        this.controlsP2.update();
        this.player1.update();
        this.player2.update();
        this.uiManager.update();
        this.pwrUpManager.update();
        this.bgManager.update();
    },

    render: function () {
        // this.enemyManager.debugBody();
        // this.player1.weapon.bulletsBlaster.debugBody();
    }
};