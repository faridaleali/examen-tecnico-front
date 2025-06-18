import React from "react";
import type { Phrase } from "../types";

interface Props {
  phrase: Phrase;
  onDelete: (id: string) => void;
}

export const PhraseCard: React.FC<Props> = ({ phrase, onDelete }) => {
  return (
    <div
      style={{
        border: "1px solid #ccc",
        borderRadius: "8px",
        padding: "12px",
        margin: "8px",
        width: "200px",
        boxShadow: "2px 2px 6px rgba(0,0,0,0.1)",
      }}
    >
      <p>{phrase.text}</p>
      <button onClick={() => onDelete(phrase.id)}>Eliminar</button>
    </div>
  );
};
