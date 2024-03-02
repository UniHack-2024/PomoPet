import { Vector2 } from "../../common";
import { Sprite } from "./Sprite";
import * as PIXI from 'pixi.js';

export class SleepingTomato extends Sprite {

  position: Vector2
  constructor(position: Vector2) {
    super();
    this.position = position;
  }

  render(parentContainer: PIXI.Container<PIXI.DisplayObject>) {
    const tomato = PIXI.Sprite.from('pngs/sleepState1.png')
    tomato.anchor.set(0.5);
    tomato.x = this.position.x;
    tomato.y = this.position.y;
    parentContainer.addChild(tomato)
  }

  t = 0;
  idleAnimation(d: number): void {
    // console.log(d);
    this.t += d / 100;
    this.position.x = 250 + 100 * Math.sin(this.t)
  }

  awakeAnimation(d: number) {
    this.t += d / 100;
    this.position.y = 250 + 100 * Math.sin(this.t)
  }
}