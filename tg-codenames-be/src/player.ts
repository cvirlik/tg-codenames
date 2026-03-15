import type { Connection } from "./connection";

export type Player = {
  id: number;
  name: string;
  team?: "red" | "blue";
  isMaster: boolean;
};

const connections = new Map<number, Connection>();

export function getPlayerConnection(id: number) {
  return connections.get(id);
}

export function getPlayerConnections() {
  return connections;
}

export function savePlayerConnection(connection: Connection) {
  connections.set(connection.data.userId, connection);
}

export function removePlayerConnection(connection: Connection) {
  connections.delete(connection.data.userId);
}
