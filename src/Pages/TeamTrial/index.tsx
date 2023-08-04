import { useEffect, useState } from "react";
import { api } from "../../lib/api";
import { Container } from "./styles";
import { IoClose, IoList } from "react-icons/io5"
import { IoMdArrowRoundBack, } from "react-icons/io"
import { TrialMenu } from "../../Components/TrialSections/TrialMenu";
import { ActivitySection } from "../../Components/TrialSections/ActivitySection";
import { ResultsSection } from "../../Components/TrialSections/ResultsSection";
import { PresentationSection } from "../../Components/TrialSections/PresentationSection";
import { SearchSection } from "../../Components/TrialSections/SearchSection";
import { ReportSection } from "../../Components/TrialSections/ReportSection";
import { useTrialMenuSelectContext } from "../../hooks/useTrialMenuSelectedContext";

interface TrailProps {
  activity: string[];
  axel: string[];
  difficulty: string;
  id: string;
  name: string;
  resources: string[];
  year: string;
}

export function TeamTrial() {
  const [showInfos, setShowInfos] = useState(true)
  const [trail, setTrail] = useState<TrailProps | undefined>();
  const [team, setTeam] = useState<any>()
  const queryParameters = new URLSearchParams(window.location.search);
  const teamParam = queryParameters.get("team");
  const {menuSelect} = useTrialMenuSelectContext()

  const trailNameByUrl = window.location.pathname
    .replace("/trail/", "")
    .replace("/maplebear", "")
    .replace("/israelita", "")
    .replace("/divinomestre", "")
    .replaceAll("%20", " ")
    .replaceAll("%C2%BA", "º")
    .replaceAll("%C3%AD", "í");

    function goBack() {
      history.back();
    }
  
  function trailNameFilter(data: any) {
    return trailNameByUrl == data.name;
  }
  function teamNameFilter(data: any) {
    return teamParam == data.name;
  }

  const list_trail = async () => {
    try {
      const response = await api.get("/trail");
      const filterTrail = response.data.filter(trailNameFilter);
      const thisTrail = filterTrail[0];

      setTrail(thisTrail);
    } catch (err) {
      console.log(err);
    }
  };

  const list_team = async () => {
    try {
      const response = await api.get("/team");
      const filterTeam = response.data.filter(teamNameFilter);
      const thisTeam = filterTeam[0];

      setTeam(thisTeam);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    list_trail();
  }, []);
  useEffect(() => {
    list_team();
  }, []);

  return (
    <Container>
      {showInfos ? <div className="trailHeader">
        <div className="buttonsWrapper">
          <button onClick={goBack}><IoMdArrowRoundBack /></button>
          <button onClick={() => setShowInfos(!showInfos)}><IoClose/></button>
        </div>

      <div className="infoWrapper">
        <div>
          <p>Turma</p>
          <h2>{teamParam}</h2>
        </div>
        <div>
          <p>Ano letivo</p>
          <h2>{trail?.year.replaceAll("º Ano", "").concat("º Ano")}</h2>
        </div>
        <div>
          <p>Horário</p>
          {team ? <h2>{`${team?.startHour.slice(11)} - ${team?.endHour.slice(11)}`}</h2> : null}
        </div>
        </div>
      </div> : <button className="showIcon" onClick={() => setShowInfos(!showInfos)}><IoList /></button>}
      
      <div className="contentWrapper">
        <TrialMenu />

        {menuSelect == "activity" ? <ActivitySection /> : null}
        {menuSelect == "result" ? <ResultsSection />  : null}
        {menuSelect == "report" ? <ReportSection />  : null}
        {menuSelect == "presentations" ? <PresentationSection/> : null}
        {menuSelect == "searchs" ? <SearchSection />  : null}
      </div>
    </Container>
  );
}
