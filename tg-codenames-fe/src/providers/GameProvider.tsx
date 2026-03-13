import { useState } from "react";
import { GameContext, type Game } from "../hooks/GameContext";

export function GameProvider({ children }: { children: React.ReactNode }) {
  const [game, setGame] = useState<Game | null>(null);

  return (
    <GameContext.Provider value={{game, setGame}}>
      {children}
    </GameContext.Provider>
  );
}
