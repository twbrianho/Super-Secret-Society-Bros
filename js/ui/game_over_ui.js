class GameOverUI {
    constructor() {
        this.gameOverText = game.add.bitmapText(GAME_WIDTH / 2, GAME_HEIGHT / 2 - 50, 'silkscreen', "Game Over", 40);
        this.playAgainBtn = game.add.button(GAME_WIDTH / 2, GAME_HEIGHT / 2 + 50, 'playAgain', GameOverUI.playAgainClick, this, 1, 0, 1, 0);
        this.playAgainBtn.scale.setTo(0.5, 0.5);
        this.backToMenuBtn = game.add.button(GAME_WIDTH / 2, GAME_HEIGHT / 2 + 100, 'backToMenu', GameOverUI.backToMenuClick, this, 1, 0, 1, 0);
        this.backToMenuBtn.scale.setTo(0.5, 0.5);
        this.allElements = [this.gameOverText, this.playAgainBtn, this.backToMenuBtn];

        this.allElements.forEach(function (element) {
            element.anchor.setTo(0.5, 0.5);
            element.align = "center";
            element.visible = false;
        });
    }

    static playAgainClick() {
        BGM.stop();
        SFX_CLICK_INTO.play();
        game.state.start('play');
    }

    static backToMenuClick() {
        BGM.stop();
        SFX_CLICK_BACK.play();
        game.state.start('menu');
    }

    showScreen() {
        this.allElements.forEach(function (element) {
            element.visible = true;
        });
    }
}