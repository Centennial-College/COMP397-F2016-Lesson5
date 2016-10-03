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
        };
        BitmapTransform.prototype.update = function () {
        };
        return BitmapTransform;
    }(objects.Scene));
    scenes.BitmapTransform = BitmapTransform;
})(scenes || (scenes = {}));
//# sourceMappingURL=bitmaptransform.js.map