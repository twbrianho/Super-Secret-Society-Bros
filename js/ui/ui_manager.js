class UIManager {
    constructor(p1, p2) {
        const scorePosX = 85;
        const scorePosY = 30;
        const heartsX = 85;
        const heartsY = 70;
        const specialPosX = 85;
        const specialPosY = 150;
        const weaponPosX = 85;
        const weaponPosY = 110;

        this.p1 = p1;
        this.p2 = p2;

        this.uiBoxP1 = new UIBox(this.p1);
        this.uiBoxP2 = new UIBox(this.p2);

        this.scoreP1 = new ScoreUI(this.p1, GAME_WIDTH - scorePosX, scorePosY);
        this.scoreP2 = new ScoreUI(this.p2, scorePosX, scorePosY);

        this.heartsP1 = new HeartsUI(this.p1, GAME_WIDTH - heartsX, heartsY);
        this.heartsP2 = new HeartsUI(this.p2, heartsX, heartsY);

        this.specialP1 = new SpecialUI(this.p1, GAME_WIDTH - specialPosX, specialPosY);
        this.specialP2 = new SpecialUI(this.p2, specialPosX, specialPosY);

        this.weaponP1 = new WeaponUI(this.p1, GAME_WIDTH - weaponPosX, weaponPosY);
        this.weaponP2 = new WeaponUI(this.p2, weaponPosX, weaponPosY);

        this.uiList = [this.scoreP1, this.scoreP2,
            this.heartsP1, this.heartsP2,
            this.specialP1, this.specialP2,
            this.weaponP1, this.weaponP2];

        this.uiText = game.add.group();
        this.uiText.add(this.scoreP1.scoreText);
        this.uiText.add(this.scoreP2.scoreText);
        this.uiText.add(this.weaponP1.weaponText);
        this.uiText.add(this.weaponP2.weaponText);

        this.gameOverScreen = new GameOverUI();
        this.gameOver = false;
    }

    update() {
        this.uiList.forEach(function(uiElement){
            uiElement.update();
        });

        game.world.bringToTop(this.uiText);

        if (this.p1.hearts <= 0 && this.p2.hearts <= 0 && !this.gameOver) {
            this.p1.sprite.kill();
            this.p2.sprite.kill();
            this.gameOverScreen.showScreen();
            this.gameOver = true;
        }
    }
}