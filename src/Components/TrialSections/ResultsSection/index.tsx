import { useEffect, useState } from "react";
import { useSchoolNameContext } from "../../../hooks/useSchoolNameContext";
import { TrialItem } from "../TrialItem"
import {Container} from "./styles"
import { api } from "../../../lib/api";

interface ResultProps {
    name: string;
    team: string;
    documentLink: string;
    type: string;
  }

  interface TrailProps {
    activity: string[];
    axel: string[];
    difficulty: string;
    id: string;
    name: string;
    resources: string[];
    year: string;
  }

export function ResultsSection() {
    const [resultList, setResultList] = useState<ResultProps[] | undefined>();
    const [teamResultList, setTeamResultList] = useState<
    ResultProps[] | undefined
  >();
    const { schoolName } = useSchoolNameContext();
    const queryParameters = new URLSearchParams(window.location.search);
    const teamParam = queryParameters.get("team");
    const [trail, setTrail] = useState<TrailProps | undefined>();
  const [team, setTeam] = useState<any>()
  const [avaliation, setAvaliation] = useState<any[]>([])

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
      function teamNameFilter(data: any) {
        return teamParam == data.name;
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
        return teamParam?.replaceAll("°", "") == data.team;
      }

    function listResults() {
          if (schoolName == "divinomestre" || schoolName == "maplebear") {
            const avaliacao: any = resultList?.filter(resultTeamAvaliationFilter);
      
            setTeamResultList(avaliacao);
          } else {
            if (trailNameByUrl == "7º ano E.F.") {
              const teamResults = resultList?.filter(resultTeamSevenFilter);
              const avaliacao: any = resultList?.filter(resultTeamAvaliationFilter);
      
              if (teamParam == "71") {
                teamResults?.push(avaliacao[0]);
              } else if (teamParam == "72" || teamParam == "73") {
                setTeamResultList(avaliacao)
              }
      
              setTeamResultList(teamResults);
            }
            if (trailNameByUrl == "6º ano E.F") {
              const teamResults = resultList?.filter(resultTeamSixFilter);
              const avaliacao: any = resultList?.filter(resultTeamAvaliationFilter);
      
              if (teamParam == "61") {
                teamResults?.push(avaliacao[0]);
              } else if (teamParam == "62" || teamParam == "63") {
                setTeamResultList(avaliacao)
              }
              setTeamResultList(teamResults);
            } else if (trailNameByUrl == "8º ano E.F") {
              const teamResults = resultList?.filter(resultTeamEightFilter);
              const avaliacao: any = resultList?.filter(resultTeamAvaliationFilter);
      
              if (teamParam == "81") {
                teamResults?.push(avaliacao[0]);
              } else if (teamParam == "82" || teamParam == "83") {
                setTeamResultList(avaliacao)
              }
              setTeamResultList(teamResults);
            }
          }
        }

         const list_results = async () => {
    try {
      const response = await api.get("/result");

      await setResultList(response.data);
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

        useEffect(() => {
            list_trail();
        }, []);
        useEffect(() => {
            list_team();
        }, []);
            useEffect(() => {
              listResults();
            }, [resultList]);
            
            useEffect(() => {
                  list_results();
                }, []);
            useEffect(() => {
                avaliationFilter();
                }, [teamResultList]);

function avaliationFilter() {
    const data = teamResultList?.filter(data => "avaliacao" == data.type)

    if (data) {
      setAvaliation(data)
    }
}

console.log(avaliation)

    return <Container>
        <h2>Avaliações</h2>
        <div className="trialItemsWrapper">
            <TrialItem title={schoolName == "maplebear" ? "Avaliação" : "Ciclo 1"} access="" type="result"/>   
        </div>
        <h2>Entregas</h2>
        <div className="trialItemsWrapper">
            {avaliation.length > 0 ? avaliation.map((item: any, index: any) => {
    return (<TrialItem key={index} title={item.name} access={item.id} type="presentations"/>   
    );
  })  : <TrialItem title="Em breve" access=" " type="soon"/> }
             
        </div>
    </Container>
}

