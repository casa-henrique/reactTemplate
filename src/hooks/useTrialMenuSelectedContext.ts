import { createContext, useContext } from "react";

export type TrialMenuSelectContextProps = {
  menuSelect: string;
  setMenuSelect: (s: string) => void;
};

export const TrialMenuSelectContext = createContext<TrialMenuSelectContextProps>({
  menuSelect: "",
  setMenuSelect: () => {},
});

export const useTrialMenuSelectContext = () => useContext(TrialMenuSelectContext);
