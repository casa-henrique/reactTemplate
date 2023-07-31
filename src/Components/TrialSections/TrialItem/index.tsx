import { useNavigate } from "react-router-dom";
import { useSchoolNameContext } from "../../../hooks/useSchoolNameContext";
import { Container } from "./style";

interface TrialItemProps {
    title: string;
    access: string;
    detail?: string;
    type: string;
}

export function TrialItem({title, access, detail, type}:TrialItemProps) {
    const navigate = useNavigate();
    const { schoolName } = useSchoolNameContext();

    function enterActivity(name: string) {
        if(type == "activity") {
            navigate(`/${schoolName}/atividade/${name}`);
        } if (type == "searchs" || type == 'presentations') {
            navigate(`/${schoolName}/result/${access}`);
        } if (type == "result") {
            navigate(`/${schoolName}/avaliacao`);
        }
    }

   return <Container onClick={() => enterActivity(access)}>
        <h3>{title}</h3>
         {type == "soon" ? null : <button>Acessar</button>}
        {detail ? <p>{detail}</p> : null}
    </Container>
}