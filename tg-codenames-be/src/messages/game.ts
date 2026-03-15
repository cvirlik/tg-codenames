import type { Connection } from "../connection";
import type { Game } from "../game";
import { getPlayerConnections } from "../player";

function maskGame(connection: Connection, game: Game) {
  const player = [...game.redTeam, ...game.blueTeam].find(
    (player) => player.id === connection.data.userId,
  );
  if (!player) {
    throw new Error("Player not found");
  }

  return {
    ...game,
    words: game.words.map((word) => ({
      ...word,
      type: !word.revealed && !player.isMaster ? "hidden" : word.type,
    })),
  };
}

export function broadcastGame(game: Game) {
  for (const playerConnection of getPlayerConnections().values()) {
    playerConnection.send(
      JSON.stringify({
        type: "game",
        data: maskGame(playerConnection, game),
      }),
    );
  }
}
