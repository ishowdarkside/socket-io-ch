import { useEffect, useState } from "react";
import { socket } from "../utils/socket";

export const useSocket = () => {
  const [isConnected, setIsConneted] = useState(socket.connected);

  useEffect(() => {
    const onConnect = () => setIsConneted(true);
    const onDisconnect = () => setIsConneted(false);

    socket.on("connect", onConnect);
    socket.on("disconnect", onDisconnect);

    return () => {
      socket.off("connect", onConnect);
      socket.off("disconnect", onDisconnect);
    };
  }, []);

  const handleConnect = () => socket.connect();

  return { isConnected, handleConnect };
};
