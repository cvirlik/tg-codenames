import { useMemo } from "react";
import { useDictionary } from "../hooks/DictionaryContext";

type WordGridProps = {
    size?: {
        cols: number;
        rows: number;
    };
};

export async function WordGrid({ size = { cols: 5, rows: 5 } }: WordGridProps) {
    const getGameWords = useDictionary().getGameWords;
    const selectedWords = useMemo(() => {
        return getGameWords(size.cols * size.rows);
    }, [size.cols, size.rows, getGameWords]);

    return (
        <section
            className="grid gap-3"
            style={{ gridTemplateColumns: `repeat(${size.cols}, minmax(0, 1fr))` }}
        >
            {selectedWords.map((word) => (
                <div
                    key={word}
                    className="rounded-md border border-zinc-300 bg-white p-3 text-center text-sm font-semibold uppercase text-black shadow-sm"
                >
                    {word}
                </div>
            ))}
        </section>
    );
}
