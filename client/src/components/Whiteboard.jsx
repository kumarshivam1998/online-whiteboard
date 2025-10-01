import React, { useRef, useEffect, useState } from "react";
import { io } from "socket.io-client";
import useCanvas from "../hooks/useCanvas";

const socket = io("http://localhost:5000");

export default function Whiteboard({ roomId }) {
  const canvasRef = useRef(null);
  const { startDrawing, draw, stopDrawing, redraw } = useCanvas(canvasRef);
  const [actions, setActions] = useState([]);

  useEffect(() => {
    socket.emit("joinRoom", roomId);

    socket.on("loadCanvas", (history) => {
      setActions(history);
      redraw(history);
    });

    socket.on("draw", (action) => {
      setActions((prev) => [...prev, action]);
      redraw([...actions, action]);
    });

    return () => socket.off();
  }, [roomId, redraw, actions]);

  const handleMouseDown = (e) => startDrawing(e, roomId, socket);
  const handleMouseMove = (e) => draw(e, roomId, socket);
  const handleMouseUp = () => stopDrawing();

  return (
    <canvas
      ref={canvasRef}
      className="flex-1 bg-white"
      onMouseDown={handleMouseDown}
      onMouseMove={handleMouseMove}
      onMouseUp={handleMouseUp}
    />
  );
}
