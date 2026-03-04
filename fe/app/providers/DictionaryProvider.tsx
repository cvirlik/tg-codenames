import { createDictionary } from "../helpers/dictionary-manage";
import { DictionaryContext } from "../hooks/DictionaryContext";
import { useMemo } from "react";

export async function DictionaryProvider({ children }: { children: React.ReactNode }) {
    const dictionary = useMemo(() => createDictionary(), []);

    function getGameWords(count: number) {
        return dictionary.slice(0, count);
    }

    return (
        <DictionaryContext.Provider value={{ dictionary, getGameWords }}>
            {children}
        </DictionaryContext.Provider>
    );
}