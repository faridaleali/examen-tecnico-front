import React, { useState, type FormEvent } from "react";

interface Props {
  onAdd: (text: string) => void;
}

export const AddPhraseForm: React.FC<Props> = ({ onAdd }) => {
  const [input, setInput] = useState("");

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (!input.trim()) return;
    onAdd(input.trim());
    setInput("");
  };

  return (
    <form onSubmit={handleSubmit} style={{ marginBottom: "24px" }}>
      <input
        type="text"
        placeholder="Agregar frase..."
        value={input}
        onChange={(e) => setInput(e.target.value)}
        style={{ padding: "8px", width: "70%", marginRight: "8px" }}
      />
      <button type="submit">Agregar</button>
    </form>
  );
};
