import styled from "styled-components";

export function WalletWrapper({ children }) {
  return <Container>{children}</Container>;
}

const Container = styled.div`
  width: 100%;
  height: 100vh;
  padding: 5%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  gap: 13px;

  footer {
    width: 100%;
    height: 100%;
    max-height: 120px;
    display: flex;
    align-items: center;
    gap: 5%;
  }
`;
