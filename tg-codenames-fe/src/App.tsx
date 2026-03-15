import { TeamsList } from "./components/Teams";
import { WordGrid } from "./components/WordGrid";
import { ConnectionProvider } from "./providers/ConnectionProvider";
import { GameProvider } from "./providers/GameProvider";

function App() {
  return (
    <GameProvider>
      <ConnectionProvider>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: 12,
            justifyContent: "center",
            alignItems: "center",
            height: "100%",
            width: "100%",
          }}
        >
          <TeamsList />
          <WordGrid size={{ cols: 5, rows: 5 }} />
        </div>
      </ConnectionProvider>
    </GameProvider>
  );
}

export default App;
