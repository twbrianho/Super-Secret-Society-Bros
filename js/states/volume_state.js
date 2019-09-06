let volumeState = {

    create: function () {
        if (BGM.key !== "menuMusic") {
            BGM = game.add.audio('menuMusic', GLOBAL_MUSIC_VOLUME, true);
            BGM.play();
            console.log("Now playing: " + BGM.key);
        }

        this.menuLogo = game.add.sprite(GAME_WIDTH / 2, 0, 'menuLogo');
        this.menuLogo.scale.setTo(0.1, 0.1);
        this.menuLogo.anchor.setTo(0.5, 0);

        this.musicText = game.add.bitmapText(GAME_WIDTH / 2 - 160, GAME_HEIGHT / 2 - 110, 'silkscreen', "Music Volume: 50", 35);
        this.musicText.anchor.setTo(0, 0.5);

        this.musicSlider = game.add.sprite(GAME_WIDTH / 2, GAME_HEIGHT / 2 - 60, 'volumeSlider');
        this.musicSlider.scale.setTo(0.3, 0.3);
        this.musicSlider.anchor.setTo(0.5, 0.5);

        this.musicSliderBtn = game.add.sprite(280 + GLOBAL_MUSIC_VOLUME * 280, GAME_HEIGHT / 2 - 60, 'volumeSliderBtn');
        this.musicSliderBtn.scale.setTo(0.4, 0.4);
        this.musicSliderBtn.anchor.setTo(0.5, 0.5);
        this.musicSliderBtn.inputEnabled = true;
        this.musicSliderBtn.input.enableDrag(false);
        this.musicSliderBtn.input.allowVerticalDrag = false;

        this.sfxText = game.add.bitmapText(GAME_WIDTH / 2 - 160, GAME_HEIGHT / 2 + 60, 'silkscreen', "SFX Volume: 100", 35);
        this.sfxText.anchor.setTo(0, 0.5);

        this.sfxSlider = game.add.sprite(GAME_WIDTH / 2, GAME_HEIGHT / 2 + 110, 'volumeSlider');
        this.sfxSlider.scale.setTo(0.3, 0.3);
        this.sfxSlider.anchor.setTo(0.5, 0.5);

        this.sfxSliderBtn = game.add.sprite(280 + GLOBAL_SFX_VOLUME * 280, GAME_HEIGHT / 2 + 110, 'volumeSliderBtn');
        this.sfxSliderBtn.scale.setTo(0.4, 0.4);
        this.sfxSliderBtn.anchor.setTo(0.5, 0.5);
        this.sfxSliderBtn.inputEnabled = true;
        this.sfxSliderBtn.input.enableDrag(false);
        this.sfxSliderBtn.input.allowVerticalDrag = false;

        this.backToMenuBtn = game.add.button(GAME_WIDTH / 2, GAME_HEIGHT - 30, 'backToMenu', this.backToMenuClick, this, 1, 0, 1, 0);
        this.backToMenuBtn.scale.setTo(0.5, 0.5);
        this.backToMenuBtn.anchor.setTo(0.5, 0.5);
    },

    update: function () {
        // constrain button to remain within slider range
        if (this.musicSliderBtn.x < 280) {
            this.musicSliderBtn.x = 280;
        } else if (this.musicSliderBtn.x > GAME_WIDTH - 280) {
            this.musicSliderBtn.x = GAME_WIDTH - 280;
        }
        if (this.sfxSliderBtn.x < 280) {
            this.sfxSliderBtn.x = 280;
        } else if (this.sfxSliderBtn.x > GAME_WIDTH - 280) {
            this.sfxSliderBtn.x = GAME_WIDTH - 280;
        }

        GLOBAL_MUSIC_VOLUME = (this.musicSliderBtn.x - 280) / 280;
        GLOBAL_SFX_VOLUME = (this.sfxSliderBtn.x - 280) / 280;

        this.musicText.text = "Music Volume: " + parseInt(GLOBAL_MUSIC_VOLUME * 100);
        this.sfxText.text = "SFX Volume: " + parseInt(GLOBAL_SFX_VOLUME * 100);

        // update the menu music
        BGM.volume = GLOBAL_MUSIC_VOLUME;
    },

    backToMenuClick: function () {
        // update the btn sfx
        SFX_CLICK_BACK = game.add.audio('sfxClickBack', GLOBAL_SFX_VOLUME);
        SFX_CLICK_INTO = game.add.audio('sfxClickInto', GLOBAL_SFX_VOLUME);

        SFX_CLICK_BACK.play();
        game.state.start('menu');
    }
};