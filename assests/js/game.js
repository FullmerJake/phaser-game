// Our Game Scene
var scene = new Phaser.Scene("game");

var config = {
    type: Phaser.AUTO,
    width: 800,
    height: 600,
    scene: scene
};

// Create the game with our config values
// This will also inject our canvas element into the HTML source
// for us.

var game = new Phaser.Game(config);

scene.init = function(){
    // Game Variables
    this.score = 0;
    this.lives = 3;
    this.speed = 1.5;
    this.dragon_move = 1;
    this.score_text;
    this.lives_text;
};

scene.preload = function(){
    // lets preload some images that we can use in our game
    this.load.image('background', '../images/background');
    // this.load.image('player', );
    // this.load.image('dragon', );
    // this.load.image('gold', );
};

scene.update = function(){
    // add the background
    var bg = this.add.sprite(0,0, 'background');
    bg.setOrigin(0,0);

    // add score text & game text to screen
    this.scoreText = this.add.text(100, 16, 'score: '+this.score, { fontzSize: '32px', fill: '#000'});
    this.liveText = this.add.text(16, this.sys.game.config.height-50, 'Lives: ' + this.lives, {fontSize: '32px', fill: '#000'});
};

scene.end = function(){};