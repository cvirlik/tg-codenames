import type { Player } from "../components/Teams";

export const players: Player[] = [
  { name: "Alice", color: "green", team: "blue", isLeader: true },
  { name: "Bob", color: "green", team: "blue", isLeader: false },
  { name: "Carol", color: "green", team: "blue", isLeader: false },

  { name: "Dave", color: "purple", team: "red", isLeader: true },
  { name: "Eve", color: "purple", team: "red", isLeader: false },
  { name: "Frank", color: "purple", team: "red", isLeader: false },
];

export const blueTeam = players.filter((player) => player.team === "blue");
export const redTeam = players.filter((player) => player.team === "red");
