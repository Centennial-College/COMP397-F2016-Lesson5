/*
    Scene module to group all user-defined scenes  under the same "namespace aka module"
    Menu scene that contains all assets and functionality associated with the menu itself
*/

module scenes {
    export class Menu extends objects.Scene {

        // Private instance variables
        private _spriteBtn: objects.Button;
        private _bitmapTransformBtn: objects.Button;

        // Label or bitmap
        // Button 
        // Menu Class Contructor
        constructor() {
            super();
        }

        public start(): void {
            this._spriteBtn = new objects.Button("SpriteBtn", config.Screen.CENTER_X - 180, config.Screen.CENTER_Y);
            this.addChild(this._spriteBtn);
            this._spriteBtn.on('click', this._spriteBtnClick);

            this._bitmapTransformBtn = new objects.Button("BitmapTransformBtn", config.Screen.CENTER_X + 180, config.Screen.CENTER_Y);
            this.addChild(this._bitmapTransformBtn);
            this._bitmapTransformBtn.on('click', this._bitmapTransformBtnClick);

            stage.addChild(this);
        }

        public update(): void {

        }

        private _spriteBtnClick(event: createjs.MouseEvent): void {
            scene = config.Scene.SPRITE;
            changeScene();
        }

        private _bitmapTransformBtnClick(event: createjs.MouseEvent): void {
            scene = config.Scene.BITMAPTRANSFORM;
            changeScene();
        }
    }
}