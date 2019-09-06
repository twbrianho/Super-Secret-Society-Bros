// Slowly becomes larger and invisible.
class Enemy3Manager {
    constructor() {
        this.maxAccel = 300;
        this.spawnBorder = UI_WIDTH + 40;

        this.enemies = game.add.physicsGroup();
        this.enemies.enableBody = true;
        this.enemies.physicsBodyType = Phaser.Physics.ARCADE;
        this.enemies.createMultiple(50, 'enemy3');
        this.enemies.callAll('animations.add', 'animations', 'normal', [0, 0, 0, 0, 0, 1, 2, 3, 2, 1], game.rnd.between(9, 15), true);
        this.enemies.callAll('play', null, 'normal');
        this.enemies.setAll('scale.x', 0.5);
        this.enemies.setAll('scale.y', 0.5);
        this.enemies.setAll('anchor.x', 0.5);
        this.enemies.setAll('anchor.y', 0.5);
        this.enemies.setAll('maxVelocity', 300);
        this.enemies.setAll('outOfBoundsKill', true);
        this.enemies.setAll('checkWorldBounds', true);
        this.enemies.forEach(function (enemy) {
            enemy.scoreWorth = 250;
            enemy.emitter = game.add.emitter(0, 0, 10);
            enemy.emitter.makeParticles('particle3');
            enemy.particleBurst = function() {
                enemy.emitter.x = enemy.x;
                enemy.emitter.y = enemy.y;
                enemy.emitter.start(true, 700, null, 10);
            }
        });
    }

    spawn() {
        const enemy = this.enemies.getFirstExists(false);
        if (enemy) {
            enemy.reset(game.rnd.between(this.spawnBorder, GAME_WIDTH - this.spawnBorder), 0);
            enemy.scale.setTo(0.5, 0.5);
            game.add.tween(enemy.scale).from({ x: 2, y: 2}, 500, Phaser.Easing.Back.Out, true);
            enemy.body.velocity.y = game.rnd.between(40, 60);
            enemy.healthPoints = 100;
            enemy.alpha = 1;
        }
    }

    checkCollisions(player1, player2, pwrUpManager, enemyExplosionManager, bulletExplosionManager) {
        game.physics.arcade.overlap(player1.sprite, this.enemies, function (player, enemy) {
            if (player.vulnerable) {
                enemyExplosionManager.spawn(enemy);
                enemy.kill();
                player.playerClassParent.loseHeart();
            }
        });

        game.physics.arcade.overlap(player2.sprite, this.enemies, function (player, enemy) {
            if (player.vulnerable) {
                enemyExplosionManager.spawn(enemy);
                enemy.kill();
                player.playerClassParent.loseHeart();
            }
        });

        player1.weapon.bulletsList.forEach(function(bulletType) {
            game.physics.arcade.overlap(bulletType.bullets, this.enemies, function (bullet, enemy) {
                // Shooting Enemy3 will cause it to regain full visibility and shrink smaller
                enemy.alpha = 1;
                enemy.scale.x *= 0.75;
                enemy.scale.y *= 0.75;
                // destroys all types of bullets except cannon bullets
                bulletExplosionManager.spawn(bullet);
                if (!bullet.indestructible) {
                    bullet.kill();
                }

                enemy.healthPoints -= bullet.hitDamage;
                if (enemy.healthPoints <= 0) {
                    pwrUpManager.spawn(enemy);
                    enemy.particleBurst();
                    // enemyExplosionManager.spawn(enemy);
                    enemy.kill();
                    bullet.player.score += enemy.scoreWorth;
                    SFX_KILL_ENEMY.play();
                } else {
                    SFX_HIT_ENEMY.play();
                }
            });
        }, this);

        player2.weapon.bulletsList.forEach(function(bulletType){
            game.physics.arcade.overlap(bulletType.bullets, this.enemies, function (bullet, enemy) {
                // Shooting Enemy3 will cause it to regain full visibility and shrink smaller
                enemy.alpha = 1;
                enemy.scale.x *= 0.75;
                enemy.scale.y *= 0.75;
                // destroys all types of bullets except cannon bullets
                bulletExplosionManager.spawn(bullet);
                if (!bullet.indestructible) {
                    bullet.kill();
                }

                enemy.healthPoints -= bullet.hitDamage;
                if (enemy.healthPoints <= 0) {
                    pwrUpManager.spawn(enemy);
                    enemy.particleBurst();
                    // enemyExplosionManager.spawn(enemy);
                    enemy.kill();
                    bullet.player.score += enemy.scoreWorth;
                    SFX_KILL_ENEMY.play();
                } else {
                    SFX_HIT_ENEMY.play();
                }
            });
        }, this);
    }

    update() {
        this.enemies.forEachAlive(function (enemy) {
            enemy.body.acceleration.x = game.rnd.between(this.maxAccel, -this.maxAccel);
            // Grows larger and more transparent over time
            enemy.scale.x += 0.001;
            enemy.scale.y += 0.001;
            if (enemy.alpha > 0.05){
                enemy.alpha -= 0.005;
            }
        }, this);
    }

    debugBody() {
        this.enemies.forEachAlive(function (enemy) {
            game.debug.body(enemy);
        });
    }
}