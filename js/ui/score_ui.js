class ScoreUI {
    constructor(player, posX, posY) {
        this.player = player;
        if (player.playerNum === 1) {
            this.scoreText = game.add.bitmapText(posX, posY, 'silkscreenP1', "0000000", 20);
        } else if (player.playerNum === 2) {
            this.scoreText = game.add.bitmapText(posX, posY, 'silkscreenP2', "0000000", 20);
        }
        this.scoreText.anchor.setTo(0.5, 0.5);
        this.scoreText.align = 'center';
    }

    static formatScore(score){
        var formatted = "" + score;
        while (formatted.length < 7) {
            formatted = "0" + formatted;
        }
        return formatted;
    }

    update(){
        this.scoreText.text = ScoreUI.formatScore(this.player.score);
    }
}