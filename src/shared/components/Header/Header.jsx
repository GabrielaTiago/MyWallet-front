import { Container } from "./styles";
import { useUserContext } from "../../contexts";
import { PageTitle } from "../PageTitle/PageTitle";

export function Header() {
  const { user } = useUserContext();

  return (
    <Container>
      <PageTitle>Olá, {user.name}</PageTitle>
      <ion-icon name="log-out-outline"></ion-icon>
    </Container>
  );
}
