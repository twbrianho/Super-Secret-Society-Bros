class EnemyManager {
    constructor(player1, player2, pwrUpManager) {
        this.player1 = player1;
        this.player2 = player2;
        this.pwrUpManager = pwrUpManager;

        this.enemySpawnTimers = [];
        this.enemy1Manager = new Enemy1Manager(this.pwrUpManager);
        this.enemy2Manager = new Enemy2Manager();
        this.enemy3Manager = new Enemy3Manager();
        this.enemy4Manager = new Enemy4Manager();
        this.managerList = [this.enemy1Manager, this.enemy2Manager, this.enemy3Manager, this.enemy4Manager];

        this.enemyExplosionManager = new EnemyExplosionManager();
        this.bulletExplosionManager = new BulletExplosionManager();
    }

    updateStage(currStageData) {
        // remove timers for spawning enemies of previous stage
        this.enemySpawnTimers.forEach(function (timer) {
            game.time.events.remove(timer);
        });
        this.enemySpawnTimers = [];
        // set event timers for spawning enemies
        let enemies = currStageData.enemies;
        Object.keys(enemies).forEach(function (enemy) {
            const enemySpawnInterval = enemies[enemy];
            const enemySpawnTimer = game.time.events.loop(Phaser.Timer.SECOND * enemySpawnInterval, this.spawnEnemyType, this, enemy);
            this.enemySpawnTimers.push(enemySpawnTimer);
            // console.log("1 " + enemy + " per " + enemies[enemy] + " second(s)");
        }, this);
    }

    spawnEnemyType(enemyType) {
        switch (enemyType) {
            case 'enemy1':
                this.enemy1Manager.spawn();
                break;
            case 'enemy2':
                this.enemy2Manager.spawn();
                break;
            case 'enemy3':
                this.enemy3Manager.spawn();
                break;
            case 'enemy4':
                this.enemy4Manager.spawn();
                break;
            default:
                console.log("No enemy type of " + enemyType + " found.");
                return;
        }
    }

    update() {
        this.managerList.forEach(function (manager) {
            manager.checkCollisions(this.player1, this.player2, this.pwrUpManager, this.enemyExplosionManager, this.bulletExplosionManager);
            manager.update();
        }, this);
    }

    debugBody() {
        this.managerList.forEach(function (manager) {
            manager.debugBody();
        });
    }
}