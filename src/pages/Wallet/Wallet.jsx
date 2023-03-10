import { useCallback, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useUserContext } from "../../shared/contexts";
import { AllTransactions, Header } from "../../shared/components";
import { WalletWrapper } from "../../shared/layout";
import { getTransactions } from "../../shared/services";

export function Wallet() {
  const [listOfTransactions, setListOfTransactions] = useState([]);
  const [balanceValue, setBalanceValue] = useState(0);
  const { user } = useUserContext();
  const navigate = useNavigate();

  const fetchTransactions = useCallback(async () => {
    try {
      const { balance, transactions } = await getTransactions(user.token);

      setListOfTransactions([...transactions]);
      setBalanceValue(balance);
    } catch (err) {
      alert(`${err.data}`);
    }
  }, [user.token]);

  useEffect(() => {
    fetchTransactions();
  }, [fetchTransactions]);

  return (
    <WalletWrapper>
      <Header />
      <AllTransactions
        transactions={listOfTransactions}
        balance={balanceValue}
      />
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
    </WalletWrapper>
  );
}
