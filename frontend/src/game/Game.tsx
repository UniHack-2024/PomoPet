import React, { useEffect, useRef } from "react";
import * as PIXI from "pixi.js";
import { CANVASHEIGHT, CANVASWIDTH } from "../common";
import { GameController } from "./GameController";
import "./game.css";

export function Game() {
  const canvas = useRef() as any;
  useEffect(() => {
    const app = new PIXI.Application({
      view: canvas.current,
      width: CANVASWIDTH,
      height: CANVASHEIGHT,
      backgroundColor: "lightblue",
    });
    const gameController = new GameController(app, canvas);
    gameController.loadGame();
  });

  const canvasStyles: React.CSSProperties = {
    border: "2px solid black",
  };

  return (
    <>
      <div
        style={{
          textAlign: "center",
          backgroundImage: "url(pngs/game-background2.jpg)",
          height: "100vh",
          // backgroundSize: "cover",
        }}
      >
        <div id="title2"> POMO PET </div>
        <div style={{ height: "10vh" }}></div>
        <canvas ref={canvas} style={canvasStyles}></canvas>
      </div>
    </>
  );
}
