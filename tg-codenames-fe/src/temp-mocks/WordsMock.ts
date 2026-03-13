import type { Word } from "../hooks/GameContext";

const wordLabels = [
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

function shuffle<T>(items: T[]): T[] {
  const arr = [...items];
  for (let i = arr.length - 1; i > 0; i -= 1) {
    const j = Math.floor(Math.random() * (i + 1));
    [arr[i], arr[j]] = [arr[j], arr[i]];
  }
  return arr;
}

export function buildRandomWords(): Word[] {
  const types: Word["type"][] = [
    ...Array(9).fill("red"),
    ...Array(8).fill("blue"),
    "black",
    ...Array(Math.max(wordLabels.length - 18, 0)).fill("white"),
  ];

  const shuffledLabels = shuffle(wordLabels);
  const shuffledTypes = shuffle(types);
  const selectedWordIndex = Math.floor(Math.random() * shuffledLabels.length);

  return shuffledLabels.map((word, index) => ({
    word,
    type: shuffledTypes[index] ?? "white",
    isRevealed: false,
    ...(index === selectedWordIndex
      ? {
          selectedBy: ["red", "blue", "green"],
        }
      : {}),
  }));
}