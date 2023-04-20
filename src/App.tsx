import { useState } from "react";
import { SchoolNameContext } from "./hooks/useSchoolNameContext";
import { Routes } from "./routes/routes";

function App() {
  const [schoolName, setSchoolName] = useState<string>("");

  return (
    <SchoolNameContext.Provider value={{ schoolName, setSchoolName }}>
      <Routes />
    </SchoolNameContext.Provider>
  );
}

export default App;
