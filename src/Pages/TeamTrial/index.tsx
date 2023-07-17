import { Button } from "@mui/material";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import iconImage from "../../assets/images/Logos/icon-codifica-clean.svg";
import { useSchoolNameContext } from "../../hooks/useSchoolNameContext";
import { api } from "../../lib/api";
import { Container } from "./styles";

interface TrailProps {
  activity: string[];
  axel: string[];
  difficulty: string;
  id: string;
  name: string;
  resources: string[];
  year: string;
}

interface ResultProps {
  name: string;
  team: string;
  documentLink: string;
  type: string;
}

export function TeamTrial() {
  const [trail, setTrail] = useState<TrailProps | undefined>();
  const [resultList, setResultList] = useState<ResultProps[] | undefined>();
  const [teamResultList, setTeamResultList] = useState<
    ResultProps[] | undefined
  >();
  const navigate = useNavigate();
  const { schoolName } = useSchoolNameContext();

  const queryParameters = new URLSearchParams(window.location.search);
  const teamParam = queryParameters.get("team");

  const trailNameByUrl = window.location.pathname
    .replace("/trail/", "")
    .replace("/maplebear", "")
    .replace("/israelita", "")
    .replace("/divinomestre", "")
    .replaceAll("%20", " ")
    .replaceAll("%C2%BA", "º")
    .replaceAll("%C3%AD", "í");

  function trailNameFilter(data: any) {
    return trailNameByUrl == data.name;
  }

  function resultTeamSevenFilter(data: any) {
    return "7" == data.team;
  }
  function resultTeamSixFilter(data: any) {
    return "6" == data.team;
  }
  function resultTeamEightFilter(data: any) {
    return "8" == data.team;
  }

  function resultTeamAvaliationFilter(data: any) {
    return teamParam == data.team;
  }

  function enterActivity(name: string) {
    navigate(`/${schoolName}/atividade/${name}`);
  }

  function enterTestPage() {
    navigate(`/${schoolName}/avaliacao`);
  }
  function enterResultPage(id: string) {
    navigate(`/${schoolName}/result/${id}`);
  }

  function listResults() {
    if (trailNameByUrl == "7º ano E.F.") {
      let teamResults = resultList?.filter(resultTeamSevenFilter);
      const avaliacao: any = resultList?.filter(resultTeamAvaliationFilter);

      if (teamParam == "71") {
        teamResults?.push(avaliacao[0]);
      }

      console.log(teamResults);
      setTeamResultList(teamResults);
    }
    if (trailNameByUrl == "6º ano E.F") {
      const teamResults = resultList?.filter(resultTeamSixFilter);
      const avaliacao: any = resultList?.filter(resultTeamAvaliationFilter);

      if (teamParam == "61") {
        teamResults?.push(avaliacao[0]);
      }
      setTeamResultList(teamResults);
    } else if (trailNameByUrl == "8º ano E.F") {
      const teamResults = resultList?.filter(resultTeamEightFilter);
      const avaliacao: any = resultList?.filter(resultTeamAvaliationFilter);

      if (teamParam == "81") {
        teamResults?.push(avaliacao[0]);
      }
      setTeamResultList(teamResults);
    }
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

  const list_results = async () => {
    try {
      const response = await api.get("/result");

      await setResultList(response.data);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    list_trail();
  }, []);

  useEffect(() => {
    list_results();
  }, []);

  useEffect(() => {
    listResults();
  }, [resultList]);

  return (
    <Container>
      <div className="trailHeader">
        <h1>{trailNameByUrl}</h1>
      </div>

      <p className="activityTitle">
        Atividades {schoolName == "maplebear" ? null : "Semestre 1"}
      </p>
      <div className="activityWrapper">
        {trail?.activity.map((item, index) => {
          return (
            <div
              className="activityItem"
              key={index}
              onClick={() => enterActivity(item)}
            >
              <div>
                <img src={iconImage} />
              </div>
              <p>{item.replaceAll("MP", "")}</p>
              <Button>Acessar</Button>
            </div>
          );
        })}
      </div>

      {schoolName == "maplebear" ? null : (
        <>
          <p className="activityTitle">Atividades Semestre 2</p>
          <div className="activityWrapper">
            <div className="activityItemSoon">
              <p>Em Breve</p>
            </div>
          </div>
        </>
      )}

      <p className="activityTitle">
        Avaliação {schoolName == "maplebear" ? null : "Semestre 1"}
      </p>
      <div className="activityWrapper">
        <div
          onClick={() => enterTestPage()}
          className="activityItemSoon testItemSchool"
        >
          <Button>Acessar</Button>
        </div>
      </div>

      <p className="activityTitle">
        Entregas {schoolName == "maplebear" ? null : "Semestre 1"}
      </p>
      <div className="activityWrapper">
        {teamResultList?.map((item: any, index: any) => {
          return (
            <div
              className="activityItem resultItem"
              key={index}
              onClick={() => enterResultPage(item.id)}
            >
              <p>{item.name}</p>
              <Button>Acessar</Button>
            </div>
          );
        })}
        {teamParam == "61" || teamParam == "71" || teamParam == "81" ? null : (
          <div className="activityItem resultItem">
            <p>Avaliação em breve</p>
          </div>
        )}
      </div>
    </Container>
  );
}
