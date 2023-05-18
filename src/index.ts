import { Application } from 'pixi.js'
import { Scene } from './scenes/Scene'; // This is the import statement

const app = new Application({
    view: document.getElementById("pixi-canvas") as HTMLCanvasElement,
    resolution: window.devicePixelRatio || 1,
    autoDensity: true,
    backgroundColor: 0x000000,
    width: 1424,
    height: 720
});

// pass in the screen size to avoid "asking up"
const sceny: Scene = new Scene(app.screen.width, app.screen.height);

app.stage.addChild(sceny)