import Phaser from 'phaser';

class MenuScene extends Phaser.Scene {
    constructor() {
        super("MenuScene");
    }
    create() {
        this.background = this.add.image(0,0,'background');
        this.background.setOrigin(0,0);
        this.title = this.add.text(0,0,'BIENVENIDA',{
            font: '40px Arial',
            fill: '#000000'
        });
        this.title.x = this.scale.width/2 - this.title.width/2;
        this.title.setInteractive();
        this.title.on('pointerdown',()=>{
            alert("Iniciando juego...");
            this.scene.start("GameScene");
        });
        this.logo = this.add.image(0,0,'logo');
        this.logo.x = this.scale.width*0.5;
        this.logo.y = this.scale.height * 0.5;
        this.logo.setScale(5);
    }
}
export default MenuScene;