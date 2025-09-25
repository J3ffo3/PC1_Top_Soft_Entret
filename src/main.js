import Phaser from 'phaser';
import PreloadScene from './scenes/PreloadScene.js';
import MenuScene from './scenes/MenuScene.js';
import GameScene from './scenes/GameScene.js';

class PlayGame extends Phaser.Scene {
    constructor() {
        super({ key: 'PlayGame' });
    }

    preload() {
        // Load assets here
        

    }

    create() {
        // Create game objects here
        
        
    }

    update() {
        // Update game objects here
    }
}

const config = {
    // Phaser.AUTO = Detect WebGL, if not available, use Canvas
    // Phaser.CANVAS = Force Canvas rendering
    // Phaser.WEBGL = Force WebGL rendering
    type: Phaser.AUTO,
    width: 360,
    height: 440,
    scene: [PreloadScene, MenuScene, GameScene],
};

new Phaser.Game(config);