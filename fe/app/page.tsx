import { WordGrid } from "./components/WordGrid";
import { DictionaryProvider } from "./providers/DictionaryProvider";


export default function Home() {
  return (
    <DictionaryProvider>
      <div className="flex min-h-screen items-center justify-center bg-zinc-50 font-sans dark:bg-black">
        <WordGrid size={{ cols: 5, rows: 5 }} />
      </div>
    </DictionaryProvider>
  );
}
