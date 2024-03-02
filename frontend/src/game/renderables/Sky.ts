import * as PIXI from 'pixi.js';
import { Vector2, background_zIndex} from "../../common";
import { Sprite } from './Sprite';
import { CANVASHEIGHT, CANVASWIDTH } from "../../common";


export class Sky extends Sprite {
  position: Vector2;
  color = 0xFF0000;
  rec : PIXI.Graphics;

  constructor(position: Vector2) {
    super();
    this.position = position;
    this.rec = new PIXI.Graphics();
  }

  render(parentContainer: PIXI.Container<PIXI.DisplayObject>) {
    this.rec.beginFill(this.color);
    this.rec.drawRect(0, 0, CANVASHEIGHT, CANVASWIDTH); // (x, y, width, height)
    this.rec.endFill();
    this.rec.zIndex = background_zIndex;
    parentContainer.addChild(this.rec)
  }

  checkTransition(planetOuput : number) {
    if (planetOuput == 0) {
      this.nightTransition();
    } else if (planetOuput == 1) {
      this.dayTransition();
    }
  }

  nightTransition() {
    const startColor = 0x08f4e2; // Red
    const endColor = 0x5a35d4;   // Blue

    const colorTween = new PIXI.TWEEN.Tween(rec)
    .to({ tint: endColor }, 2000) // 2000 milliseconds duration
    .start(); 
  }
}