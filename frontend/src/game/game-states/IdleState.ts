import { GameController } from "../GameController";
import * as PIXI from 'pixi.js';
import { Bunny } from "../renderables/Bunny";
import { AwakeState } from "./AwakeState";
import { GameState } from "./GameState";
import { Timer } from "../renderables/Timer";


export class IdleState extends GameState {
  gameController: GameController
  app: PIXI.Application<PIXI.ICanvas>
  bunny: Bunny = new Bunny({x: 250, y:250});
  timer: Timer = new Timer({x: 250, y: 20}, 10)


  constructor(gameController: GameController) {
    super();
    this.gameController = gameController;
    this.app = gameController.app;
    this.enterState();
  }

  callbacks: any[] = []
  intervalId: number = -1;
  enterState() {
    this.app.ticker.maxFPS = 30;
    const callback = (d: number) => {
      this.app.stage.removeChildren()
      // update
      this.bunny.idleAnimation(d);
      // render
      this.bunny.render(this.app.stage);
      this.timer.render(this.app.stage)
    };

    this.callbacks.push(callback)
    this.app.ticker.add(callback)

    this.intervalId = setInterval(() => {
      this.timer.decrement();
    }, 1000)

    setTimeout(() => {
      this.gameController.changeGameState(new AwakeState(this.gameController))
    }, 10000)
  }

  /**
   * remove all callbacks added to the ticker
   */
  leaveState() {
    this.callbacks.forEach(callback => this.app.ticker.remove(callback));
    clearInterval(this.intervalId)
    this.app.stage.removeChildren();
  }
}

export { GameState };
