class EnemyExplosionManager {
    constructor() {
        this.explosions = game.add.physicsGroup();
        this.explosions.enableBody = true;
        this.explosions.physicsBodyType = Phaser.Physics.ARCADE;
        this.explosions.createMultiple(50, 'explosionEnemy');
        this.explosions.callAll('play', null, 'explode');
        this.explosions.setAll('anchor.x', 0.5);
        this.explosions.setAll('anchor.y', 0.5);
    }

    spawn(enemy) {
        var explosion = this.explosions.getFirstExists(false);
        if (explosion) {
            explosion.reset(enemy.x, enemy.y);
            explosion.width = enemy.width * 3;
            explosion.height = enemy.height * 3;
            explosion.animations.add('explode');
            explosion.play('explode', 12, false, true);
        }
    }
}