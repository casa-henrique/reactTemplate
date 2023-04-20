import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
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
        {/* <div>
          <p aria-hidden="true" title={`${trail?.resources.join(", ")}`}>
            Recursos: {trail ? trail.resources.join(", ") : ""}
          </p>
          <p>Série: {trail ? trail.year : ""}</p>
          <p aria-hidden="true" title={`${trail?.axel.join(", ")}`}>
            Eixos: {trail ? trail.axel.join(", ") : ""}
          </p>
          <p>{trail ? trail.difficulty : ""}</p>
        </div> */}
      </div>

      <p className="activityTitle">Atividades</p>

      <div className="activityWrapper">
        {trail?.activity.map((item, index) => {
          return (
            <div key={index} onClick={() => enterActivity(item)}>
              <p>{index + 1}</p>
              <p className="activityName">{item.replaceAll("MP", "")}</p>
            </div>
          );
        })}
      </div>
    </Container>
  );
}
