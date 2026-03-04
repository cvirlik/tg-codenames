import * as fs from "node:fs";
import { randomInt } from "crypto";

export function shuffleInPlace<T>(items: T[]) {
    for (let i = items.length - 1; i > 0; i -= 1) {
        const j = randomInt(0, i + 1);
        [items[i], items[j]] = [items[j], items[i]];
    }
}

export function createDictionary() {
    const dictionaryRaw = fs.readFileSync("./dictionary.unique.txt", "utf8");
    const words = dictionaryRaw
        .split('\n')
        .map((word: string) => word.trim())
        .filter(Boolean);
    shuffleInPlace(words);
    return words;
}