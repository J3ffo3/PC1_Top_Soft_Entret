import Phaser from 'phaser';

class GameScene extends Phaser.Scene {
    constructor() {
        super("GameScene");
    }

    create() {
        this.background = this.add.image(0, 0, 'background').setOrigin(0, 0);

        this.keys = ["apple", "candy", "rubber_duck", "rotate"]; 
        this.items = []; 

        this.spawnTimer = 0; 
        this.spawnInterval = 120; // cada 2 segundos aprox (60fps)
    }

    update() {
        this.spawnTimer++;

        if (this.spawnTimer >= this.spawnInterval) {
            this.spawnRandomItem();
            this.spawnTimer = 0; // reset del contador
        }

        this.items.forEach(item => {
            if (item.dx && item.dy) {
                item.x += item.dx;
                item.y += item.dy;

                if (item.x <= 0 || item.x >= this.sys.game.config.width - item.width) {
                    item.dx *= -1;
                }
                if (item.y <= 0 || item.y >= this.sys.game.config.height - item.height) {
                    item.dy *= -1;
                }
            }
        });
    }

    spawnRandomItem() {
        let index = this.getRandomInt(0, this.keys.length - 1);
        let randomKey = this.keys[index];

        let x = this.getRandomInt(50, this.sys.game.config.width - 50);
        let y = this.getRandomInt(50, this.sys.game.config.height - 50);

        let item = this.add.sprite(x, y, randomKey).setInteractive();

        // Velocidades aleatorias
        item.dx = this.getRandomInt(0, 1) === 0 ? -2 : 2;
        item.dy = this.getRandomInt(0, 1) === 0 ? -2 : 2;

        // Al hacer click en el ítem
        item.on('pointerdown', () => {
            item.destroy();
            this.items = this.items.filter(i => i !== item);
        });

        this.items.push(item);
    }

    getRandomInt(min, max) {
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }
}

export default GameScene;
