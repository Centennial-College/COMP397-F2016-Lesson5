module scenes {
    export class Sprite extends objects.Scene {

        private _bg: createjs.Bitmap;
        private _player: objects.Player;

        constructor() {
            super();
        }

        public start(): void {
            this._bg = new createjs.Bitmap(assets.getResult("Bg"));
            this.addChild(this._bg);

            this._player = new objects.Player("Player", 0, config.Screen.CENTER_Y);
            this._player.x = this._player.getBounds().width / 2;
            this._player.regX = this._player.getBounds().width / 2;
            this._player.regY = this._player.getBounds().height / 2;
            this.addChild(this._player);

            stage.addChild(this);
        }

        public update(): void {
            this._player.update();
        }
    }
}