import React from "react";
import { Button } from "@/components/ui/button";
import { Undo2, Redo2, Trash2 } from "lucide-react";
import { io } from "socket.io-client";

const socket = io("http://localhost:5000");

export default function Toolbar({ roomId }) {
  const handleUndo = () => socket.emit("undo", roomId);
  const handleRedo = () => socket.emit("redo", { roomId, redoStack: [] });
  const handleClear = () => socket.emit("clear", roomId);

  return (
    <div className="flex space-x-2 p-2 border-b shadow-sm bg-white">
      <Button variant="outline" size="icon" onClick={handleUndo}>
        <Undo2 className="w-4 h-4" />
      </Button>
      <Button variant="outline" size="icon" onClick={handleRedo}>
        <Redo2 className="w-4 h-4" />
      </Button>
      <Button variant="destructive" size="icon" onClick={handleClear}>
        <Trash2 className="w-4 h-4" />
      </Button>
    </div>
  );
}
