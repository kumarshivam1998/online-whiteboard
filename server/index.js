import express from "express";
import http from "http";
import { Server } from "socket.io";
import cors from "cors";

const app = express();
const server = http.createServer(app);
const io = new Server(server, {
  cors: {
    origin: "*",
  },
});

const rooms = {}; // { roomId: [actions] }

io.on("connection", (socket) => {
  console.log("User connected", socket.id);

  socket.on("joinRoom", (roomId) => {
    socket.join(roomId);
    if (!rooms[roomId]) rooms[roomId] = [];
    socket.emit("loadCanvas", rooms[roomId]);
  });

  socket.on("draw", ({ roomId, action }) => {
    if (rooms[roomId]) rooms[roomId].push(action);
    socket.to(roomId).emit("draw", action);
  });

  socket.on("undo", (roomId) => {
    if (rooms[roomId]?.length) rooms[roomId].pop();
    io.to(roomId).emit("loadCanvas", rooms[roomId]);
  });

  socket.on("redo", ({ roomId, redoStack }) => {
    if (rooms[roomId]) {
      rooms[roomId].push(...redoStack);
      io.to(roomId).emit("loadCanvas", rooms[roomId]);
    }
  });

  socket.on("clear", (roomId) => {
    rooms[roomId] = [];
    io.to(roomId).emit("loadCanvas", []);
  });
});

const PORT = 5000;
server.listen(PORT, () => console.log(`Server running on port ${PORT}`));
