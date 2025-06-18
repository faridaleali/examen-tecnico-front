import React, { useState, useCallback } from "react";
import { PhraseProvider, usePhraseContext } from "./context/PhraseProvider";
import { AddPhraseForm } from "./components/AddPhraseForm";
import { SearchBar } from "./components/SearchBar";
import { PhraseGrid } from "./components/PhraseGrid";
import { useFilteredPhrases } from "./hooks/useFilteredPhrases";
import type { Phrase } from "../src/types";
import { v4 as uuidv4 } from "uuid";

const InnerApp: React.FC = () => {
  const { state, dispatch } = usePhraseContext();
  const [search, setSearch] = useState("");

  const filtered = useFilteredPhrases(state.phrases, search);

  const handleAdd = useCallback((text: string) => {
    const newPhrase: Phrase = { id: uuidv4(), text };
    dispatch({ type: "ADD", payload: newPhrase });
  }, [dispatch]);

  const handleDelete = useCallback((id: string) => {
    dispatch({ type: "REMOVE", payload: id });
  }, [dispatch]);

  return (
    <div style={{ maxWidth: "600px", margin: "40px auto", fontFamily: "Arial, sans-serif" }}>
      <h1>Frases</h1>
      <AddPhraseForm onAdd={handleAdd} />
      <SearchBar onSearch={setSearch} />
      <PhraseGrid phrases={filtered} onDelete={handleDelete} />
    </div>
  );
};

const App: React.FC = () => (
  <PhraseProvider>
    <InnerApp />
  </PhraseProvider>
);

export default App;
