class PlayerWeaponManager{
    constructor(player) {
        this.currWeaponType = 'Blaster';

        this.bulletsBlaster = new PlayerWeaponBlaster(player);
        this.bulletsLaser = new PlayerWeaponLaser(player);
        this.bulletsCannon = new PlayerWeaponCannon(player);
        this.bulletsSplitter = new PlayerWeaponSplitter(player);

        this.bulletsList = [this.bulletsBlaster, this.bulletsCannon, this.bulletsLaser, this.bulletsSplitter];
    }

    fire() {
        switch (this.currWeaponType) {
            case 'Blaster':
                this.bulletsBlaster.fire();
                break;
            case 'Laser':
                this.bulletsLaser.fire();
                break;
            case 'Splitter':
                this.bulletsSplitter.fire();
                break;
            case 'Cannon':
                this.bulletsCannon.fire();
                break;
            default:
                console.log("No weapon type of " + this.currWeaponType + " found.")
        }
    }

    special() {
        switch (this.currWeaponType) {
            case 'Blaster':
                this.bulletsBlaster.special();
                break;
            case 'Laser':
                this.bulletsLaser.special();
                break;
            case 'Splitter':
                this.bulletsSplitter.special();
                break;
            case 'Cannon':
                this.bulletsCannon.special();
                break;
            default:
                console.log("No weapon type of " + this.currWeaponType + " found.")
        }
    }
}