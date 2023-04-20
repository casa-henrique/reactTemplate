import { ScheduleComponent } from "../../Components/ScheduleComponent";
import { Container } from "./styles";

export function Home() {
  return (
    <Container>
      <h2>Bem-vindo Professor(a) </h2>

      <ScheduleComponent />
    </Container>
  );
}
