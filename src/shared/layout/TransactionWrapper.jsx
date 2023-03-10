import styled from "styled-components";

export function TransactionsWrapper({ children }) {
  return <Container>{children}</Container>;
}

const Container = styled.main`
  width: 100%;
  height: 100%;
  padding: 5%;
  display: flex;
  flex-direction: column;
  gap: 20px;

  @media (min-width: 539px) {
    text-align: center;
  }
`;
