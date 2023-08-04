import { useTrialMenuSelectContext } from "../../../hooks/useTrialMenuSelectedContext";
import { Container } from "./style";

export function TrialMenu() {
    const {menuSelect, setMenuSelect} = useTrialMenuSelectContext()

    return <Container>
        <button className={menuSelect == "activity" ? "selected" : ""} onClick={() => setMenuSelect("activity")}>Materiais Didáticos</button>
        <button className={menuSelect == "result" ? "selected" : ""} onClick={() => setMenuSelect("result")}>Avaliações</button>
        <button className={menuSelect == "report" ? "selected" : ""} onClick={() => setMenuSelect("report")}>Relatórios</button>
        <button className={menuSelect == "presentations" ? "selected" : ""} onClick={() => setMenuSelect("presentations")}>Apresentações</button>
        <button className={menuSelect == "searchs" ? "selected" : ""} onClick={() => setMenuSelect("searchs")}>Pesquisas</button>
    </Container>
}