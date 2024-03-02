import { GameController } from "../GameController";
import * as PIXI from 'pixi.js';
import { Bunny } from "../renderables/Bunny";
import { SleepingTomato } from "../renderables/SleepingTomato";
import { GrassBackground } from "../renderables/GrassBackground";
import { AwakeState } from "./AwakeState";
import { GameState } from "./GameState";
import { Timer } from "../renderables/Timer";
import { CANVASHEIGHT, IDLECOUNT, IDLETIMEOUT } from "../../common";
import { PeacefulBackground } from "../renderables/PeacefulBackground";


export class IdleState extends GameState {
  gameController: GameController
  app: PIXI.Application<PIXI.ICanvas>
  bunny: Bunny = new Bunny({x: 250, y:250});
  peacefulBackground: PeacefulBackground = new PeacefulBackground({x: 0, y: 0});
  timer: Timer = new Timer({x: 250, y: 20}, IDLECOUNT)
  sleepingTomato: SleepingTomato = new SleepingTomato({x: 150, y:400});

  constructor(gameController: GameController) {
    super();
    this.gameController = gameController;
    this.app = gameController.app;
    this.enterState();
  }

  callbacks: any[] = []
  intervalId: number = -1;
  enterState() {
    this.app.ticker.maxFPS = 1;
    const callback = (d: number) => {
      this.app.stage.removeChildren()

      // render
      this.peacefulBackground.render(this.app.stage);
      this.sleepingTomato.render(this.app.stage);
      this.timer.render(this.app.stage)
    };

    this.callbacks.push(callback)
    this.app.ticker.add(callback)

    this.intervalId = setInterval(() => {
      // update
      this.sleepingTomato.idleAnimation();

      this.timer.decrement();
    }, 1000)

    setTimeout(() => {
      this.gameController.changeGameState(new AwakeState(this.gameController))
    }, IDLETIMEOUT )
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
