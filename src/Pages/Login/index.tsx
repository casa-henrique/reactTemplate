import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import LogoCodifica from "../../assets/images/Logos/Icon-Codifica.svg";
import LogoIsraelita from "../../assets/images/Logos/israelita_logo_azul.png";
import LogoMaplebear from "../../assets/images/Logos/Logo-Maplebear.png";
import sideImage from "../../assets/images/o-professor-deve-estar-sempre-alerta.jpg";
import { LoginAutentication } from "./LoginAutentication";
import { Container, LoginForm } from "./styles";

interface SchoolListProps {
  maplebear: string;
  israelita: string;
}

export function Login() {
  const [userEmail, setUserEmail] = useState("");
  const [userPassword, setUserPassword] = useState("");
  const navigate = useNavigate();

  const schoolNameByUrl = window.location.pathname;
  const schoolName = schoolNameByUrl.replaceAll("/", "").replace("login", "");

  const schoolList = { maplebear: LogoMaplebear, israelita: LogoIsraelita };

  function handleSubmitForm(event: any) {
    event.preventDefault();
  }

  const handleSubmitLogin = async (event: any) => {
    event.preventDefault();

    try {
      await LoginAutentication(userEmail, userPassword).then(() => {
        navigate(`/${schoolName}/home`);
      });
    } catch (err) {
      toast.error("Email ou senha inválidos");
    }
  };

  return (
    <Container>
      <section className="leftSection">
        <div className="imagesWrapper">
          <img src={LogoCodifica} alt="Logo Codifica" />
          <img
            src={schoolList[schoolName as keyof SchoolListProps]}
            alt={`Logo ${schoolName}`}
          />
        </div>

        <div className="title">
          <h1>Log in</h1>
          <p>Bem-vindo de volta! Por favor insira seus dados de login:</p>
        </div>

        <LoginForm onSubmit={handleSubmitForm}>
          <input
            type="text"
            placeholder="E-mail de usuário"
            onChange={(e) => setUserEmail(e.target.value)}
            id="email"
          />
          <input
            type="password"
            placeholder="Senha"
            onChange={(e) => setUserPassword(e.target.value)}
          />
          <button onClick={handleSubmitLogin}>Acessar</button>
          <p>
            Não possui cadastro? <a href="mailto:barbarabatistuzzo@codificaedu.com.br">clique aqui</a>
          </p>
        </LoginForm>
      </section>

      <section className="rightSection">
        <img src={sideImage} alt="" />
      </section>
    </Container>
  );
}
