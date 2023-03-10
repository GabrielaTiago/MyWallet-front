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
    height: 143px;
    display: flex;
    align-items: center;
    gap: 5%;
  }

  button {
    width: 100%;
    height: 100%;
    padding: 15px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    background-color: #a328d6;
    color: #ffffff;
    border-radius: 5px;
    border: none;
  }

  ion-icon {
    width: 22px;
    height: 22px;
  }

  h5 {
    width: 44px;
    height: 40px;
    font-weight: 700;
    font-size: 17px;
    line-height: 20px;
  }
`;
