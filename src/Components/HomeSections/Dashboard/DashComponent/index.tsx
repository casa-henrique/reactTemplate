import {Container} from "./styles"
import { useEffect, useState } from "react";
import { api } from "../../../../lib/api";
import { useSchoolNameContext } from "../../../../hooks/useSchoolNameContext";

interface DashComponentProps {
    type: string;
}

interface ResultProps {
    name: string;
    team: string;
    documentLink: string;
    type: string;
  }

export function DashComponent({type}:DashComponentProps) {
    const [presentationList, setPresentationList] = useState<ResultProps[] | undefined>();
    const [searchList, setSearchList] = useState<ResultProps[] | undefined>();
    const [allResultsList, setAllResultsList] = useState<ResultProps[] | undefined>();
    const { schoolName } = useSchoolNameContext();
    const[userInfos, setUserInfos] = useState<any>()


    useEffect(() => {
        const user = localStorage.getItem('user');
    
        if(user) {
          const userObject = JSON.parse(user)
          setUserInfos(userObject)
        }
      }, []);

    function Title() {
        switch (type) {
            case "avaliation":
                return "Avaliações"
            case "search":
                return "Pesquisas"
            case "presentation":
                return "Apresentações"
        }
    }

    function filterPresentation(data:any) {
        return "apresentacao" == data.type
    }
    function filterTeacher(data:any) {
        return userInfos?.user.name == data.teacher
    }
    function filterSearch(data:any) {
        return "relatorio" == data.type
    }

    const list_results = async () => {
        try {
          const response = await api.get("/result");

          setAllResultsList(response.data)
        } catch (err) {
          console.log(err);
        }
      };

      function filterTeacherEffect() {
        const filteredPresentations = allResultsList?.filter(filterPresentation)
        const teacherPresentations = filteredPresentations?.filter(filterTeacher)

        const filteredSearchs = allResultsList?.filter(filterSearch)
        const teacherSearchs = filteredSearchs?.filter(filterTeacher)
    
        setPresentationList(teacherPresentations);
        setSearchList(teacherSearchs);
      }

      useEffect(() => {
        list_results();
      }, []);
      
      useEffect(() => {
        filterTeacherEffect();
      }, [allResultsList]);
      
      console.log(presentationList)
      console.log("pesquisas",searchList)

    return <Container>
        <p>{Title()}</p>
        <hr />

        {type == 'avaliation' ? <div className="dashComponentWrapper">
            {/* <div className="avaliationItem">
                <p>Turma 1</p>
                <div className="backBar">
                    <div></div>
                </div>
                <p>50%</p>
                </div> */}
                <p className="soon">Em Breve</p>
        </div> : null}

        {type == 'search' ? <div className="dashComponentWrapper">
            {searchList?.map((item:any) => {
                return <a href={`/${schoolName}/result/${item.id}`} key={item.id} className="searchItem">
                <p>{item.team}</p>
                <p>{item.name}</p>
            </a>
            })}
        </div> : null}

        {type == 'presentation' ? <div className="dashComponentWrapper">
            {presentationList?.map((item:any, index:any) => {
                return <a href={`/${schoolName}/result/${item.id}`} key={index} className="presentationItem">
                <p>{item.team}</p>
                <p>{item.name}</p>
            </a>
            })}
            
        </div> : null}
    </Container>
}