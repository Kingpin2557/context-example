import { createContext } from "react";

type ContextType = {
  count: number;
  addCount: () => void;
};

// Provide a default value that matches the ContextType structure
// You can initialize with default values for count and a no-op function for addCount
const defaultValue: ContextType = {
  count: 0,
  addCount: () => {},
};

export const CountContext = createContext<ContextType>(defaultValue);
