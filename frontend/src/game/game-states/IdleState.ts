import { GameController } from "../GameController";
import * as PIXI from 'pixi.js';

export abstract class GameState {
  abstract leaveState(): void;
}

export class IdleState extends GameState {
  gameController: GameController
  app: PIXI.Application<PIXI.ICanvas>

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
      this.gameController.bunny.update(d);
      // render
      this.gameController.bunny.render(this.app.stage);
    };
    this.callbacks.push(callback)
    this.app.ticker.add(callback)
  }

  /**
   * remove all callbacks added to the ticker
   */
  leaveState() {
    this.callbacks.forEach(callback => this.app.ticker.remove(callback));
  }


}