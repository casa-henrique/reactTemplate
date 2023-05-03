import { ScheduleComponent } from "../../Components/ScheduleComponent";
import { Container } from "./styles";
import { Warning } from "../../Components/Warning";
import { useEffect, useState } from "react";
import { DevWarning } from "../../Components/DevWarning";

export function Home() {
  const[userInfos, setUserInfos] = useState<any>()
  const[showDevWarning, setShowDevWarning] = useState(true)

  useEffect(() => {
    const user = localStorage.getItem('user');

    if(user) {
      const userObject = JSON.parse(user)
      setUserInfos(userObject)
    }
  }, []);

  return (
    <Container>
      <DevWarning />
      <h2>Bem-vindo Professor(a) <span>{userInfos ? userInfos.user.name : null}</span> </h2>

      <Warning message='Para acessar o material basta clicar em sua turma'/>

      <ScheduleComponent />
    </Container>
  );
}
