import { useRef, useCallback } from "react";

export default function useCanvas(canvasRef) {
  const drawing = useRef(false);
  const ctxRef = useRef(null);

  const getContext = () => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    if (!ctxRef.current) {
      ctxRef.current = canvas.getContext("2d");
    }
    return ctxRef.current;
  };

  const startDrawing = (e, roomId, socket) => {
    drawing.current = true;
    const { offsetX, offsetY } = e.nativeEvent;
    const action = { type: "begin", x: offsetX, y: offsetY };
    socket.emit("draw", { roomId, action });
  };

  const draw = (e, roomId, socket) => {
    if (!drawing.current) return;
    const { offsetX, offsetY } = e.nativeEvent;
    const action = { type: "draw", x: offsetX, y: offsetY };
    socket.emit("draw", { roomId, action });
  };

  const stopDrawing = () => {
    drawing.current = false;
  };

  const redraw = useCallback((actions) => {
    const ctx = getContext();
    if (!ctx) return;
    ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height);
    ctx.beginPath();

    actions.forEach((a) => {
      if (a.type === "begin") {
        ctx.moveTo(a.x, a.y);
      } else if (a.type === "draw") {
        ctx.lineTo(a.x, a.y);
        ctx.stroke();
      }
    });
  }, []);

  return { startDrawing, draw, stopDrawing, redraw };
}
