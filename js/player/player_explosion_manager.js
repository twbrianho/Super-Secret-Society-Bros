class PlayerExplosionManager {
    constructor() {
        this.aliveExplosions = game.add.physicsGroup();
        this.aliveExplosions.enableBody = true;
        this.aliveExplosions.physicsBodyType = Phaser.Physics.ARCADE;
        this.aliveExplosions.createMultiple(4, 'explosionPlayer');
        this.aliveExplosions.callAll('play', null, 'explode');
        this.aliveExplosions.setAll('anchor.x', 0.5);
        this.aliveExplosions.setAll('anchor.y', 0.5);
        this.deadExplosions = game.add.physicsGroup();
        this.deadExplosions.enableBody = true;
        this.deadExplosions.physicsBodyType = Phaser.Physics.ARCADE;
        this.deadExplosions.createMultiple(2, 'explosionDead');
        this.deadExplosions.callAll('play', null, 'explode');
        this.deadExplosions.setAll('anchor.x', 0.5);
        this.deadExplosions.setAll('anchor.y', 0.5);
    }

    spawn(player, dead) {
        var explosion;
        if (dead) {
            explosion = this.deadExplosions.getFirstExists(false);
        } else {
            explosion = this.aliveExplosions.getFirstExists(false);
        }
        if (explosion) {
            explosion.reset(player.x, player.y);
            explosion.scale.setTo(1.5, 1.5);
            explosion.animations.add('explode');
            explosion.play('explode', 12, false, true);
        }
    }
}