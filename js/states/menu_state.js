let menuState = {

    create: function () {
        SFX_CLICK_BACK = game.add.audio('sfxClickBack', GLOBAL_SFX_VOLUME);
        SFX_CLICK_INTO = game.add.audio('sfxClickInto', GLOBAL_SFX_VOLUME);

        if (BGM === null || BGM.key !== "menuMusic") {
            BGM = game.add.audio('menuMusic', GLOBAL_MUSIC_VOLUME, true);
            BGM.play();
            console.log("Now playing: " + BGM.key);
        }

        this.menuLogo = game.add.sprite(GAME_WIDTH / 2, 200, 'menuLogo');
        this.menuLogo.scale.setTo(0.3, 0.3);
        this.menuLogo.anchor.setTo(0.5, 0.5);
        this.bottomText = game.add.bitmapText(GAME_WIDTH / 2, GAME_HEIGHT - 30, 'silkscreen', "art & code by Brian Ho | music by cYsmix", 15);
        this.bottomText.anchor.setTo(0.5, 0.5);
        this.startGameBtn = game.add.button(GAME_WIDTH / 2, GAME_HEIGHT / 2 + 50, 'startGame', this.startGameClick, this, 1, 0, 1, 0);
        this.startGameBtn.scale.setTo(0.5, 0.5);
        this.startGameBtn.anchor.setTo(0.5, 0.5);
        this.instructionsBtn = game.add.button(GAME_WIDTH / 2, GAME_HEIGHT / 2 + 100, 'instructions', this.instructionsClick, this, 1, 0, 1, 0);
        this.instructionsBtn.scale.setTo(0.5, 0.5);
        this.instructionsBtn.anchor.setTo(0.5, 0.5);
        this.adjustVolumeBtn = game.add.button(GAME_WIDTH / 2, GAME_HEIGHT / 2 + 150, 'adjustVolume', this.adjustVolumeClick, this, 1, 0, 1, 0);
        this.adjustVolumeBtn.scale.setTo(0.5, 0.5);
        this.adjustVolumeBtn.anchor.setTo(0.5, 0.5);
    },

    startGameClick: function () {
        BGM.stop();
        SFX_CLICK_INTO.play();
        game.state.start('play');
    },

    instructionsClick: function () {
        SFX_CLICK_INTO.play();
        game.state.start('instructions');
    },

    adjustVolumeClick: function () {
        SFX_CLICK_INTO.play();
        game.state.start('volume');
    }
};