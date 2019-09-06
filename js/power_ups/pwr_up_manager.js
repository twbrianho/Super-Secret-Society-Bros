class PwrUpManager{
    constructor(player1, player2){
        this.player1 = player1;
        this.player2 = player2;

        this.extraHeartPwrUp = new ExtraHeartPwrUp(player1, player2);
        this.extraSpecialPwrUp = new ExtraSpecialPwrUp(player1, player2);
        this.weaponChangeBlaster = new WeaponChangeBlaster(player1, player2);
        this.weaponChangeLaser = new WeaponChangeLaser(player1, player2);
        this.weaponChangeSplitter = new WeaponChangeSplitter(player1, player2);
        this.weaponChangeCannon = new WeaponChangeCannon(player1, player2);

        this.pwrUpList = [this.extraHeartPwrUp, this.extraSpecialPwrUp, this.weaponChangeBlaster, this.weaponChangeLaser, this.weaponChangeSplitter, this.weaponChangeCannon];
        this.extraList = [this.extraHeartPwrUp, this.extraSpecialPwrUp];
        this.weaponChangeList = [this.weaponChangeBlaster, this.weaponChangeCannon, this.weaponChangeLaser, this.weaponChangeSplitter];
    }

    spawn(enemy) {
        if (enemy.scoreWorth === 25){
            if (Phaser.Utils.chanceRoll(3)) {
                game.rnd.pick(this.extraList).spawn(enemy.x, enemy.y);
            }
            if (Phaser.Utils.chanceRoll(3)) {
                game.rnd.pick(this.weaponChangeList).spawn(enemy.x, enemy.y);
            }
        } else if (enemy.scoreWorth === 100){
            if (Phaser.Utils.chanceRoll(5)) {
                game.rnd.pick(this.extraList).spawn(enemy.x, enemy.y);
            }
            if (Phaser.Utils.chanceRoll(6)) {
                game.rnd.pick(this.weaponChangeList).spawn(enemy.x, enemy.y);
            }
        } else if (enemy.scoreWorth === 250){
            if (Phaser.Utils.chanceRoll(7)) {
                game.rnd.pick(this.extraList).spawn(enemy.x, enemy.y);
            }
            if (Phaser.Utils.chanceRoll(7)) {
                game.rnd.pick(this.weaponChangeList).spawn(enemy.x, enemy.y);
            }
        } else if (enemy.scoreWorth === 300){
            if (Phaser.Utils.chanceRoll(9)) {
                game.rnd.pick(this.extraList).spawn(enemy.x, enemy.y);
            }
            if (Phaser.Utils.chanceRoll(8)) {
                game.rnd.pick(this.weaponChangeList).spawn(enemy.x, enemy.y);
            }
        }
    }

    update() {
        this.pwrUpList.forEach(function (pwrUp) {
            pwrUp.checkCollisions(this.player1, this.player2);
        }, this);
    }
}