import { useEffect, useState } from "react";
import { TrialItem } from "../TrialItem"
import {Container} from "./styles"
import { api } from "../../../lib/api";
import { useSchoolNameContext } from "../../../hooks/useSchoolNameContext";

interface TrailProps {
    activity: string[];
    axel: string[];
    difficulty: string;
    id: string;
    name: string;
    resources: string[];
    year: string;
  }

export function ActivitySection() {
  const { schoolName } = useSchoolNameContext();
    const [trail, setTrail] = useState<TrailProps | undefined>();
    const [activities, setActivities] = useState<any[]>([])
    const [activitiesSeasonOne, setActivitiesSeasonOne] = useState<any[]>([])
    const [activitiesSeasonTwo, setActivitiesSeasonTwo] = useState<any[]>([])
    
    const trailNameByUrl = window.location.pathname
    .replace("/trail/", "")
    .replace("/maplebear", "")
    .replace("/israelita", "")
    .replace("/divinomestre", "")
    .replaceAll("%20", " ")
    .replaceAll("%C2%BA", "º")
    .replaceAll("%C3%AD", "í");

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

  const list_activities = async () => {
    try {
      const response = await api.get("/activity");
      const filteredData = response.data.filter(activitiesFiltered)

      setActivities(filteredData);
    } catch (err) {
      console.log(err);
    }
};

function seasion() {
  const seasonOne = activities?.filter((data:any) => "1" == data.seasson)
  const seasonTwo = activities?.filter((data:any) => "2" == data.seasson)

  setActivitiesSeasonOne(seasonOne);
  setActivitiesSeasonTwo(seasonTwo);
}

  function trailNameFilter(data: any) {
    return trailNameByUrl == data.name;
  };
  function activitiesFiltered (data:any) {
    return trail?.activity.includes(data.name)
  }

  useEffect(() => {
    list_trail();
  }, []);

  useEffect(() => {
    list_activities();
    seasion()
  }, [trail]);

  useEffect(() => {
    seasion()
  }, [activities]);

  console.log(trail, activities, activitiesSeasonOne)

    return <Container>
        <h2>Semestre 1</h2>
        <div className="trialItemsWrapper">
            {activitiesSeasonOne?.map((item:any, index:any) => {
                return <TrialItem key={index} title={schoolName == "divinomestre" ? item.name.replaceAll("MP", "") : item.name} access={item.name} type="activity"/>
            })}
        </div>
        
        <h2>Semestre 2</h2>
        <div className="trialItemsWrapper">
          {
         activitiesSeasonTwo.length > 0 ? activitiesSeasonTwo.map((item:any, index:any) => {
          return <TrialItem key={index} title={schoolName == "divinomestre" ? item.name.replaceAll("MP", "") : item.name} access={item.name} type="activity"/>
      }) : <TrialItem title='Em Breve' access=" " type="soon"/>
        }
        </div>
    </Container>
}