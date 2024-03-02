
export interface Vector2 {
  x: number,
  y: number
}

export const rootStyles: React.CSSProperties = {
  position: "absolute",
  top: 0,
  left: 0,
  width: '100%',
};

export const CANVASWIDTH = 500
export const CANVASHEIGHT = 500

export function getRandomInt(min: number, max: number) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}