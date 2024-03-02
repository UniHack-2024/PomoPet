import { CANVASHEIGHT, CANVASWIDTH, getRandomInt } from "../../common";
import { GameController } from "../GameController";
import { GrassBackground } from "../renderables/GrassBackground";
import { Spike } from "../renderables/Spike";
import { TomatoSide } from "../renderables/TomatoSide";
import { GameState } from "./GameState";
import * as PIXI from 'pixi.js';

export class AwakeState extends GameState {
  gameController: GameController
  app: PIXI.Application<PIXI.ICanvas>

  constructor(gameController: GameController) {
    super();
    this.gameController = gameController;
    this.app = gameController.app;
    this.enterState();
  }

  callbacks: any[] = []
  userInputCallback: any;
  grassBackground1: GrassBackground = new GrassBackground({x: 0, y: CANVASHEIGHT - 150});
  grassBackground2: GrassBackground = new GrassBackground({x: CANVASWIDTH, y: CANVASHEIGHT - 150})
  speed = 10;

  tomato: TomatoSide = new TomatoSide({x: 100, y: CANVASHEIGHT - 150})
  spikes: Spike[] = [];
  t = 0;
  LOW = 80;
  HIGH = 100;
  interval = getRandomInt(this.LOW, this.HIGH);
  


  enterState() {
    this.app.ticker.maxFPS = 30;

    this.userInputCallback = (event: KeyboardEvent) => {
      console.log('userInputCallback')
      const key = event.key;
      if (key == ' ') {
        if (this.tomato.position.y == CANVASHEIGHT - 150) {
          this.tomato.jump();
        }
        
      }
    }
    document.addEventListener('keydown', this.userInputCallback);

    const callback = (d: number) => {
      this.app.stage.removeChildren()
      this.grassBackground1.position.x -= this.speed * d;
      this.grassBackground2.position.x -= this.speed * d;

      if (this.grassBackground1.position.x < -CANVASWIDTH) {
        this.grassBackground1.position.x = 0;
        this.grassBackground2.position.x = CANVASWIDTH;
      }
      
      this.t += d;
      if (this.t > this.interval) {
        this.t = 0;
        this.interval = getRandomInt(this.LOW, this.HIGH);
        this.spikes.push(new Spike({x: CANVASWIDTH + 100, y: CANVASHEIGHT - 150}));
      }

      for (let spike of this.spikes) {
        spike.position.x -= this.speed * d;

        if (spike.position.x < -20) {
          this.spikes = this.spikes.filter(s => s != spike);
        }
      }
      this.tomato.updateY(d)
      
      this.grassBackground1.render(this.app.stage);
      this.grassBackground2.render(this.app.stage);
      for (let spike of this.spikes) {
        spike.render(this.app.stage)
      }

      this.tomato.render(this.app.stage)
    };


    this.callbacks.push(callback)
    this.app.ticker.add(callback)
  }

  /**
   * remove all callbacks added to the ticker
   */
  leaveState() {
    this.callbacks.forEach(callback => {this.app.ticker.remove(callback)});
    document.removeEventListener('keydown', this.userInputCallback);
    this.app.stage.removeChildren();
  }


}