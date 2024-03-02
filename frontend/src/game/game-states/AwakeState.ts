import { GameController } from "../GameController";
import { Bunny } from "../renderables/Bunny";
import { GameState } from "./GameState";
import * as PIXI from 'pixi.js';

export class AwakeState extends GameState {
  gameController: GameController
  app: PIXI.Application<PIXI.ICanvas>
  bunny: Bunny = new Bunny({x: 250, y:250});

  constructor(gameController: GameController) {
    super();
    this.gameController = gameController;
    this.app = gameController.app;
    this.enterState();
  }

  callbacks: any[] = []
  enterState() {
    this.app.ticker.maxFPS = 30;
    const callback = (d: number) => {
      this.app.stage.removeChildren()
      // update
      this.bunny.awakeAnimation(d);
      // render
      this.bunny.render(this.app.stage);
    };
    this.callbacks.push(callback)
    this.app.ticker.add(callback)
  }

  /**
   * remove all callbacks added to the ticker
   */
  leaveState() {
    this.callbacks.forEach(callback => this.app.ticker.remove(callback));
    this.app.stage.removeChildren();
  }


}