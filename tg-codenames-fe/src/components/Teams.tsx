import { type Player, useGame } from "../hooks/GameContext";

function List({ color, players }: { color: string; players: Player[] }) {
  return (
    <div
      style={{
        backgroundColor: color,
        padding: 12,
        borderRadius: 8,
        width: "40%",
      }}
    >
      {players.map((player) => (
        <p key={player.name}>
          <span
            className="badge"
            style={{
              backgroundColor: color,
              display: "inline-block",
              marginRight: "0.25rem",
            }}
          />
          {player.name} {player.isMaster ? "(Leader)" : ""}
        </p>
      ))}
    </div>
  );
}

export function TeamsList() {
  const { game } = useGame();
  if (!game) return null;
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-evenly",
        width: "100%",
      }}
    >
      <List color="blue" players={game.blueTeam} />
      <List color="red" players={game.redTeam} />
    </div>
  );
}
