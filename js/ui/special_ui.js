class SpecialUI {
    constructor(player, posX, posY) {
        this.player = player;
        this.posX = posX;
        this.posY = posY;
        this.specialIcons = [];

        this.specialScale = 0.25;
        this.specialSpacing = 45;
        if (player.playerNum === 1) {
            this.specialImg = 'specialP1';
        } else if (player.playerNum === 2) {
            this.specialImg = 'specialP2'
        }

        for (let i = -1; i <= 1; i++) {
            let specialIcon = game.add.sprite(this.posX + (this.specialSpacing * i), this.posY, this.specialImg);
            specialIcon.scale.setTo(this.specialScale, this.specialScale);
            specialIcon.anchor.setTo(0.5, 0.5);
            this.specialIcons.push(specialIcon);
        }
    }

    update() {
        for (let i = 0; i < 3; i++) {
            if (i+1 > this.player.specials){
                this.specialIcons[i].loadTexture('specialEmpty');
            } else {
                this.specialIcons[i].loadTexture(this.specialImg);
            }
            this.specialIcons[i].bringToTop();
        }
    }
}