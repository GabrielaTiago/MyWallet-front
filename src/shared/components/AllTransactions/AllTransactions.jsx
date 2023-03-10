import { Container, Balance, Text, Total, NoContent } from "./styles";
import { Transaction } from "../Transaction/Transaction";

export function AllTransactions({ transactions, balance }) {
  let positive = false;

  if (balance > 0) positive = true;

  return (
    <Container>
      {transactions.length === 0 ? (
        <NoContent>Não há registros de entrada ou saída</NoContent>
      ) : (
        <>
          {transactions.map((transaction) => {
            const { _id } = transaction;
            return <Transaction key={_id} transaction={transaction} />;
          })}
          <Balance>
            <Text>SALDO</Text>
            <Total positive={positive}>{balance}</Total>
          </Balance>
        </>
      )}
    </Container>
  );
}
