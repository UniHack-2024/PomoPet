import * as PIXI from "pixi.js";
import { GameController } from "./GameController";
import { CANVASHEIGHT, CANVASWIDTH } from "../common";

const canvas = document.getElementById("canvas") as any;
const app = new PIXI.Application({
  view: canvas,
  width: CANVASWIDTH,
  height: CANVASHEIGHT,
  backgroundColor: "lightblue",
});

export const gameController = new GameController(app);

// REMOVE THIS LINE TO SHOW LOGIN PAGE UPON ENTERING
gameController.loadGame()