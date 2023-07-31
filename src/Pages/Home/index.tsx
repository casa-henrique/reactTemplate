import { Container } from "./styles";
import { DevWarning } from "../../Components/DevWarning";
import { HomeMenu } from "../../Components/HomeSections/HomeMenu";
import { Dashboard } from "../../Components/HomeSections/Dashboard";
import { MyTeams } from "../../Components/HomeSections/MyTeams";
import { Library } from "../../Components/HomeSections/library";
import { useHomeSectionSelectContext } from "../../hooks/useHomeSectionSelectedContext";

export function Home() { 
  const {sectionSelect, setSectionSelect} = useHomeSectionSelectContext();
  
  return (
    <Container>
      <DevWarning />

      <HomeMenu section={sectionSelect} changeSection={setSectionSelect}/>

      {sectionSelect == "dash" ? <Dashboard /> : null}
      {sectionSelect == "team" ? <MyTeams /> : null}
      {sectionSelect == "library" ? <Library /> : null}
    </Container>
  );
}
