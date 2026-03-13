import { createContext, useContext } from "react";

export type Word = {
  word: string;
  type: "red" | "blue" | "white" | "black" | "hidden";
  selectedBy: string[];
};

export type Player = {
  name: string;
  color: string;
  isLeader: boolean;
  isReady: boolean;
};

export type Team = {
  color: "red" | "blue";
  players: Player[];
};

type State =
  | "idle"
  | "blue-master"
  | "red-master"
  | "blue-guessing"
  | "red-guessing"
  | "game-over";

export type Game = {
  lobbyId: string;
  redTeam: Team;
  blueTeam: Team;
  words: Word[];
  state: State;
  clientPlayer: Player;
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
