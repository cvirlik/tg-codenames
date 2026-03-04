import { WordGrid } from "./components/WordGrid";

const words = [
  "Apple",
  "Banana",
  "Cherry",
  "Date",
  "Elderberry",
  "Fig",
  "Grape",
  "Honeydew",
  "Kiwi",
  "Lemon",
  "Mango",
  "Nectarine",
  "Orange",
  "Papaya",
  "Quince",
  "Raspberry",
  "Strawberry",
  "Tangerine",
  "Ugli",
  "Vanilla",
  "Watermelon",
  "Xigua",
  "Passion",
  "Zucchini",
  "Zucchini 2",
];

function App() {
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
        <p>Welcome to the Word Grid!</p>
        <WordGrid size={{ cols: 5, rows: 5 }} words={words} />
      </div>
    </>
  );
}

export default App;
