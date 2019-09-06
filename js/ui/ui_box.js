class UIBox{
    constructor(player) {
        this.player = player;

        let posX;
        if (player.playerNum === 1) {
            posX = GAME_WIDTH - 170;
        } else if (player.playerNum === 2) {
            posX = 0;
        }

        this.sprite = game.add.sprite(posX, 0, 'uiBox');
        game.physics.enable(this.sprite, Phaser.Physics.ARCADE);
        this.sprite.body.immovable = true;
        this.sprite.body.moves = false;
    }
}