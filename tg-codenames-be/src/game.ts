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

const games = new Map<number, Game>();

export function getOrCreateGame(gameId: number) {
  if (!games.has(gameId)) {
    games.set(gameId, {
      id: gameId,
      redTeam: [],
      blueTeam: [],
      words: [],
      state: "idle",
    });
  }
  const game = games.get(gameId);
  if (!game) {
    throw new Error("Unexpected error when fetching the game.");
  }
  return game;
}

export function joinPlayer(player: Player, gameId: number) {
  const game = getOrCreateGame(gameId);
  const team = player.team === "red" ? "redTeam" : "blueTeam";
  game[team].push(player);
  return game;
}

export function removePlayer(playerId: number, gameId: number) {
  if (!games.has(gameId)) {
    throw new Error("Unexpected error when leaving the game.");
  }
  const game = games.get(gameId);
  if (!game) {
    throw new Error("Unexpected error when leaving the game.");
  }

  const redIndex = game.redTeam.findIndex((player) => player.id === playerId);
  if (redIndex !== -1) {
    game.redTeam.splice(redIndex, 1);
  } else {
    const blueIndex = game.blueTeam.findIndex(
      (player) => player.id === playerId,
    );
    if (blueIndex !== -1) {
      game.blueTeam.splice(blueIndex, 1);
    }
  }
  return game;
}

export function handlePossibleGameDelete(gameId: number) {
  if (!games.has(gameId)) {
    return;
  }
  const game = games.get(gameId);

  if (!game) {
    throw new Error("Unexpected error.");
  }

  if (game.redTeam.length === 0 && game.blueTeam.length === 0) {
    games.delete(gameId);
    return;
  }
}
