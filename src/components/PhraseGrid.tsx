import React from "react";
import type { Phrase } from "../types";
import { PhraseCard } from "./PhraseCard";

interface Props {
  phrases: Phrase[];
  onDelete: (id: string) => void;
}

export const PhraseGrid: React.FC<Props> = ({ phrases, onDelete }) => {
  return (
    <div
      style={{
        display: "grid",
        gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
        gap: "16px",
        marginTop: "16px",
      }}
    >
      {phrases.map((phrase) => (
        <PhraseCard key={phrase.id} phrase={phrase} onDelete={onDelete} />
      ))}
    </div>
  );
};
