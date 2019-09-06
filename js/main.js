let GAME_WIDTH = 840;
let GAME_HEIGHT = 600;
let UI_WIDTH = 170;
let game;
let BGM = null;
let SFX_CLICK_BACK;
let SFX_CLICK_INTO;
let SFX_EXTRA_HEART;
let SFX_EXTRA_SPECIAL;
let SFX_HIT_ENEMY;
let SFX_KILL_ENEMY;
let SFX_PLAYER_HIT;
let SFX_WEAPON_CHANGE;
var GLOBAL_MUSIC_VOLUME = 0.5;
var GLOBAL_SFX_VOLUME = 1;

window.onload = function () {

    let conf = {
        width: GAME_WIDTH,
        height: GAME_HEIGHT,
        renderer: Phaser.AUTO,
        parent: 'main-screen'
    };

    game = new Phaser.Game(conf);

    game.state.add('play', playState);
    game.state.add('instructions', instructionsState);
    game.state.add('volume', volumeState);
    game.state.add('menu', menuState);
    game.state.add('load', loadState);
    game.state.start('load');
};
