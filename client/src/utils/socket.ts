import { io } from "socket.io-client";
const URL = import.meta.env.VITE_NODE_ENV === "production" ? undefined : "http://localhost:8001";

console.log(URL);
export const socket = io(URL, {
  autoConnect: false,
});
