class BackgroundManager {
    constructor() {
        this.bg1Group = game.add.group();
        this.bg1Group.createMultiple(2, 'bg1');
        this.bg1Group.setAll('scale.x', 0.5);
        this.bg1Group.setAll('scale.y', 0.5);

        BackgroundManager.spawn(this.bg1Group, 0);
        BackgroundManager.spawn(this.bg1Group, -1000);

        this.bg2Group = game.add.group();
        this.bg2Group.createMultiple(2, 'bg2');
        this.bg2Group.setAll('scale.x', 0.5);
        this.bg2Group.setAll('scale.y', 0.5);

        BackgroundManager.spawn(this.bg2Group, 0);
        BackgroundManager.spawn(this.bg2Group, -1000);

        this.bg3Group = game.add.group();
        this.bg3Group.createMultiple(2, 'bg3');
        this.bg3Group.setAll('scale.x', 0.5);
        this.bg3Group.setAll('scale.y', 0.5);

        BackgroundManager.spawn(this.bg3Group, 0);
        BackgroundManager.spawn(this.bg3Group, -1000);
    }

    static spawn(bgGroup, y) {
        const bg = bgGroup.getFirstExists(false);
        if (bg) {
            bg.reset(UI_WIDTH, y);
        }
    }

    update() {
        this.bg1Group.forEach(function (bg) {
            bg.y += 1;
            if (bg.y >= GAME_HEIGHT) {
                bg.y -= 2*bg.height;
            }
        }, this);
        this.bg2Group.forEach(function (bg) {
            bg.y += 2;
            if (bg.y >= GAME_HEIGHT) {
                bg.y -= 2*bg.height;
            }
        }, this);
        this.bg3Group.forEach(function (bg) {
            bg.y += 3;
            if (bg.y >= GAME_HEIGHT) {
                bg.y -= 2*bg.height;
            }
        }, this);
    }
}