var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var scenes;
(function (scenes) {
    var Sprite = (function (_super) {
        __extends(Sprite, _super);
        function Sprite() {
            _super.call(this);
        }
        Sprite.prototype.start = function () {
            this._bg = new createjs.Bitmap(assets.getResult("Bg"));
            this.addChild(this._bg);
            this._player = new objects.Player("Player", 0, config.Screen.CENTER_Y);
            this._player.x = this._player.getBounds().width / 2;
            this._player.regX = this._player.getBounds().width / 2;
            this._player.regY = this._player.getBounds().height / 2;
            this.addChild(this._player);
            stage.addChild(this);
        };
        Sprite.prototype.update = function () {
            this._player.update();
        };
        return Sprite;
    }(objects.Scene));
    scenes.Sprite = Sprite;
})(scenes || (scenes = {}));
//# sourceMappingURL=sprite.js.map