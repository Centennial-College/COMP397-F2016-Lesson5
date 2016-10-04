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
        };
        Sprite.prototype.update = function () {
        };
        return Sprite;
    }(objects.Scene));
    scenes.Sprite = Sprite;
})(scenes || (scenes = {}));
//# sourceMappingURL=sprite.js.map