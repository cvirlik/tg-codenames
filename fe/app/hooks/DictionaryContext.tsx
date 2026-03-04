"use client"

import { createContext, useContext } from "react";

export const DictionaryContext = createContext<{
    dictionary: string[];
    getGameWords: (count: number) => string[];
}>({
    dictionary: [],
    getGameWords: (count: number) => [],
})

export function useDictionary() {
    return useContext(DictionaryContext);
}