import { blueTeam, redTeam } from "../temp-mocks/TeamsMock";
import type { Team } from "../hooks/GameContext";

function Team({ color, players }: Team) {
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
              backgroundColor: player.color,
              display: "inline-block",
              marginRight: "0.25rem",
            }}
          />
          {player.name} {player.isLeader ? "(Leader)" : ""}
        </p>
      ))}
    </div>
  );
}

export function TeamsList() {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-evenly",
        width: "100%",
      }}
    >
      <Team color="blue" players={blueTeam} />
      <Team color="red" players={redTeam} />
    </div>
  );
}
