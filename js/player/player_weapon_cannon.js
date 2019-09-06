class PlayerWeaponCannon {
    constructor(player) {
        this.player = player;

        this.bulletTime = 0;
        this.bulletInterval = 500;
        this.specialTime = 0;
        this.specialInterval = 500;

        this.bullets = game.add.physicsGroup();
        this.bullets.enableBody = true;
        this.bullets.physicsBodyType = Phaser.Physics.ARCADE;
        if (player.playerNum === 1) {
            this.bullets.createMultiple(30, 'bulletCannonP1');
        } else if (player.playerNum === 2) {
            this.bullets.createMultiple(30, 'bulletCannonP2');
        }
        this.bullets.callAll('animations.add', 'animations', 'normal', [0, 0, 0, 1, 2, 3], game.rnd.between(9, 15), true);
        this.bullets.callAll('play', null, 'normal');
        this.bullets.setAll('anchor.x', 0.5);
        this.bullets.setAll('anchor.y', 0.5);
        this.bullets.setAll('outOfBoundsKill', true);
        this.bullets.setAll('checkWorldBounds', true);
        this.bullets.forEach(function (bullet) {
            bullet.player = player;
            bullet.hitDamage = 5;
            bullet.indestructible = true;
        });
    }

    fire() {
        if (game.time.now > this.bulletTime) {
            const bullet = this.bullets.getFirstExists(false);
            if (bullet) {
                bullet.reset(this.player.sprite.x, this.player.sprite.y - 15);
                bullet.scale.setTo(0.1, 0.1);
                bullet.body.velocity.y = -400;
                this.bulletTime = game.time.now + this.bulletInterval;
            }
        }
    }

    special() {
        if (game.time.now > this.specialTime) {
            let bullet = this.bullets.getFirstExists(false);
            if (bullet) {
                this.player.specials--;
                game.camera.shake(0.005, 200);
                bullet.reset(this.player.sprite.x, this.player.sprite.y - 15);
                bullet.scale.setTo(0.5, 0.5);
                bullet.body.velocity.y = -800;
                this.specialTime = game.time.now + this.specialInterval;
            }
        }
    }

    debugBody() {
        this.bullets.forEachAlive(function (bullet) {
            game.debug.body(bullet);
        });
    }
}