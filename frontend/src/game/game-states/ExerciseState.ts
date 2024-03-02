import { GameController } from "../GameController";
import * as PIXI from 'pixi.js';
import { Bunny } from "../renderables/Bunny";
import { ExerciseTomato } from "../renderables/ExerciseTomato";
import { GrassBackground } from "../renderables/GrassBackground";
import { Sky } from "../renderables/Sky";
import { AwakeState } from "./AwakeState";
import { GameState } from "./GameState";
import { Timer } from "../renderables/Timer";
import { CANVASHEIGHT, EXERCISECOUNT, EXERCISETIMEOUT } from "../../common";
import { PeacefulBackground } from "../renderables/PeacefulBackground";
import { Cloud } from "../renderables/Cloud";
import { Planet } from "../renderables/Planet";
import { Game } from "../Game";
import { IdleState } from "./IdleState";


export class ExerciseState extends GameState {
  gameController: GameController
  app: PIXI.Application<PIXI.ICanvas>
  bunny: Bunny = new Bunny({x: 250, y:250});
  cloud1: Cloud = new Cloud({x: 50, y:50});
  cloud2: Cloud = new Cloud({x: 230, y:20});
  sky: Sky;
  planet : Planet = new Planet({x: -50, y:260});
  peacefulBackground: PeacefulBackground = new PeacefulBackground({x: 0, y: 0});
  timer: Timer = new Timer({x: 250, y: 50}, EXERCISECOUNT, 'EXERCISE TIME!!!!\n TIME REMAINING:')
  exerciseTomato: ExerciseTomato = new ExerciseTomato({x: 150, y:400});

  constructor(gameController: GameController) {
    super();
    this.gameController = gameController;
    this.app = gameController.app;

    this.sky = new Sky({x: 0, y:0}, this.app)

    this.enterState();
  }

  callbacks: any[] = []
  intervalId: number = -1;
  enterState() {
    this.app.ticker.maxFPS = 30;
    (this.app.renderer as any).backgroundColor = 0x08f4e2;

    const callback = (d: number) => {
      this.app.stage.removeChildren()
      const planetOuput = this.planet.move(d);
      this.sky.checkTransition(planetOuput);
      this.cloud1.move(d);
      this.cloud2.move(d);

      // render
      this.sky.render(this.app.stage)
      this.planet.render(this.app.stage)
      this.peacefulBackground.render(this.app.stage);
      this.exerciseTomato.render(this.app.stage);
      
      this.cloud1.render(this.app.stage)
      this.cloud2.render(this.app.stage)
      this.timer.render(this.app.stage)
    };

    this.callbacks.push(callback)
    this.app.ticker.add(callback)

    this.intervalId = setInterval(() => {
      // update
      this.exerciseTomato.idleAnimation();
      this.timer.decrement();
    }, 1000)

    setTimeout(() => {
        this.gameController.changeGameState(new IdleState(this.gameController))
    }, EXERCISETIMEOUT )
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
