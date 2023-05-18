import { Tween, Group } from "tweedle.js";
import { Container, Sprite, Ticker } from "pixi.js";

export class Scene extends Container {
    private readonly screenWidth: number;
    private readonly screenHeight: number;
    private clampy: Sprite;
    private clampyVelocity: number = 5;
    constructor(screenWidth: number, screenHeight: number) {
        super();

        this.screenWidth = screenWidth;
        this.screenHeight = screenHeight;

        this.clampy = Sprite.from("clampy.png");
        this.clampy.scale.set(0.2);

        this.clampy.anchor.set(0.5);
        this.clampy.x = 0; // we start it at 0
        this.clampy.y = this.screenHeight / 2;
        this.addChild(this.clampy);

        // See the `, this` thingy there? That is another way of binding the context!
        Ticker.shared.add(this.update, this);

        // See how these chains all together
        new Tween(this.clampy.scale).to({ x: 0.5, y: 0.5 }, 1000).repeat(Infinity).yoyo(true).start();

        // This is the same code, but unchained
        // const tweeny = new Tween(this.clampy.scale);
        // tweeny.to({ x: 0.5, y: 0.5 }, 1000);
        // tweeny.repeat(Infinity);
        // tweeny.yoyo(true);
        // tweeny.start();
    }
    
    private lasttime = 0;
    private update(deltaTime: number): void {
        
        this.lasttime+=deltaTime/10;
        this.clampy.x = this.clampy.x + this.clampyVelocity * deltaTime;
        this.clampy.y += Math.cos(this.lasttime)*10;

        if (this.clampy.x > this.screenWidth) {
            // Woah there clampy, come back inside the screen!
            this.clampy.x = 0;
        }
        //You need to update a group for the tweens to do something!
        Group.shared.update()
    }
}