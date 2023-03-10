import styled from "styled-components";

export function AuthWrapper({ children }) {
  return <Container>{children}</Container>;
}

const Container = styled.main`
  width: 100%;
  height: 100vh;
  padding: 5%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 30px;
`;
