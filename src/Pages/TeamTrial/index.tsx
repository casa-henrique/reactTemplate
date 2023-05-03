import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useSchoolNameContext } from "../../hooks/useSchoolNameContext";
import { api } from "../../lib/api";
import { Container } from "./styles";
import iconImage from '../../assets/images/Logos/icon-codifica-clean.svg'
import { Button } from "@mui/material";

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
  const [trail, setTrail] = useState<TrailProps | undefined>();
  const navigate = useNavigate();
  const { schoolName } = useSchoolNameContext();

  const trailNameByUrl = window.location.pathname
    .replace("/trail/", "")
    .replace("/maplebear", "")
    .replace("/israelita", "")
    .replaceAll("%20", " ")
    .replaceAll("%C2%BA", "º");

  function trailNameFilter(data: any) {
    return trailNameByUrl == data.name;
  }

  function enterActivity(name: string) {
    navigate(`/${schoolName}/atividade/${name}`);
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

  useEffect(() => {
    list_trail();
  }, []);

  return (
    <Container>
      <div className="trailHeader">
        <h1>{trailNameByUrl}</h1>
      </div>

      <p className="activityTitle">Atividades {schoolName == 'maplebear' ? null :"Semestre 1"}</p>
      <div className="activityWrapper">
        {trail?.activity.map((item, index) => {
          return (
            <div className="activityItem" key={index} onClick={() => enterActivity(item)}>
              <div>
                <img src={iconImage} />
              </div>
              <p>{item.replaceAll("MP", "")}</p>
              <Button>Acessar</Button>
            </div>
          );
        })}
      </div>

      {schoolName == 'maplebear' ? null : <>
      <p className="activityTitle">Atividades Semestre 2</p>
      <div className="activityWrapper">
        <div className="activityItemSoon">
          <p>Em Breve</p>
        </div>
      </div>
      </>}

      <p className="activityTitle">Avaliação {schoolName == 'maplebear' ? null : "Semestre 1"}</p>
      <p className="soon">Em breve</p>
    </Container>
  );
}
