import { useGame } from "../hooks/GameContext";

type WordGridProps = {
  size?: {
    cols: number;
    rows: number;
  };
};

export function WordGrid({ size = { cols: 5, rows: 5 } }: WordGridProps) {
  const words = useGame().game?.words;
  return (
    <section
      className="word-grid"
      style={{
        gridTemplateColumns: `repeat(${size.cols}, minmax(0, 1fr))`,
        gridTemplateRows: `repeat(${size.rows}, minmax(0, 1fr))`,
      }}
    >
      {words ? (
        words.map((word) => (
          <button
            key={word.word}
            type="button"
            className="word-button"
            style={{
              color: word.type === "black" ? "white" : "black",
              backgroundColor: word.type,
            }}
            onClick={() => {}}
          >
            {word.word}
            {word.selectedBy && word.selectedBy.length > 0 && (
              <span className="selected-badges" aria-hidden="true">
                {word.selectedBy.map((color) => (
                  <span
                    key={`${word.word}-${color}`}
                    className="badge"
                    style={{ backgroundColor: color }}
                  />
                ))}
              </span>
            )}
          </button>
        ))
      ) : (
        <p>Not Connected</p>
      )}
    </section>
  );
}
