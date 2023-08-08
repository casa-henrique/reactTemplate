import { Container, Status } from "./styles"
import { SectionHeader } from "../sectionHeader"
import { useEffect, useState } from "react"
import { api } from "../../../lib/api"
import { useNavigate } from "react-router-dom"
import { useTrialMenuSelectContext } from "../../../hooks/useTrialMenuSelectedContext"
import { useSchoolNameContext } from "../../../hooks/useSchoolNameContext"

export function Dashboard () {
    const [teamsData, setTeamsData] = useState<any>([]);
    const [allDashInfos, setAllDashInfos] = useState([])
    const [dashInfos, setDashInfos] = useState([])
    const [userInfos, setUserInfos] = useState<any>()
    const navigate = useNavigate();
    const { setMenuSelect } = useTrialMenuSelectContext()
    const { schoolName } = useSchoolNameContext();

  const get_dashInfos = async () => {
    try {
      const response = await api.get("/dashresults");

      setAllDashInfos(response.data)
    } catch (error) {
      console.log(error);
    }
  };

  const dashInfosFilter = () => {
    if(userInfos?.user.name == "Luana Cavalcanti") {
      const filteredDataIsra = allDashInfos.filter((item:any) => "Tauana Rosa" == item.teacher)
      setDashInfos(filteredDataIsra)
    }
    else {
      const filteredData = allDashInfos.filter((item:any) => userInfos?.user.name == item.teacher)
      setDashInfos(filteredData)
    }
  }

  const get_teams = async () => {
    try {
      const response = await api.get("/team");
      setTeamsData(response.data)
    } catch (error) {
      console.log(error);
    }
  };

  const filter_teams = async (team:any) => {
    const filteredData = teamsData.filter((item:any) => item.name == team)

    const trail = await filteredData[0].trail

    navigate(`/${schoolName}/trail/${trail}?team=${team}`)
  }

  const goTeamPage = async (team:any) => {
    setMenuSelect('activity');
    await filter_teams(team);
  }
  const goReportPage = async (team:any) => {
    setMenuSelect('report');
    await filter_teams(team);
  }
  const goResultPage = async (team:any) => {
    setMenuSelect('result');
    await filter_teams(team);
  }
  const goPresentationsPage = async (team:any) => {
    setMenuSelect('presentations');
    await filter_teams(team);
  }
  const goSearchPage = async (team:any) => {
    setMenuSelect('searchs');
    await filter_teams(team);
  }

  useEffect(() => {
    get_dashInfos()
  }, [])
  useEffect(() => {
    get_teams()
  }, [])
  useEffect(() => {
    dashInfosFilter()
  }, [allDashInfos])
  useEffect(() => {
    const user = localStorage.getItem('user');

    if(user) {
      const userObject = JSON.parse(user)
      setUserInfos(userObject)
    }
  }, []);

    return <Container>
        <SectionHeader type="dash"/>

            <table>
                <thead className="cicleHead">
                    <th className="teamInfo"></th>

                    <th className="borderLeft"></th>
                    <th></th>
                    <th className="cicleText">Ciclo 1</th>
                    <th className="hiddenSpace"></th>
                    
                    <th className="borderLeft"></th>
                    <th></th>
                    <th className="cicleText">Ciclo 2</th>
                    <th></th>
                </thead>
                <thead>
                    <th className="teamInfo teamInfoText">Turma</th>

                    <th className="borderLeft">Relatório</th>
                    <th>Apresentação</th>
                    <th>Pesquisa</th>
                    <th>Avaliação</th>
                    
                    <th className="borderLeft">Relatório</th>
                    <th>Apresentação</th>
                    <th>Pesquisa</th>
                    <th>Avaliação</th>
                </thead>
                {dashInfos ? <tbody>
                        {dashInfos.map((item:any, index) => {
                            return <tr key={index}>
                            <td onClick={() => goTeamPage(item.team)} className="teamInfo">{item.team}</td>
    
                            <Status colorStatus={item.cicleOne[0]} onClick={() => goReportPage(item.team)} className="borderLeft">{item.cicleOne[0]}</Status>
                            <Status colorStatus={item.cicleOne[1].replaceAll(" ", "")} onClick={() => goPresentationsPage(item.team)}>{item.cicleOne[1]}</Status>
                            <Status colorStatus={item.cicleOne[2].replaceAll(" ", "")} onClick={() => goSearchPage(item.team)}>{item.cicleOne[2]}</Status>
                            <Status colorStatus={item.cicleOne[3].replaceAll(" ", "")} onClick={() => goResultPage(item.team)}>{item.cicleOne[3]}</Status>
    
                            <td onClick={() => goReportPage(item.team)} className="borderLeft">{item.cicleTwo[0]}</td>
                            <td onClick={() => goPresentationsPage(item.team)}>{item.cicleTwo[1]}</td>
                            <td onClick={() => goSearchPage(item.team)}>{item.cicleTwo[2]}</td>
                            <td onClick={() => goResultPage(item.team)}>{item.cicleTwo[3]}</td>
                        </tr>
                        })}
                </tbody>  : <div className="soon"><p>Em breve</p></div> }
           
            </table>
    </Container>
}