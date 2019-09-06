class Controls {
    constructor() {
        this.moveLeft = false;
        this.moveRight = false;
        this.moveUp = false;
        this.moveDown = false;
        this.fire = false;
        this.special = false;
    }

    bindTo(player) {
        this.player = player;
        if (player.playerNum === 1) {
            this.leftBtn = game.input.keyboard.addKey(Phaser.KeyCode.LEFT);
            this.rightBtn = game.input.keyboard.addKey(Phaser.KeyCode.RIGHT);
            this.upBtn = game.input.keyboard.addKey(Phaser.KeyCode.UP);
            this.downBtn = game.input.keyboard.addKey(Phaser.KeyCode.DOWN);
            this.fireBtn = game.input.keyboard.addKey(Phaser.KeyCode.PERIOD);
            this.specialBtn = game.input.keyboard.addKey(Phaser.KeyCode.COMMA);
        } else if (player.playerNum === 2) {
            this.leftBtn = game.input.keyboard.addKey(Phaser.KeyCode.A);
            this.rightBtn = game.input.keyboard.addKey(Phaser.KeyCode.D);
            this.upBtn = game.input.keyboard.addKey(Phaser.KeyCode.W);
            this.downBtn = game.input.keyboard.addKey(Phaser.KeyCode.S);
            this.fireBtn = game.input.keyboard.addKey(Phaser.KeyCode.R);
            this.specialBtn = game.input.keyboard.addKey(Phaser.KeyCode.T);
        }
    }

    update() {
        this.moveLeft = this.leftBtn.isDown;
        this.moveRight = this.rightBtn.isDown;
        this.moveUp = this.upBtn.isDown;
        this.moveDown = this.downBtn.isDown;
        this.fire = this.fireBtn.isDown;
        this.special = this.specialBtn.isDown;
    }

}