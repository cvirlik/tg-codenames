import { useMemo } from "react";
import { WordGrid } from "./components/WordGrid";
import { buildRandomWords } from "./temp-mocks/WordsMock";
import { TeamsList } from "./components/Teams";

function App() {
  const words = useMemo(() => buildRandomWords(), []);
  return (
    <>
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
        <WordGrid size={{ cols: 5, rows: 5 }} words={words} />
      </div>
    </>
  );
}

export default App;
