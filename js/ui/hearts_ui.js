class HeartsUI {
    constructor(player, posX, posY) {
        this.player = player;
        this.posX = posX;
        this.posY = posY;
        this.heartIcons = [];

        this.heartScale = 0.35;
        this.heartSpacing = 45;
        if (player.playerNum === 1) {
            this.heartImg = 'heartP1';
        } else if (player.playerNum === 2) {
            this.heartImg = 'heartP2'
        }

        for (let i = -1; i <= 1; i++) {
            let heartIcon = game.add.sprite(this.posX + (this.heartSpacing * i), this.posY, this.heartImg);
            heartIcon.scale.setTo(this.heartScale, this.heartScale);
            heartIcon.anchor.setTo(0.5, 0.5);
            this.heartIcons.push(heartIcon);
        }
    }

    update() {
        for (let i = 0; i < 3; i++) {
            if (i+1 > this.player.hearts){
                this.heartIcons[i].loadTexture('heartEmpty');
            } else {
                this.heartIcons[i].loadTexture(this.heartImg);
            }
            this.heartIcons[i].bringToTop();
        }
    }
}