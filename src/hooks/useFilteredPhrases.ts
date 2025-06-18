import { useMemo } from "react";
import type { Phrase } from "../types";

export const useFilteredPhrases = (phrases: Phrase[], query: string) => {
  return useMemo(
    () =>
      phrases.filter(p =>
        p.text.toLowerCase().includes(query.toLowerCase())
      ),
    [phrases, query]
  );
};