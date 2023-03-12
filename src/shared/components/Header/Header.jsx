import { RiLogoutBoxRLine } from "react-icons/ri";
import { Container } from "./styles";
import { useUserContext } from "../../contexts";
import { PageTitle } from "../../components";
import { useNavigate } from "react-router-dom";

export function Header() {
  const {
    user: { name },
  } = useUserContext();
  const navigate = useNavigate();

  const handleLogOut = () => {
    navigate("/");
  };

  return (
    <Container>
      <PageTitle>Olá, {name}</PageTitle>
      <RiLogoutBoxRLine onClick={handleLogOut} />
    </Container>
  );
}
