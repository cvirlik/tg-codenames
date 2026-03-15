import { createContext, useContext } from "react";

type WebConnection = {
  socket: WebSocket | null;
};

export const ConnectionContext = createContext<WebConnection>({
  socket: null,
});

export const useConnection = () => useContext(ConnectionContext);
