import {Container} from './styles'
import LogoCodifica from "../../assets/images/Logos/Logo-Codifica.svg";
import LogoIsraelita from "../../assets/images/Logos/Logo-Israelita.png";
import LogoMaplebear from "../../assets/images/Logos/Logo-Maplebear.png";
import LogoDivino from "../../assets/images/Logos/Logo-DivinoMestre.png";

export function SelectSchool() {
    return <Container>
        <img src={LogoCodifica}></img>

        <p>Acesse sua plataforma:</p>

        <div>
            <a href="/israelita">
                <img src={LogoIsraelita}/>
                <p>Israelita</p>
            </a>
            <a href="/divinomestre">
                <img src={LogoDivino}/>
                <p>Divino Mestre</p>
            </a>
            <a href="/maplebear">
                <img src={LogoMaplebear}/>
                <p>Maplebear</p>
            </a>
        </div>
    </Container>
}