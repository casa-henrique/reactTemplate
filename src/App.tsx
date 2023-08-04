import { useState } from "react";
import { SchoolNameContext } from "./hooks/useSchoolNameContext";
import { Routes } from "./routes/routes";
import { HomeSectionSelectContext } from "./hooks/useHomeSectionSelectedContext";
import { TrialMenuSelectContext } from "./hooks/useTrialMenuSelectedContext";

function App() {
  const [schoolName, setSchoolName] = useState<string>("");
  const [sectionSelect, setSectionSelect] = useState<string>("dash");
  const [menuSelect, setMenuSelect] = useState<string>("activity");

  return (
    <SchoolNameContext.Provider value={{ schoolName, setSchoolName }}>
      <HomeSectionSelectContext.Provider value={{sectionSelect, setSectionSelect}}>
        <TrialMenuSelectContext.Provider value={{menuSelect, setMenuSelect}}>
          <Routes />
        </TrialMenuSelectContext.Provider>
      </HomeSectionSelectContext.Provider>
    </SchoolNameContext.Provider>
  );
}

export default App;
