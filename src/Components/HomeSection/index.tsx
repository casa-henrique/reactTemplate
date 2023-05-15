import { useSchoolNameContext } from "../../hooks/useSchoolNameContext";
import { Container, Content } from "./styles";

export function HomeSection() {
  const { schoolName } = useSchoolNameContext();

  return (
    <Container>
      <Content>
        <h1>
          Plataforma de conteúdo para o educador <span>{schoolName == "divinomestre" ? "Divino Mestre" : schoolName}</span>
        </h1>

        <p>Trilha formativa de Educação Tecnológica</p>

        <a href={`/${schoolName.toLocaleLowerCase().replaceAll(" ", "")}/login`}>
          <button>Acessar</button>
        </a>
      </Content>
    </Container>
  );
}
