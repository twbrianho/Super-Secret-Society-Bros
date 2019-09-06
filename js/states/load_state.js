// PRELOAD ALL ASSETS & DISPLAY PROGRESS
let progressText;
let fadeOutTime = 1000;

let loadState = {
    preload: function () {
        game.stage.backgroundColor = '#000000';
        game.load.bitmapFont('silkscreen', 'font/silkscreen/silkscreen.png', 'font/silkscreen/silkscreen.fnt');
    },

    create: function () {
        progressText = game.add.bitmapText(10, 10, 'silkscreen', 'Loading... 0%', 20);

        game.load.onFileComplete.add(this.fileComplete, this);
        game.load.onLoadComplete.add(this.loadComplete, this);

        game.load.image('playerWhite', 'img/player.png');
        game.load.image('player1', 'img/player1.png');
        game.load.image('player2', 'img/player2.png');
        game.load.image('heartP1', 'img/heartP1.png');
        game.load.image('heartP2', 'img/heartP2.png');
        game.load.image('heartEmpty', 'img/heartEmpty.png');
        game.load.image('specialP1', 'img/specialP1.png');
        game.load.image('specialP2', 'img/specialP2.png');
        game.load.image('specialEmpty', 'img/specialEmpty.png');
        game.load.image('uiBox', 'img/uiBox.png');
        game.load.image('menuLogo', 'img/menuLogo.png');
        game.load.image('volumeSlider', 'img/volumeSlider.png');
        game.load.image('volumeSliderBtn', 'img/volumeSliderBtn.png');
        game.load.image('instructions1', 'img/instructions1.png');
        game.load.image('instructions2', 'img/instructions2.png');
        game.load.image('instructions3', 'img/instructions3.png');
        game.load.image('instructions4', 'img/instructions4.png');
        game.load.image('instructions5', 'img/instructions5.png');
        game.load.image('bg1', 'img/bg1.png');
        game.load.image('bg2', 'img/bg2.png');
        game.load.image('bg3', 'img/bg3.png');
        game.load.image('particle1', 'img/particle1.png');
        game.load.image('particle2', 'img/particle2.png');
        game.load.image('particle3', 'img/particle3.png');
        game.load.image('particleP1', 'img/particleP1.png');
        game.load.image('particleP2', 'img/particleP2.png');
        game.load.spritesheet('explosionBullet', 'img/explosion-bullet.png', 32, 32);
        game.load.spritesheet('explosionEnemy', 'img/explosion-enemy.png', 64, 64);
        game.load.spritesheet('explosionPlayer', 'img/explosion-player.png', 48, 48);
        game.load.spritesheet('explosionDead', 'img/explosion-dead.png', 128, 128);
        game.load.atlasJSONHash('bulletBlasterP1', 'img/bulletBlasterP1.png', 'img/bulletBlasterP1.json');
        game.load.atlasJSONHash('bulletLaserP1', 'img/bulletLaserP1.png', 'img/bulletLaserP1.json');
        game.load.atlasJSONHash('bulletSplitterP1', 'img/bulletSplitterP1.png', 'img/bulletSplitterP1.json');
        game.load.atlasJSONHash('bulletCannonP1', 'img/bulletCannonP1.png', 'img/bulletCannonP1.json');
        game.load.atlasJSONHash('bulletBlasterP2', 'img/bulletBlasterP2.png', 'img/bulletBlasterP2.json');
        game.load.atlasJSONHash('bulletLaserP2', 'img/bulletLaserP2.png', 'img/bulletLaserP2.json');
        game.load.atlasJSONHash('bulletSplitterP2', 'img/bulletSplitterP2.png', 'img/bulletSplitterP2.json');
        game.load.atlasJSONHash('bulletCannonP2', 'img/bulletCannonP2.png', 'img/bulletCannonP2.json');
        game.load.atlasJSONHash('enemy1', 'img/enemy1.png', 'img/enemy1.json');
        game.load.atlasJSONHash('enemy2', 'img/enemy2.png', 'img/enemy2.json');
        game.load.atlasJSONHash('enemy3', 'img/enemy3.png', 'img/enemy3.json');
        game.load.atlasJSONHash('enemy4', 'img/enemy4.png', 'img/enemy4.json');
        game.load.atlasJSONHash('extraHeartPwrUp', 'img/extraHeart.png', 'img/extraHeart.json');
        game.load.atlasJSONHash('extraSpecialPwrUp', 'img/extraSpecial.png', 'img/extraSpecial.json');
        game.load.atlasJSONHash('weaponBlaster', 'img/weaponBlaster.png', 'img/weaponBlaster.json');
        game.load.atlasJSONHash('weaponLaser', 'img/weaponLaser.png', 'img/weaponLaser.json');
        game.load.atlasJSONHash('weaponSplitter', 'img/weaponSplitter.png', 'img/weaponSplitter.json');
        game.load.atlasJSONHash('weaponCannon', 'img/weaponCannon.png', 'img/weaponCannon.json');
        game.load.atlasJSONHash('playAgain', 'img/playAgain.png', 'img/playAgain.json');
        game.load.atlasJSONHash('backToMenu', 'img/backToMenu.png', 'img/backToMenu.json');
        game.load.atlasJSONHash('nextBtn', 'img/nextBtn.png', 'img/nextBtn.json');
        game.load.atlasJSONHash('prevBtn', 'img/prevBtn.png', 'img/prevBtn.json');
        game.load.atlasJSONHash('startGame', 'img/startGame.png', 'img/startGame.json');
        game.load.atlasJSONHash('instructions', 'img/instructions.png', 'img/instructions.json');
        game.load.atlasJSONHash('adjustVolume', 'img/adjustVolume.png', 'img/adjustVolume.json');

        game.load.json('stageData', 'data/stages.json');

        game.load.bitmapFont('silkscreenP1', 'font/silkscreenP1/silkscreenP1.png', 'font/silkscreenP1/silkscreenP1.fnt');
        game.load.bitmapFont('silkscreenP2', 'font/silkscreenP2/silkscreenP2.png', 'font/silkscreenP2/silkscreenP2.fnt');

        game.load.audio('gameplayMusic', 'sound/gameplayMusic.mp3');
        game.load.audio('menuMusic', 'sound/menuMusic.mp3');
        game.load.audio('sfxClickBack', 'sound/clickBack.mp3');
        game.load.audio('sfxClickInto', 'sound/clickInto.mp3');
        game.load.audio('sfxExtraHeart', 'sound/extraHeart.mp3');
        game.load.audio('sfxExtraSpecial', 'sound/extraSpecial.mp3');
        game.load.audio('sfxHitEnemy', 'sound/hitEnemy.mp3');
        game.load.audio('sfxKillEnemy', 'sound/killEnemy.mp3');
        game.load.audio('sfxPlayerHit', 'sound/playerHit.mp3');
        game.load.audio('sfxWeaponChange', 'sound/weaponChange.mp3');

        game.load.start();
    },

    fileComplete: function (progress) {
        progressText.setText("Loading... " + progress + "%");
    },

    loadComplete: function () {
        progressText.setText("Loading FINISHED!");

        game.camera.fade('#000000', fadeOutTime);
        game.camera.onFadeComplete.add(this.play, this);
    },

    play: function () {
        game.state.start('menu');
    }
};