class InstructionPageManager {
    constructor() {
        this.page1Img = game.add.sprite(0, 0, 'instructions1');
        this.page1Img.visible = true;
        this.page1 = [this.page1Img];

        this.page2Img = game.add.sprite(0, 0, 'instructions2');
        this.page2Img.visible = false;
        this.blasterBullet = game.add.sprite(110, 200, 'bulletBlasterP1');
        this.blasterBullet.animations.add('normal', [0, 0, 0, 1, 2, 3], 12, true);
        this.blasterBullet.animations.play('normal');
        this.blasterBullet.scale.setTo(0.1, 0.1);
        this.blasterBullet.anchor.setTo(0.5, 0.5);
        this.blasterBullet.visible = false;
        this.blasterWeapon = game.add.sprite(110, 475, 'weaponBlaster');
        this.blasterWeapon.animations.add('normal', [0, 0, 0, 0, 0, 1, 2, 3], 12, true);
        this.blasterWeapon.animations.play('normal');
        this.blasterWeapon.scale.setTo(0.5, 0.5);
        this.blasterWeapon.anchor.setTo(0.5, 0.5);
        this.blasterWeapon.visible = false;
        this.laserBullet = game.add.sprite(317, 200, 'bulletLaserP1');
        this.laserBullet.animations.add('normal', [0, 0, 0, 1, 2, 3], 12, true);
        this.laserBullet.animations.play('normal');
        this.laserBullet.scale.setTo(0.1, 0.1);
        this.laserBullet.anchor.setTo(0.5, 0.5);
        this.laserBullet.visible = false;
        this.laserWeapon = game.add.sprite(317, 475, 'weaponLaser');
        this.laserWeapon.animations.add('normal', [0, 0, 0, 0, 0, 1, 2, 3], 12, true);
        this.laserWeapon.animations.play('normal');
        this.laserWeapon.scale.setTo(0.5, 0.5);
        this.laserWeapon.anchor.setTo(0.5, 0.5);
        this.laserWeapon.visible = false;
        this.splitterBullet = game.add.sprite(523, 200, 'bulletSplitterP1');
        this.splitterBullet.animations.add('normal', [0, 0, 0, 1, 2, 3], 12, true);
        this.splitterBullet.animations.play('normal');
        this.splitterBullet.scale.setTo(0.1, 0.1);
        this.splitterBullet.anchor.setTo(0.5, 0.5);
        this.splitterBullet.visible = false;
        this.splitterWeapon = game.add.sprite(523, 475, 'weaponSplitter');
        this.splitterWeapon.animations.add('normal', [0, 0, 0, 0, 0, 1, 2, 3], 12, true);
        this.splitterWeapon.animations.play('normal');
        this.splitterWeapon.scale.setTo(0.5, 0.5);
        this.splitterWeapon.anchor.setTo(0.5, 0.5);
        this.splitterWeapon.visible = false;
        this.cannonBullet = game.add.sprite(730, 200, 'bulletCannonP1');
        this.cannonBullet.animations.add('normal', [0, 0, 0, 1, 2, 3], 12, true);
        this.cannonBullet.animations.play('normal');
        this.cannonBullet.scale.setTo(0.1, 0.1);
        this.cannonBullet.anchor.setTo(0.5, 0.5);
        this.cannonBullet.visible = false;
        this.cannonWeapon = game.add.sprite(730, 475, 'weaponCannon');
        this.cannonWeapon.animations.add('normal', [0, 0, 0, 0, 0, 1, 2, 3], 12, true);
        this.cannonWeapon.animations.play('normal');
        this.cannonWeapon.scale.setTo(0.5, 0.5);
        this.cannonWeapon.anchor.setTo(0.5, 0.5);
        this.cannonWeapon.visible = false;
        this.page2 = [
            this.page2Img,
            this.blasterBullet, this.blasterWeapon,
            this.laserBullet, this.laserWeapon,
            this.splitterBullet, this.splitterWeapon,
            this.cannonBullet, this.cannonWeapon
        ];

        this.page3Img = game.add.sprite(0, 0, 'instructions3');
        this.page3Img.visible = false;
        this.enemy1 = game.add.sprite(315, 180, 'enemy1');
        this.enemy1.animations.add('normal', [0, 0, 0, 0, 0, 1, 2, 3, 2, 1], 9, true);
        this.enemy1.animations.play('normal');
        this.enemy1.scale.setTo(0.5, 0.5);
        this.enemy1.anchor.setTo(0.5, 0.5);
        this.enemy1.visible = false;
        this.enemy2 = game.add.sprite(315, 277, 'enemy2');
        this.enemy2.animations.add('normal', [0, 0, 0, 0, 0, 1, 2, 3, 2, 1], 13, true);
        this.enemy2.animations.play('normal');
        this.enemy2.scale.setTo(0.5, 0.5);
        this.enemy2.anchor.setTo(0.5, 0.5);
        this.enemy2.visible = false;
        this.enemy3 = game.add.sprite(315, 373, 'enemy3');
        this.enemy3.animations.add('normal', [0, 0, 0, 0, 0, 1, 2, 3, 2, 1], 11, true);
        this.enemy3.animations.play('normal');
        this.enemy3.scale.setTo(0.5, 0.5);
        this.enemy3.anchor.setTo(0.5, 0.5);
        this.enemy3.visible = false;
        this.enemy4 = game.add.sprite(315, 470, 'enemy4');
        this.enemy4.animations.add('normal', [0, 0, 0, 0, 0, 1, 2, 3, 2, 1], 15, true);
        this.enemy4.animations.play('normal');
        this.enemy4.scale.setTo(0.5, 0.5);
        this.enemy4.anchor.setTo(0.5, 0.5);
        this.enemy4.visible = false;
        this.page3 = [
            this.page3Img,
            this.enemy1,
            this.enemy2,
            this.enemy3,
            this.enemy4
        ];

        this.page4Img = game.add.sprite(0, 0, 'instructions4');
        this.page4Img.visible = false;
        this.page4 = [this.page4Img];

        this.page5Img = game.add.sprite(0, 0, 'instructions5');
        this.page5Img.visible = false;
        this.page5 = [this.page5Img];

        // use a null object to make pages start at 1
        this.allPages = [null, this.page1, this.page2, this.page3, this.page4, this.page5];

        this.currPage = 1;
        this.finalPage = this.allPages.length - 1;
    }

    nextPage() {
        this.allPages[this.currPage].forEach(function (el) {
            el.visible = false;
        });
        if (this.currPage === this.finalPage) {
            this.currPage = 1;
        } else {
            this.currPage++;
        }
        this.allPages[this.currPage].forEach(function (el) {
            el.visible = true;
        });
        console.log("Page "+this.currPage);
    }

    prevPage() {
        this.allPages[this.currPage].forEach(function (el) {
            el.visible = false;
        });
        if (this.currPage === 1) {
            this.currPage = this.finalPage;
        } else {
            this.currPage--;
        }
        this.allPages[this.currPage].forEach(function (el) {
            el.visible = true;
        });
        console.log("Page "+this.currPage);
    }
}