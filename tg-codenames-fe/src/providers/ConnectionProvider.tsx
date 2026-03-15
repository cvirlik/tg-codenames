import { useEffect, useMemo } from "react";
import { ConnectionContext } from "../hooks/ConnectionContext";
import { useGame } from "../hooks/GameContext";

export function ConnectionProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const socket = useMemo(
    () =>
      new WebSocket(
        `ws://localhost:3000/ws?chatId=1&userId=${Date.now()}&name=test`,
      ),
    [],
  );
  const { setGame } = useGame();

  useEffect(() => {
    const listener = (event: MessageEvent) => {
      const message = JSON.parse(event.data);
      if (message?.type === "game" && message?.data) {
        setGame(message.data);
      }
    };

    socket.addEventListener("message", listener);

    return () => socket.removeEventListener("message", listener);
  }, [setGame, socket]);

  return (
    <ConnectionContext.Provider value={{ socket }}>
      {children}
    </ConnectionContext.Provider>
  );
}
