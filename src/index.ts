import { Application, BlurFilter,  Sprite, Graphics, BitmapText, BitmapFont} from 'pixi.js'

const app = new Application({
    view: document.getElementById("pixi-canvas") as HTMLCanvasElement,
    resolution: window.devicePixelRatio || 1,
  autoDensity: true,
    backgroundColor: 0x6495ed,
    width: 1040,
    height: 680
});
const graphy: Graphics = new Graphics();

// Make your filter
const myBlurFilter = new BlurFilter();

// we give instructions in order. begin fill, line style, draw circle, end filling
graphy.beginFill(0xFF00FF);
graphy.lineStyle(50, 0x00FF00);
graphy.drawCircle(-100, 55, 155); // See how I set the drawing at 0,0? NOT AT 100, 100!
graphy.endFill();

app.stage.addChild(graphy); //I can add it before setting position, nothing bad will happen.

// Here we set it at 100,100
graphy.x = 800;
graphy.y = 300;

const clampy: Sprite = Sprite.from("clampy.png");

clampy.anchor.set(0.5);

// setting it to "the middle of the screen
clampy.x = app.screen.width / 3;
clampy.y = app.screen.height / 3;

clampy.filters = [myBlurFilter];

app.stage.addChild(clampy);

// If you need to know, this is the expensive part. This creates the font atlas
BitmapFont.from("comic 32", {
    fill: "#ffffff", // White, will be colored later
    fontFamily: "Comic Sans MS",
    fontSize: 32
})

// Remember, this font only has letters and numbers. No commas or any other symbol.
const bitmapTexty: BitmapText = new BitmapText("I love baking, my family, and my friends",
    {
        fontName: "comic 32",
        fontSize: 50, // Making it too big or too small will look bad
        tint: 0xffff00 // Here we make it red.
    });

bitmapTexty.text = "This is cheap";
bitmapTexty.text = "Change it as much as you want";
bitmapTexty.x = 200;
bitmapTexty.y  = 400;

app.stage.addChild(bitmapTexty);