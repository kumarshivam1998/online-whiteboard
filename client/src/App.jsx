import React, { useState } from "react";
import Whiteboard from "./components/Whiteboard";
import Sidebar from "./components/Sidebar";
import Toolbar from "./components/Toolbar";

export default function App() {
  const [room, setRoom] = useState("");
  const [joined, setJoined] = useState(false);

  return (
    <div className="flex h-screen">
      {!joined ? (
        <div className="m-auto flex flex-col items-center space-y-4">
          <h1 className="text-2xl font-bold">Join a Whiteboard Room</h1>
          <input
            type="text"
            placeholder="Enter Room ID"
            className="border p-2 rounded"
            value={room}
            onChange={(e) => setRoom(e.target.value)}
          />
          <button
            onClick={() => setJoined(true)}
            className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
          >
            Join
          </button>
        </div>
      ) : (
        <div className="flex w-full">
          <Sidebar />
          <div className="flex flex-col flex-1">
            <Toolbar roomId={room} />
            <Whiteboard roomId={room} />
          </div>
        </div>
      )}
    </div>
  );
}
