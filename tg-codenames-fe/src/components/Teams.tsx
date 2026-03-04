import { blueTeam, redTeam } from "../temp-mocks/TeamsMock";

export type Team = "blue" | "red";

export type Player = {
  name: string;
  color: string;
  team: Team;
  isLeader: boolean;
};

function Team({ teamType, players }: { teamType: Team; players: Player[] }) {
  return (
    <div
      style={{
        backgroundColor: teamType,
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
      <Team teamType="blue" players={blueTeam} />
      <Team teamType="red" players={redTeam} />
    </div>
  );
}
