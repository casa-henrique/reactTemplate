import { useState } from "react";
import { SchoolNameContext } from "./hooks/useSchoolNameContext";
import { Routes } from "./routes/routes";
import { HomeSectionSelectContext } from "./hooks/useHomeSectionSelectedContext";

function App() {
  const [schoolName, setSchoolName] = useState<string>("");
  const [sectionSelect, setSectionSelect] = useState<string>("dash");

  return (
    <SchoolNameContext.Provider value={{ schoolName, setSchoolName }}>
      <HomeSectionSelectContext.Provider value={{sectionSelect, setSectionSelect}}>
        <Routes />
      </HomeSectionSelectContext.Provider>
    </SchoolNameContext.Provider>
  );
}

export default App;
