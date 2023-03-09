import { useCallback, useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import AuthContext from "../../shared/contexts/AuthContext";
import { AllTransactions, Header } from "../../shared/components";
import { getTransactions } from "../../shared/services";

export function Wallet() {
  const [listOfTransactions, setListOfTransactions] = useState([]);
  const [balanceValue, setBalanceValue] = useState({});
  const { user } = useContext(AuthContext);
  const navigate = useNavigate();

  const fetchTransactions = useCallback(async () => {
    try {
      const { balance, transactions } = await getTransactions(user.token);

      setListOfTransactions([transactions]);
      setBalanceValue({ balance });
    } catch (err) {
      alert(`${err.data}`);
    }
  }, [user.token]);

  useEffect(() => {
    fetchTransactions();
  }, [fetchTransactions]);

  return (
    <Container>
      <Header />
      <Main>
        {listOfTransactions !== 0 ? (
          <AllTransactions />
        ) : (
          <p>Não há registros de entrada ou saída</p>
        )}
      </Main>
      <footer>
        <button onClick={() => navigate("/income")}>
          <ion-icon name="add-circle-outline"></ion-icon>
          <h5>Nova entrada</h5>
        </button>
        <button onClick={() => navigate("/expense")}>
          <ion-icon name="remove-circle-outline"></ion-icon>
          <h5>Nova saída</h5>
        </button>
      </footer>
    </Container>
  );
}

const Container = styled.div`
  width: 100%;
  height: 100%;
  padding: 0 25px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  overflow: hidden;
  font-family: "Raleway";
  font-weight: 400;

  footer {
    width: 100%;
    height: 143px;
    padding: 0 25px;
    bottom: 0;
    position: fixed;
    display: flex;
    align-items: center;
    justify-content: space-between;
  }

  button {
    min-width: 155px;
    height: 114px;
    background-color: #a328d6;
    color: #ffffff;
    border-radius: 5px;
    border: none;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    padding: 15px;
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

const Main = styled.main`
  width: 96%;
  background-color: #ffffff;
  border-radius: 5px;
  display: flex;
  align-items: center;
  justify-content: center;
  position: fixed;
  top: 78px;
  bottom: 143px;
  box-sizing: border-box;

  p {
    min-width: 180px;
    padding: 15px;
    font-size: 20px;
    line-height: 23px;
    text-align: center;
    color: #868686;
  }
`;
