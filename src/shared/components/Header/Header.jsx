import styled from "styled-components";
import { useUserContext } from "../../contexts";

export function Header() {
  const { user } = useUserContext();
  
  return (
    <Container>
      <h2>Olá, {user.name}</h2>
      <ion-icon name="log-out-outline"></ion-icon>
    </Container>
  );
}

const Container = styled.header`
  width: 100%;
  height: 71px;
  display: flex;
  align-items: center;
  justify-content: space-between;

  h2 {
    font-family: "Raleway";
    font-style: normal;
    font-weight: 700;
    font-size: 26px;
    line-height: 31px;
    color: #ffffff;
  }

  ion-icon {
    width: 23px;
    height: 24px;
    color: #ffffff;
  }
`;
