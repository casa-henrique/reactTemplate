import {Container} from "./styles"

interface HomeMenuProps {
    section: string;
    changeSection: any;
}

export function HomeMenu({section, changeSection}:HomeMenuProps) {
    return <Container>
    <button className={section == "dash" ? "selected" : ""} onClick={() => changeSection("dash")}>Dashboard</button>
        <button className={section == "team" ? "selected" : ""} onClick={() => changeSection("team")}>Minhas Turmas</button>
        <button className={section == "library" ? "selected" : ""} onClick={() => changeSection("library")}>Biblioteca</button>
    </Container>
}