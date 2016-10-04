var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var scenes;
(function (scenes) {
    var BitmapTransform = (function (_super) {
        __extends(BitmapTransform, _super);
        function BitmapTransform() {
            _super.call(this);
        }
        BitmapTransform.prototype.start = function () {
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
        };
        BitmapTransform.prototype.update = function () {
        };
        BitmapTransform.prototype._translateBtnClick = function (event) {
            this._square.setTransform(this._square.x + 10, this._square.y, this._square.scaleX, this._square.scaleY, this._square.rotation, this._square.skewX, this._square.skewY, this._square.regX, this._square.regY);
        };
        BitmapTransform.prototype._rotateBtnClick = function (event) {
            this._square.setTransform(this._square.x, this._square.y, this._square.scaleX, this._square.scaleY, this._square.rotation + 45, this._square.skewX, this._square.skewY, this._square.regX, this._square.regY);
        };
        BitmapTransform.prototype._scaleBtnClick = function (event) {
            this._square.setTransform(this._square.x + 10, this._square.y, this._square.scaleX * 2, this._square.scaleY * 2, this._square.rotation, this._square.skewX, this._square.skewY, this._square.regX, this._square.regY);
        };
        BitmapTransform.prototype._boxblurBtnClick = function (event) {
            var blurFilter = new createjs.BlurFilter(15, 15, 5);
            this._testBitmap.filters = [blurFilter];
            var bounds = blurFilter.getBounds();
            var bitmapBounds = this._testBitmap.getBounds();
            this._testBitmap.cache(bounds.x, bounds.y, bitmapBounds.width, bitmapBounds.height);
        };
        BitmapTransform.prototype._shadowBtnClick = function (event) {
            this._testBitmap.shadow = new createjs.Shadow('#000', 10, 10, 10);
        };
        return BitmapTransform;
    }(objects.Scene));
    scenes.BitmapTransform = BitmapTransform;
})(scenes || (scenes = {}));
//# sourceMappingURL=bitmaptransform.js.map