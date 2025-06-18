import React, { createContext, useReducer, useContext } from "react";

type Phrase = { id: string; text: string };
type State = { phrases: Phrase[] };
type Action =
  | { type: "ADD"; payload: Phrase }
  | { type: "REMOVE"; payload: string };

const PhraseContext = createContext<{
  state: State;
  dispatch: React.Dispatch<Action>;
} | null>(null);

const reducer = (state: State, action: Action): State => {
  switch (action.type) {
    case "ADD":
      return { phrases: [...state.phrases, action.payload] };
    case "REMOVE":
      return { phrases: state.phrases.filter(p => p.id !== action.payload) };
    default:
      return state;
  }
};

export const PhraseProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, { phrases: [] });
  return (
    <PhraseContext.Provider value={{ state, dispatch }}>
      {children}
    </PhraseContext.Provider>
  );
};

export const usePhraseContext = () => {
  const context = useContext(PhraseContext);
  if (!context) throw new Error("PhraseContext must be used inside provider");
  return context;
};
