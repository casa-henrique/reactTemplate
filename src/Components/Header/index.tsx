import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import LogoCodifica from "../../assets/images/Logos/Logo-Codifica.svg";
import LogoIsraelita from "../../assets/images/Logos/Logo-Israelita.png";
import LogoMaplebear from "../../assets/images/Logos/Logo-Maplebear.png";
import { useSchoolNameContext } from "../../hooks/useSchoolNameContext";
import { Content, HeaderContainer } from "./styles";

interface SchoolListProps {
  maplebear: string;
  israelita: string;
}

interface HeaderProps {
  type: string;
  schoolName: string;
}

export function Header({ schoolName, type }: HeaderProps) {
  const navigate = useNavigate();
  const { setSchoolName } = useSchoolNameContext();

  useEffect(() => {
    setSchoolName(schoolName);
  }, [schoolName]);

  const schoolList = { maplebear: LogoMaplebear, israelita: LogoIsraelita };

  return (
    <HeaderContainer>
      <Content>
        <div className="imagesWrapper">
          <img
            src={schoolList[schoolName as keyof SchoolListProps]}
            alt={`Logo ${schoolName}`}
          />
          <img src={LogoCodifica} alt="Logo Codifica" />
        </div>

        {type == "inside" ? (
          <nav className="navigation">
            <a onClick={() => navigate(`/${schoolName}/home`)}>Home</a>
          </nav>
        ) : null}
      </Content>
    </HeaderContainer>
  );
}
