import React, { useState, type ChangeEvent } from "react";
import { debounce } from "../utils/debounce";

interface Props {
  onSearch: (query: string) => void;
}

export const SearchBar: React.FC<Props> = ({ onSearch }) => {
  const [input, setInput] = useState("");

  // Usamos debounce para no llamar onSearch en cada tecla rápidamente
  const debouncedSearch = React.useMemo(
    () => debounce((q: string) => onSearch(q), 300),
    [onSearch]
  );

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setInput(e.target.value);
    debouncedSearch(e.target.value);
  };

  return (
    <input
      type="text"
      placeholder="Buscar frase..."
      value={input}
      onChange={handleChange}
      style={{ padding: "8px", width: "100%", marginBottom: "16px" }}
    />
  );
};
