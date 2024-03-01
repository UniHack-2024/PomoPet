import * as PIXI from 'pixi.js';
import { Vector2 } from '../common';
import { Sprite } from './renderables/Sprite';
import { Bunny } from './renderables/Bunny';
import { GameState, IdleState } from './game-states/IdleState';
import { TitleState } from './game-states/TitleState';

export const NODERADIUS = 50;
export const LINEWIDTH = 2;


export class GameController {
  app: PIXI.Application<PIXI.ICanvas>
  state: GameState;

  /**
   * initializes the app. Doesn't actually do anything
   * @param app
   */
  constructor(app: PIXI.Application<PIXI.ICanvas>) {
    this.app = app;
    this.state = new TitleState();
  }

  /**
   * called when the user logs in
   */
  bunny: Bunny = new Bunny({x: 250, y:250});
  loadGame() {
    this.changeGameState(new IdleState(this))
  }

  changeGameState(newState: GameState) {
    this.state.leaveState();
    this.state = newState;
  }

  printMsg() {
    console.log('hello from gamecontroller');
    
  }
}