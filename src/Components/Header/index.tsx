import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import LogoCodifica from "../../assets/images/Logos/Logo-Codifica.svg";
import LogoIsraelita from "../../assets/images/Logos/Logo-Israelita.png";
import LogoMaplebear from "../../assets/images/Logos/Logo-Maplebear.png";
import LogoDivino from "../../assets/images/Logos/Logo-DivinoMestre.png";
import { useSchoolNameContext } from "../../hooks/useSchoolNameContext";
import { Content, HeaderContainer, NotifyBell, NotifyBox, UserBox, UserTitle } from "./styles";
import {AiFillBell} from 'react-icons/ai'
import { useHomeSectionSelectContext } from "../../hooks/useHomeSectionSelectedContext";

interface SchoolListProps {
  maplebear: string;
  israelita: string;
  divinomestre: string;
}

interface HeaderProps {
  type: string;
  schoolName: string;
}

export function Header({ schoolName, type }: HeaderProps) {
  const navigate = useNavigate();
  const { setSchoolName } = useSchoolNameContext();
  const[userInfos, setUserInfos] = useState<any>()
  const { setSectionSelect } = useHomeSectionSelectContext();
  
  useEffect(() => {
      const user = localStorage.getItem('user');
  
      if(user) {
        const userObject = JSON.parse(user)
        setUserInfos(userObject)
      }
    }, []);

  useEffect(() => {
    setSchoolName(schoolName);
  }, [schoolName]);

  const schoolList = { maplebear: LogoMaplebear, israelita: LogoIsraelita, divinomestre: LogoDivino };

  function userLogOut() {
    localStorage.removeItem('user')
    navigate(`/${schoolName}/login`)
  }

  return (
    <HeaderContainer>
      <Content>
        <div className="imagesWrapper">
          <img src={LogoCodifica} alt="Logo Codifica" />
          <img
            src={schoolList[schoolName as keyof SchoolListProps]}
            alt={`Logo ${schoolName}`}
          />
        </div>

        {type == "inside" ? (
          <nav className="navigation">
            <a onClick={() => {navigate(`/${schoolName}/home`); setSectionSelect("dash")}}>Home</a>
            <a onClick={() => {navigate(`/${schoolName}/home`); setSectionSelect("team")}}>Turmas</a>
            {/* <a>Comunidade</a> */}
          </nav>
        ) : null}

        {type == "inside" ? (
          <nav className="navigation user">
            <NotifyBell><AiFillBell /></NotifyBell>
            <NotifyBox><p>Em breve</p></NotifyBox>
            <p>|</p>
            <UserTitle>{userInfos ? userInfos.user.name : null}</UserTitle>
            <UserBox onClick={() => userLogOut()}><p>Sair</p></UserBox>
          </nav>
        ) : null}
      </Content>
    </HeaderContainer>
  );
}
