import { useState } from "react";
import { type Game, GameContext } from "../hooks/GameContext";

export function GameProvider({ children }: { children: React.ReactNode }) {
  const [game, setGame] = useState<Game | null>(null);

  return (
    <GameContext.Provider value={{ game, setGame }}>
      {children}
    </GameContext.Provider>
  );
}
