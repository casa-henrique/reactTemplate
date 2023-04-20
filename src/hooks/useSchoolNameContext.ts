import { createContext, useContext } from "react";

export type SchoolNameContextProps = {
  schoolName: string;
  setSchoolName: (s: string) => void;
};

export const SchoolNameContext = createContext<SchoolNameContextProps>({
  schoolName: "",
  setSchoolName: () => {},
});

export const useSchoolNameContext = () => useContext(SchoolNameContext);
