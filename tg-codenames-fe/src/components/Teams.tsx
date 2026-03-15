import { useMemo } from "react";
import { type Player, useGame } from "../hooks/GameContext";

function List({ color, players }: { color: string; players: Player[] }) {
  const { currentMaster, teamPlayers } = useMemo(() => {
    const currentMaster = players.find((player) => player.isMaster);
    const teamPlayers = players.filter((player) => !player.isMaster);

    return {
      currentMaster: currentMaster ?? null,
      teamPlayers,
    };
  }, [players]);

  return (
    <div className={`team-list team-list--${color}`}>
      <div className="content">
        <button type="button" className="text-button">
          {currentMaster ? currentMaster.name : "Become a master"}
        </button>
        <div className="players">
          <p>Players:</p>
          {teamPlayers.length > 0 ? (
            teamPlayers.map((player) => (
              <p key={player.id} className="player">
                <span className="badge player-badge" />
                {player.name}
              </p>
            ))
          ) : (
            <p>No players yet</p>
          )}
        </div>
        <button
          type="button"
          className="text-button"
        >{`Join ${color} team`}</button>
      </div>
    </div>
  );
}

export function TeamsList() {
  const { game } = useGame();
  if (!game) return null;
  return (
    <div className="teams-list">
      <List color="blue" players={game.blueTeam} />
      <List color="red" players={game.redTeam} />
    </div>
  );
}
