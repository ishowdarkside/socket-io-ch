import app from "./app";
import { Server } from "socket.io";

const io = new Server({
  cors: {
    origin: process.env.CLIENT_ENV,
  },
});

io.on("connection", (socket) => {
  socket.emit("welcome", () => ({ message: "Successfully connected to websocket" }));
});

const PORT = process.env.PORT || 3000;

io.listen(+process.env.SOCKET_PORT!);

app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}`);
});
