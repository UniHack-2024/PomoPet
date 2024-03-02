import { CANVASHEIGHT } from "../../common";
import { GameController } from "../GameController";
import { Bunny } from "../renderables/Bunny";
import { GrassBackground } from "../renderables/GrassBackground";
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
  grassBackground: GrassBackground = new GrassBackground({x: 0, y: CANVASHEIGHT - 200});
  enterState() {
    this.app.ticker.maxFPS = 30;

    const callback = (d: number) => {
      this.app.stage.removeChildren()
      this.grassBackground.render(this.app.stage);
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