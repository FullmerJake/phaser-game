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