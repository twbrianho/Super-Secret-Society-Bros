class PlayerWeaponBlaster {
    constructor(player) {
        this.player = player;

        this.bulletTime = 0;
        this.bulletInterval = 100;
        this.specialTime = 0;
        this.specialInterval = 500;

        this.bullets = game.add.physicsGroup();
        this.bullets.enableBody = true;
        this.bullets.physicsBodyType = Phaser.Physics.ARCADE;
        if (player.playerNum === 1) {
            this.bullets.createMultiple(100, 'bulletBlasterP1');
        } else if (player.playerNum === 2) {
            this.bullets.createMultiple(100, 'bulletBlasterP2');
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
            bullet.hitDamage = 10;
        });
    }

    fire() {
        if (game.time.now > this.bulletTime) {
            const bullet = this.bullets.getFirstExists(false);
            if (bullet) {
                bullet.reset(this.player.sprite.x, this.player.sprite.y - 15);
                bullet.body.velocity.y = -600;
                this.bulletTime = game.time.now + this.bulletInterval;
            }
        }
    }

    special() {
        if (game.time.now > this.specialTime) {
            this.player.specials--;
            game.camera.shake(0.005, 200);
            for (let i = -15; i <= 15; i++) {
                let bullet = this.bullets.getFirstExists(false);
                if (bullet) {
                    bullet.reset(this.player.sprite.x, this.player.sprite.y - 15);
                    bullet.body.velocity.y = game.rnd.between(-550, -650);
                    bullet.body.velocity.x = i * 15;
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