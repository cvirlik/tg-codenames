type WordGridProps = {
  size?: {
    cols: number;
    rows: number;
  };
  words: string[];
};

export function WordGrid({
  size = { cols: 5, rows: 5 },
  words,
}: WordGridProps) {
  return (
    <section
      className="word-grid"
      style={{
        gridTemplateColumns: `repeat(${size.cols}, minmax(0, 1fr))`,
        gridTemplateRows: `repeat(${size.rows}, minmax(0, 1fr))`,
      }}
    >
      {words.map((word) => (
        <button key={word} className="word-button" onClick={() => {}}>
          {word}
        </button>
      ))}
    </section>
  );
}
