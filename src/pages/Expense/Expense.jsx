import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useUserContext } from "../../shared/contexts";
import { Button, PageTitle } from "../../shared/components";
import { FormWrapper, TransactionsWrapper } from "../../shared/layout";
import { createTransaction } from "../../shared/services";

export function Expense() {
  const [amount, setAmount] = useState("");
  const [description, setDescription] = useState("");
  const { user } = useUserContext();
  const navigate = useNavigate();

  function handleSubmit(e) {
    e.preventDefault();
    fetchExpense();
  }

  async function fetchExpense() {
    try {
      await createTransaction(
        { amount, description, type: "expense" },
        user.token
      );
      navigate("/wallet");
    } catch (err) {
      alert(`${err.data}`);
    }
  }

  return (
    <TransactionsWrapper>
      <PageTitle>Nova saída</PageTitle>
      <FormWrapper>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Valor"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
            required
          />
          <input
            type="text"
            placeholder="Descrição"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            required
          />
          <Button type="submit" disabled={false} text="Salvar saída" />
        </form>
      </FormWrapper>
    </TransactionsWrapper>
  );
}
