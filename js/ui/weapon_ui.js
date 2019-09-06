class WeaponUI {
    constructor(player, posX, posY) {
        const fontSize = 20;
        this.player = player;
        if (player.playerNum === 1) {
            this.weaponText = game.add.bitmapText(posX, posY, 'silkscreenP1', player.weapon.currWeaponType, fontSize);
            this.weaponText.align = 'right';
        } else if (player.playerNum === 2) {
            this.weaponText = game.add.bitmapText(posX, posY, 'silkscreenP2', player.weapon.currWeaponType, fontSize);
            this.weaponText.align = 'left';
        }
        this.weaponText.anchor.setTo(0.5, 0.5);
    }

    update(){
        this.weaponText.text = this.player.weapon.currWeaponType;
    }
}