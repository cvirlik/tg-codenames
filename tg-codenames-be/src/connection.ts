import type { ServerWebSocket } from "bun";
import { handlePossibleGameDelete, joinPlayer, removePlayer } from "./game";
import { broadcastGame } from "./messages/game";
import { removePlayerConnection, savePlayerConnection } from "./player";

export type PlayerSocketData = {
  name: string;
  userId: number;
  chatId: number;
};

export type Connection = ServerWebSocket<PlayerSocketData>;

export function handleOpen(connection: Connection) {
  savePlayerConnection(connection);
  const game = joinPlayer(
    {
      id: connection.data.userId,
      name: connection.data.name,
      isMaster: false,
      team: "red",
    },
    connection.data.chatId,
  );
  broadcastGame(game);
}

export function handleClose(connection: Connection) {
  removePlayerConnection(connection);
  const game = removePlayer(connection.data.userId, connection.data.chatId);
  broadcastGame(game);
  handlePossibleGameDelete(connection.data.chatId);
}
