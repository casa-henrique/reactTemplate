import { createContext, useContext } from "react";

export type HomeSectionSelectContextProps = {
  sectionSelect: string;
  setSectionSelect: (s: string) => void;
};

export const HomeSectionSelectContext = createContext<HomeSectionSelectContextProps>({
  sectionSelect: "",
  setSectionSelect: () => {},
});

export const useHomeSectionSelectContext = () => useContext(HomeSectionSelectContext);
