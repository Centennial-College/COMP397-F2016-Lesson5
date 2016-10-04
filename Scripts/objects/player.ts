namespace objects {
    export class Player extends createjs.Bitmap {

        private _moveX: boolean;
        private _moveY: boolean;

        private _keyPressed: number;

        constructor(pathString: string, x: number, y: number) {
            super(assets.getResult(pathString));

            this.x = x;
            this.y = y;

            window.onkeydown = this._onKeyDown;
            window.onkeyup = this._onKeyUp;
        }

        public update(): void {
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
        }

        private _moveUp(): void {
            this.setTransform(this.x, this.y - 5, this.scaleX, this.scaleY, this.rotation, this.skewX, this.skewY, this.regX, this.regY);
        }

        private _moveLeft(): void {
            this.setTransform(this.x - 5, this.y, this.scaleX, this.scaleY, this.rotation, this.skewX, this.skewY, this.regX, this.regY);
        }

        private _moveDown(): void {
            this.setTransform(this.x, this.y + 5, this.scaleX, this.scaleY, this.rotation, this.skewX, this.skewY, this.regX, this.regY);
        }

        private _moveRight(): void {
            this.setTransform(this.x + 5, this.y, this.scaleX, this.scaleY, this.rotation, this.skewX, this.skewY, this.regX, this.regY);
        }

        private _onKeyDown(event: KeyboardEvent): void {
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
        }

        private _onKeyUp(event: KeyboardEvent): void {
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
        }
    }
}