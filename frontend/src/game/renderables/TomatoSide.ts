
import * as PIXI from 'pixi.js';
import { CANVASHEIGHT, Vector2 } from "../../common";
import { Sprite } from './Sprite';


export class TomatoSide extends Sprite {
  position: Vector2;

  constructor(position: Vector2) {
    super();
    this.position = position;
  }

  ySpeed = 0;
  gravity = 8000;

  jump() {
    this.ySpeed = -1400;
  } 

  updateY(d: number) {
    this.ySpeed += this.gravity * (d / 100);
    this.position.y += this.ySpeed * (d / 100);
    if (this.position.y > CANVASHEIGHT - 150) {
      this.position.y = CANVASHEIGHT - 150;
    }
  }

  render(parentContainer: PIXI.Container<PIXI.DisplayObject>) {
    // const texture = PIXI.Texture.from('pngs/pure-grass.png')
    // console.log(texture)
    const sprite = PIXI.Sprite.from('pngs/tomato-sideview.png')
    sprite.width = 70;
    sprite.height = 70;
    sprite.x = this.position.x - sprite.width / 2;
    sprite.y = this.position.y - sprite.height / 2;
    parentContainer.addChild(sprite)
  }

}