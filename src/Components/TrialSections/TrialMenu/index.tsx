import { Container } from "./style";

interface TrialMenuProps {
    selected: string;
    changeSelection: any;
}

export function TrialMenu({selected, changeSelection}:TrialMenuProps) {
    return <Container>
        <button className={selected == "activity" ? "selected" : ""} onClick={() => changeSelection("activity")}>Materiais Didáticos</button>
        <button className={selected == "result" ? "selected" : ""} onClick={() => changeSelection("result")}>Avaliações</button>
        <button className={selected == "report" ? "selected" : ""} onClick={() => changeSelection("report")}>Relatórios</button>
        <button className={selected == "presentations" ? "selected" : ""} onClick={() => changeSelection("presentations")}>Apresentações</button>
        <button className={selected == "searchs" ? "selected" : ""} onClick={() => changeSelection("searchs")}>Pesquisas</button>
    </Container>
}