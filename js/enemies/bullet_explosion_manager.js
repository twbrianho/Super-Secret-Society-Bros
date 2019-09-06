class BulletExplosionManager {
    constructor() {
        this.explosions = game.add.physicsGroup();
        this.explosions.enableBody = true;
        this.explosions.physicsBodyType = Phaser.Physics.ARCADE;
        this.explosions.createMultiple(200, 'explosionBullet');
        this.explosions.callAll('play', null, 'explode');
        this.explosions.setAll('anchor.x', 0.5);
        this.explosions.setAll('anchor.y', 0.5);
    }

    spawn(bullet) {
        var explosion = this.explosions.getFirstExists(false);
        if (explosion) {
            explosion.reset(bullet.x, bullet.y);
            explosion.width = bullet.width * 2;
            explosion.height = bullet.width * 2;
            explosion.animations.add('explode');
            explosion.play('explode', 12, false, true);
        }
    }
}