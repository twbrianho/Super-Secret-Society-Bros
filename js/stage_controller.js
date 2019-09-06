class StageController {
    constructor(enemyManager) {
        BGM = game.add.audio('gameplayMusic', GLOBAL_MUSIC_VOLUME);
        BGM.play();

        this.startTime = game.time.now;

        this.enemyManager = enemyManager;
        this.stageData = game.cache.getJSON('stageData');
        this.currStageIndex = 0;
        this.stageProgression = [
            'Intro',
            'Build',
            'Funk',
            'MusicBuild',
            'Swell',
            'Surround',
            'Funky',
            'Funkier',
            'Bridge',
            'Drop',
            'SmallBridge',
            'A',
            'B',
            'A',
            'B',
            'A',
            'B',
            'Bridge',
            'Soothe',
            'Regroup',
            'Battle',
            'Outro',
            'FadeOut',
            'empty',
            'finish'
        ];
        this.nextBarNum = 0;
        this.nextStageTime = 0;
        this.updateNextStageTime();

        this.youWinUi = new YouWinUI();
    }

    updateNextStageTime() {
        let currStage = this.stageProgression[this.currStageIndex];
        this.nextBarNum += this.stageData[currStage].bars;
        this.nextStageTime = this.nextBarNum * 259000 / 138;
        this.enemyManager.updateStage(this.stageData[currStage]);
        console.log("Current Stage: " + currStage + "\nNext Stage Bar#: " + this.nextBarNum);
    }

    checkStageProgression() {
        if (this.startTime) {
            let elapsedTime = game.time.now - this.startTime;
            if (elapsedTime >= this.nextStageTime) {
                this.currStageIndex++;
                this.updateNextStageTime();
            }
        }
    }
}