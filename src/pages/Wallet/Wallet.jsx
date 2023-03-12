import {
  AllTransactions,
  Header,
  TransactionButton,
} from "../../shared/components";
import { WalletWrapper } from "../../shared/layout";

export function Wallet() {
  return (
    <WalletWrapper>
      <Header />
      <AllTransactions />
      <footer>
        <TransactionButton type="income" page="create" />
        <TransactionButton type="expense" page="create" />
      </footer>
    </WalletWrapper>
  );
}
