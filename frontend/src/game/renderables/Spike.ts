
import * as PIXI from 'pixi.js';
import { Vector2 } from "../../common";
import { Sprite } from './Sprite';


export class Spike extends Sprite {
  position: Vector2;

  constructor(position: Vector2) {
    super();
    this.position = position;
  }

  render(parentContainer: PIXI.Container<PIXI.DisplayObject>) {
    // const texture = PIXI.Texture.from('pngs/pure-grass.png')
    // console.log(texture)
    const sprite = PIXI.Sprite.from('pngs/spike.png')
    sprite.width = 70;
    sprite.height = 70;
    sprite.x = this.position.x - sprite.width / 2;
    sprite.y = this.position.y - sprite.height / 2;
    parentContainer.addChild(sprite)
  }

}