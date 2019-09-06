class YouWinUI {
    constructor() {
        this.congratsText = game.add.bitmapText(GAME_WIDTH / 2, GAME_HEIGHT / 2 - 100, 'silkscreen', "CONGRATULATIONS!", 40);
        this.youWonText = game.add.bitmapText(GAME_WIDTH / 2, GAME_HEIGHT / 2 - 50, 'silkscreen', "You won the game!", 20);
        this.playAgainBtn = game.add.button(GAME_WIDTH / 2, GAME_HEIGHT / 2 + 50, 'playAgain', YouWinUI.playAgainClick, this, 1, 0, 1, 0);
        this.playAgainBtn.scale.setTo(0.5, 0.5);
        this.backToMenuBtn = game.add.button(GAME_WIDTH / 2, GAME_HEIGHT / 2 + 100, 'backToMenu', YouWinUI.backToMenuClick, this, 1, 0, 1, 0);
        this.backToMenuBtn.scale.setTo(0.5, 0.5);
        this.allElements = [this.congratsText, this.youWonText, this.playAgainBtn, this.backToMenuBtn];

        this.allElements.forEach(function (element) {
            element.anchor.setTo(0.5, 0.5);
            element.align = "center";
            element.visible = false;
        });
    }

    static playAgainClick() {
        SFX_CLICK_INTO.play();
        game.state.start('play');
    }

    static backToMenuClick() {
        SFX_CLICK_BACK.play();
        game.state.start('menu');
    }

    showScreen(score) {
        this.allElements.forEach(function (element) {
            element.visible = true;
        });

        this.youWonText.text = "Final score: " + score;
    }
}