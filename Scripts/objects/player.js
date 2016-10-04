var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var objects;
(function (objects) {
    var Player = (function (_super) {
        __extends(Player, _super);
        function Player(pathString, x, y) {
            _super.call(this, assets.getResult(pathString));
            this.x = x;
            this.y = y;
            window.onkeydown = this._onKeyDown;
            window.onkeyup = this._onKeyUp;
        }
        Player.prototype.update = function () {
            if (controls.UP) {
                this._moveUp();
            }
            if (controls.LEFT) {
                this._moveLeft();
            }
            if (controls.DOWN) {
                this._moveDown();
            }
            if (controls.RIGHT) {
                this._moveRight();
            }
        };
        Player.prototype._moveUp = function () {
            this.setTransform(this.x, this.y - 5, this.scaleX, this.scaleY, this.rotation, this.skewX, this.skewY, this.regX, this.regY);
        };
        Player.prototype._moveLeft = function () {
            this.setTransform(this.x - 5, this.y, this.scaleX, this.scaleY, this.rotation, this.skewX, this.skewY, this.regX, this.regY);
        };
        Player.prototype._moveDown = function () {
            this.setTransform(this.x, this.y + 5, this.scaleX, this.scaleY, this.rotation, this.skewX, this.skewY, this.regX, this.regY);
        };
        Player.prototype._moveRight = function () {
            this.setTransform(this.x + 5, this.y, this.scaleX, this.scaleY, this.rotation, this.skewX, this.skewY, this.regX, this.regY);
        };
        Player.prototype._onKeyDown = function (event) {
            switch (event.keyCode) {
                case keys.W:
                    console.log("W key pressed");
                    controls.UP = true;
                    break;
                case keys.A:
                    console.log("A key pressed");
                    controls.LEFT = true;
                    break;
                case keys.S:
                    console.log("S key pressed");
                    controls.DOWN = true;
                    break;
                case keys.D:
                    console.log("D key pressed");
                    controls.RIGHT = true;
                    break;
            }
        };
        Player.prototype._onKeyUp = function (event) {
            switch (event.keyCode) {
                case keys.W:
                    console.log("W key released");
                    controls.UP = false;
                    break;
                case keys.A:
                    console.log("A key released");
                    controls.LEFT = false;
                    break;
                case keys.S:
                    console.log("S key released");
                    controls.DOWN = false;
                    break;
                case keys.D:
                    console.log("D key released");
                    controls.RIGHT = false;
                    break;
            }
        };
        return Player;
    }(createjs.Bitmap));
    objects.Player = Player;
})(objects || (objects = {}));
//# sourceMappingURL=player.js.map