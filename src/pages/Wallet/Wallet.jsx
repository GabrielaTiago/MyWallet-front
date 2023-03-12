import { useCallback, useEffect, useState } from "react";
import { useUserContext } from "../../shared/contexts";
import {
  AllTransactions,
  Header,
  TransactionButton,
} from "../../shared/components";
import { WalletWrapper } from "../../shared/layout";
import { getTransactions } from "../../shared/services";

export function Wallet() {
  const [listOfTransactions, setListOfTransactions] = useState([]);
  const [balanceValue, setBalanceValue] = useState(0);
  const { user } = useUserContext();

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
        <TransactionButton type="income" page="create" />
        <TransactionButton type="expense" page="create" />
      </footer>
    </WalletWrapper>
  );
}
