module scenes {
    export class BitmapTransform extends objects.Scene {

        private _square: createjs.Shape;
        private _testBitmap: createjs.Bitmap;

        private _rotateBtn: objects.Button;
        private _translateBtn: objects.Button;
        private _scaleBtn: objects.Button;

        private _boxblurBtn: objects.Button;
        private _shadowBtn: objects.Button;

        constructor() {
            super();
        }

        public start(): void {
            // Define square object
            this._square = new createjs.Shape();
            this._square.graphics.beginFill("#8f8").drawRect(0, 0, 50, 50);
            this._square.x = config.Screen.CENTER_X - 150;
            this._square.y = config.Screen.CENTER_Y;
            // registration point, offset from square's top-left corner
            this._square.regX = 25;
            this._square.regY = 25;
            this.addChild(this._square);

            // Define Bitmap object
            this._testBitmap = new createjs.Bitmap(assets.getResult("Zero"));
            this._testBitmap.x = config.Screen.CENTER_X;
            this._testBitmap.y = config.Screen.CENTER_Y;
            this._testBitmap.regX = this._testBitmap.getBounds().width / 2;
            this._testBitmap.regY = this._testBitmap.getBounds().height / 2;
            this.addChild(this._testBitmap);

            // Define Buttons
            this._translateBtn = new objects.Button("TranslateBtn", config.Screen.CENTER_X - 175, config.Screen.CENTER_Y + 180);
            this.addChild(this._translateBtn);

            this._rotateBtn = new objects.Button("ScaleBtn", config.Screen.CENTER_X, config.Screen.CENTER_Y + 180);
            this.addChild(this._rotateBtn);

            this._scaleBtn = new objects.Button("RotateBtn", config.Screen.CENTER_X + 175, config.Screen.CENTER_Y + 180);
            this.addChild(this._scaleBtn);

            this._boxblurBtn = new objects.Button("BoxBlurBtn", config.Screen.CENTER_X - 175, config.Screen.CENTER_Y - 180);
            this.addChild(this._boxblurBtn);

            this._shadowBtn = new objects.Button("ShadowBtn", config.Screen.CENTER_X + 175, config.Screen.CENTER_Y - 180);
            this.addChild(this._shadowBtn);

            // Register Btn Clicks
            this._translateBtn.on('click', this._translateBtnClick, this);
            this._rotateBtn.on('click', this._rotateBtnClick, this);
            this._scaleBtn.on('click', this._scaleBtnClick, this);
            this._boxblurBtn.on('click', this._boxblurBtnClick, this);
            this._shadowBtn.on('click', this._shadowBtnClick, this);

            stage.addChild(this);
        }

        public update(): void {

        }

        private _translateBtnClick(event: createjs.MouseEvent): void {
            this._square.setTransform(
                this._square.x + 10, this._square.y,
                this._square.scaleX, this._square.scaleY,
                this._square.rotation,
                this._square.skewX, this._square.skewY,
                this._square.regX, this._square.regY
            );
        }

        private _rotateBtnClick(event: createjs.MouseEvent): void {
            this._square.setTransform(
                this._square.x, this._square.y,
                this._square.scaleX, this._square.scaleY,
                this._square.rotation + 45,
                this._square.skewX, this._square.skewY,
                this._square.regX, this._square.regY
            );
        }

        private _scaleBtnClick(event: createjs.MouseEvent): void {
            this._square.setTransform(
                this._square.x + 10, this._square.y,
                this._square.scaleX * 2, this._square.scaleY * 2,
                this._square.rotation,
                this._square.skewX, this._square.skewY,
                this._square.regX, this._square.regY
            );
        }

        private _boxblurBtnClick(event: createjs.MouseEvent): void {
            let blurFilter = new createjs.BlurFilter(15, 15, 5);
            this._testBitmap.filters = [blurFilter];
            let bounds = blurFilter.getBounds();
            let bitmapBounds = this._testBitmap.getBounds();

            this._testBitmap.cache(bounds.x, bounds.y, bitmapBounds.width, bitmapBounds.height);
        }

        private _shadowBtnClick(event: createjs.MouseEvent): void {
            this._testBitmap.shadow = new createjs.Shadow('#000', 10, 10, 10);
        }
    }
}