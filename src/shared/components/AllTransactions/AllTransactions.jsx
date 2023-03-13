import { useCallback, useEffect, useState } from "react";
import Swal from "sweetalert2";
import {
  Container,
  Balance,
  Text,
  Total,
  NoContent,
  Transactions,
} from "./styles";
import { useUserContext } from "../../contexts";
import { Transaction } from "../../components";
import { getTransactions } from "../../services";
import { formatMoney } from "../../utils";

export function AllTransactions() {
  const [listOfTransactions, setListOfTransactions] = useState([]);
  const [balanceValue, setBalanceValue] = useState(0);
  const {
    user: { token },
  } = useUserContext();
  const noTransactions = listOfTransactions.length === 0;
  let positive = false;

  const fetchTransactions = useCallback(async () => {
    try {
      const { balance, transactions } = await getTransactions(token);

      setListOfTransactions([...transactions]);
      setBalanceValue(balance);
    } catch (err) {
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: `${err.data}`,
        confirmButtonColor: "#8c17be",
      });
    }
  }, [token]);

  useEffect(() => {
    fetchTransactions();
  }, [fetchTransactions]);

  if (balanceValue > 0) positive = !positive;

  return (
    <Container>
      {noTransactions ? (
        <NoContent>Não há registros de entrada ou saída</NoContent>
      ) : (
        <>
          <Transactions>
            {listOfTransactions.map((transaction) => {
              const { _id } = transaction;
              return (
                <Transaction
                  key={_id}
                  transaction={transaction}
                  fetchTransactions={fetchTransactions}
                />
              );
            })}
          </Transactions>
          <Balance>
            <Text>SALDO</Text>
            <Total positive={positive}>{formatMoney(balanceValue)}</Total>
          </Balance>
        </>
      )}
    </Container>
  );
}
