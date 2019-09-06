let instructionsState = {

    create: function () {
        if (BGM.key !== "menuMusic") {
            BGM = game.add.audio('menuMusic', GLOBAL_MUSIC_VOLUME, true);
            BGM.play();
            console.log("Now playing: " + BGM.key);
        }

        this.instructionPageManager = new InstructionPageManager();

        this.backToMenuBtn = game.add.button(GAME_WIDTH / 2, GAME_HEIGHT - 30, 'backToMenu', this.backToMenuClick, this, 1, 0, 1, 0);
        this.backToMenuBtn.scale.setTo(0.5, 0.5);
        this.backToMenuBtn.anchor.setTo(0.5, 0.5);

        this.nextBtn = game.add.button(GAME_WIDTH, GAME_HEIGHT - 30, 'nextBtn', this.nextClick, this, 1, 0, 1, 0);
        this.nextBtn.scale.setTo(0.2, 0.2);
        this.nextBtn.anchor.setTo(1, 0.5);

        this.prevBtn = game.add.button(0, GAME_HEIGHT - 30, 'prevBtn', this.prevClick, this, 1, 0, 1, 0);
        this.prevBtn.scale.setTo(0.2, 0.2);
        this.prevBtn.anchor.setTo(0, 0.5);
    },

    backToMenuClick: function () {
        SFX_CLICK_BACK.play();
        game.state.start('menu');
    },

    nextClick: function() {
        SFX_CLICK_INTO.play();
        this.instructionPageManager.nextPage();
    },

    prevClick: function() {
        SFX_CLICK_INTO.play();
        this.instructionPageManager.prevPage();
    }
};