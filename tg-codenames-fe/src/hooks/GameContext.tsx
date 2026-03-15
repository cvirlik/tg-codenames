import { createContext, useContext } from "react";

export type Word = {
  word: string;
  type: "red" | "blue" | "white" | "black" | "hidden";
  selectedBy: string[];
  revealed: boolean;
};

export type Player = {
  id: number;
  name: string;
  team?: "red" | "blue";
  isMaster: boolean;
};

type State =
  | "idle"
  | "blue-master"
  | "red-master"
  | "blue-guessing"
  | "red-guessing"
  | "game-over";

export type Game = {
  id: number;
  redTeam: Player[];
  blueTeam: Player[];
  words: Word[];
  state: State;
};

export type GameContextType = {
  setGame: (game: Game | null) => void;
  game: Game | null;
};

export const GameContext = createContext<GameContextType>({
  game: null,
  setGame: () => {},
});

export const useGame = () => useContext(GameContext);
