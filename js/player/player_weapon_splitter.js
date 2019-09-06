class PlayerWeaponSplitter {
    constructor(player) {
        this.player = player;

        this.bulletTime = 0;
        this.bulletInterval = 200;
        this.specialTime = 0;
        this.specialInterval = 500;

        this.bullets = game.add.physicsGroup();
        this.bullets.enableBody = true;
        this.bullets.physicsBodyType = Phaser.Physics.ARCADE;
        if (player.playerNum === 1) {
            this.bullets.createMultiple(300, 'bulletSplitterP1');
        } else if (player.playerNum === 2) {
            this.bullets.createMultiple(300, 'bulletSplitterP2');
        }
        this.bullets.callAll('animations.add', 'animations', 'normal', [0, 0, 0, 1, 2, 3], game.rnd.between(9, 15), true);
        this.bullets.callAll('play', null, 'normal');
        this.bullets.setAll('scale.x', 0.1);
        this.bullets.setAll('scale.y', 0.1);
        this.bullets.setAll('anchor.x', 0.5);
        this.bullets.setAll('anchor.y', 0.5);
        this.bullets.setAll('outOfBoundsKill', true);
        this.bullets.setAll('checkWorldBounds', true);
        this.bullets.forEach(function (bullet) {
            bullet.player = player;
            bullet.hitDamage = 5;
        });
    }

    fire() {
        if (game.time.now > this.bulletTime) {
            for (let i = -1; i <= 1; i++) {
                const bullet = this.bullets.getFirstExists(false);
                if (bullet) {
                    bullet.reset(this.player.sprite.x, this.player.sprite.y - 15);
                    bullet.angle = i * 10;
                    game.physics.arcade.velocityFromRotation(bullet.rotation - Math.PI / 2, 500, bullet.body.velocity);
                }
            }
            this.bulletTime = game.time.now + this.bulletInterval;
        }
    }

    special() {
        if (game.time.now > this.specialTime) {
            this.player.specials--;
            game.camera.shake(0.005, 200);
            for (let i = -30; i <= 30; i++) {
                let bullet = this.bullets.getFirstExists(false);
                if (bullet) {
                    bullet.reset(this.player.sprite.x, this.player.sprite.y - 15);
                    bullet.angle = i;
                    game.physics.arcade.velocityFromRotation(bullet.rotation - Math.PI / 2, 500, bullet.body.velocity);
                }
            }
            this.specialTime = game.time.now + this.specialInterval;
        }
    }

    debugBody() {
        this.bullets.forEachAlive(function (bullet) {
            game.debug.body(bullet);
        });
    }
}