class ExtraHeartPwrUp {
    constructor(player1, player2) {
        this.player1 = player1;
        this.player2 = player2;

        this.pwrBoxes = game.add.physicsGroup();
        this.pwrBoxes.enableBody = true;
        this.pwrBoxes.physicsBodyType = Phaser.Physics.ARCADE;
        this.pwrBoxes.createMultiple(50, 'extraHeartPwrUp');
        this.pwrBoxes.callAll('animations.add', 'animations', 'normal', [0, 0, 0, 0, 0, 1, 2, 3], game.rnd.between(9, 15), true);
        this.pwrBoxes.callAll('play', null, 'normal');
        this.pwrBoxes.setAll('scale.x', 0.5);
        this.pwrBoxes.setAll('scale.y', 0.5);
        this.pwrBoxes.setAll('anchor.x', 0.5);
        this.pwrBoxes.setAll('anchor.y', 0.5);
        this.pwrBoxes.setAll('outOfBoundsKill', true);
        this.pwrBoxes.setAll('checkWorldBounds', true);
    }

    spawn(x, y) {
        const pwrBox = this.pwrBoxes.getFirstExists(false);
        if (pwrBox) {
            pwrBox.reset(x, y);
            pwrBox.body.velocity.y = 50;
        }
    }

    checkCollisions(player1, player2) {
        game.physics.arcade.overlap(player1.sprite, this.pwrBoxes, function (player, pwrBox) {
            if (player.playerClassParent.hearts < 3) {
                if (player.playerClassParent.hearts === 0)  {
                    // revive player
                    player.alpha = 1;
                    player.vulnerable = true;
                }
                player.playerClassParent.hearts++;
                pwrBox.kill();
                SFX_EXTRA_HEART.play();
            }
        });

        game.physics.arcade.overlap(player2.sprite, this.pwrBoxes, function (player, pwrBox) {
            if (player.playerClassParent.hearts < 3) {
                if (player.playerClassParent.hearts === 0)  {
                    // revive player
                    player.alpha = 1;
                    player.vulnerable = true;
                }
                player.playerClassParent.hearts++;
                pwrBox.kill();
                SFX_EXTRA_HEART.play();
            }
        });
    }
}