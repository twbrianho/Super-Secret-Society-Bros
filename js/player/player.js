const playerSpeed = 400;

class Player {
    constructor(x, y, controls, playerNum) {
        this.playerNum = playerNum;
        this.hearts = 3;
        this.specials = 3;

        this.score = 0;

        this.weapon = new PlayerWeaponManager(this);
        // this.playerExplosionManager = new PlayerExplosionManager();

        this.controls = controls;

        this.emitter = game.add.emitter(0, 0, 100);

        if (playerNum === 1) {
            this.sprite = game.add.sprite(x, y, 'player1');
            this.emitter.makeParticles('particleP1');
        } else if (playerNum === 2) {
            this.sprite = game.add.sprite(x, y, 'player2');
            this.emitter.makeParticles('particleP2');
        }

        this.sprite.scale.setTo(0.4, 0.4);
        this.sprite.anchor.setTo(0.5, 0.5);
        game.physics.enable(this.sprite, Phaser.Physics.ARCADE);
        this.sprite.body.collideWorldBounds = true;
        this.sprite.body.setSize(40, 40, 30, 37);

        this.sprite.vulnerable = true;

        this.sprite.playerClassParent = this;
    }

    particleBurst(amount) {
        this.emitter.x = this.sprite.x;
        this.emitter.y = this.sprite.y;
        this.emitter.gravity = 200;
        this.emitter.start(true, 2000, null, amount);
    }

    update() {
        this.sprite.body.velocity.x = 0;
        this.sprite.body.velocity.y = 0;
        if (this.controls.moveLeft) {
            this.sprite.body.velocity.x -= playerSpeed;
        }
        if (this.controls.moveRight) {
            this.sprite.body.velocity.x += playerSpeed;
        }
        if (this.controls.moveUp) {
            this.sprite.body.velocity.y -= playerSpeed;
        }
        if (this.controls.moveDown) {
            this.sprite.body.velocity.y += playerSpeed;
        }
        if (this.hearts > 0 && this.sprite.alive){
            if (this.controls.fire) {
                this.weapon.fire();
            }
            if (this.controls.special && this.specials > 0) {
                this.weapon.special();
            }
        }
    }

    loseHeart() {
        if (this.hearts === 1) {
            // Last heart
            game.camera.shake(0.03, 200);
            this.sprite.alpha = 0.4;
            this.sprite.vulnerable = false;
            // this.playerExplosionManager.spawn(this.sprite, true);
            this.particleBurst(30);
        } else if (this.hearts > 1) {
            // Not last heart
            game.camera.shake(0.01, 200);
            // this.playerExplosionManager.spawn(this.sprite, false);
            this.particleBurst(10);
        }
        this.hearts--;
        SFX_PLAYER_HIT.play();
        if (this.hearts <= 0) {
            // Safety: keep hearts at minimum of zero
            this.hearts = 0;
        }
    }
}