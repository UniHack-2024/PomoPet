
import * as PIXI from 'pixi.js';
import { Vector2 } from "../../common";
import { Sprite } from './Sprite';


export class GenericText extends Sprite {
  position: Vector2;
  value: string;

  constructor(position: Vector2, value: string) {
    super();
    this.position = position;
    this.value = value;
  }

  render(parentContainer: PIXI.Container<PIXI.DisplayObject>) {
    let message = new PIXI.Text(this.value, {
      fontFamily: 'Arial', // Font family
      fontSize: 36,        // Font size
      fill: 0xff0000,      // Fill color
      align: 'center',     // Text alignment
      stroke: '#ffffff',   // Stroke color
      strokeThickness: 4   // Stroke thickness
  });

    message.anchor.set(0.5);
    message.x = this.position.x;
    message.y = this.position.y;
    parentContainer.addChild(message)
  }
}