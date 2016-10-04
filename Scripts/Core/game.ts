/// <reference path = "_reference.ts" />

// Global Variables
var assets: createjs.LoadQueue;
var canvas: HTMLElement;
var stage: createjs.Stage;

var currentScene: objects.Scene;
var scene: number;

// Game scenes
var menuScene: scenes.Menu;
var gameScene: scenes.Game;

// Preload Assets required
var assetData: objects.Asset[] = [
    { id: "SpriteBtn", src: "../../Assets/images/SpriteBtn.png" },
    { id: "BitmapTransformBtn", src: "../../Assets/images/BitmapTransformBtn.png" },
    { id: "RotateBtn", src: "../../Assets/images/Rotate.png" },
    { id: "TranslateBtn", src: "../../Assets/images/Translate.png" },
    { id: "BoxBlurBtn", src: "../../Assets/images/BoxBlur.png" },
    { id: "ShadowBtn", src: "../../Assets/images/Shadow.png" },
    { id: "ScaleBtn", src: "../../Assets/images/Scale.png" },
    { id: "Zero", src: "../../Assets/images/Zero.png" },
];

function preload() {
    // Create a queue for assets being loaded
    assets = new createjs.LoadQueue(false);
    // assets.installPlugin(createjs.Sound);

    // Register callback function to be run when assets complete loading.
    assets.on("complete", init, this);
    assets.loadManifest(assetData);
}

function init() {
    // Reference to canvas element
    canvas = document.getElementById("canvas");

    // Tie canvas element to createjs stage container
    stage = new createjs.Stage(canvas);

    // Enable mouse events that are polled 20 times per tick
    stage.enableMouseOver(20);

    // Set FPS for game and register for "tick" callback function
    createjs.Ticker.setFPS(config.Game.FPS);
    createjs.Ticker.on("tick", this.gameLoop, this);

    // Set initial scene to MENU scene and call changeScene().
    scene = config.Scene.MENU;
    changeScene();
}

function gameLoop(event: createjs.Event): void {
    // Update whatever scene is currently active.
    console.log("gameLoop update");
    currentScene.update();
    stage.update();
}

function changeScene(): void {

    // Simple state machine pattern to define scene swapping.
    switch (scene) {
        case config.Scene.MENU:
            stage.removeAllChildren();
            menuScene = new scenes.Menu();
            currentScene = menuScene;
            console.log("Starting MENU scene");
            break;
        case config.Scene.GAME:
            stage.removeAllChildren();
            currentScene = new scenes.Game();
            console.log("Starting GAME scene");
            break;
        case config.Scene.SPRITE:
            stage.removeAllChildren();
            currentScene = new scenes.Sprite();
            console.log("Starting SPRITE scene");
            break;
        case config.Scene.BITMAPTRANSFORM:
            stage.removeAllChildren();
            currentScene = new scenes.BitmapTransform();
            console.log("Starting BITMAPTRANSFORM scene");
            break;
    }

}