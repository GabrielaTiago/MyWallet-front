import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button, PageTitle } from "../../shared/components";
import { useUserContext } from "../../shared/contexts";
import { FormWrapper, TransactionsWrapper } from "../../shared/layout";
import { createTransaction } from "../../shared/services";

export function Income() {
  const [amount, setAmount] = useState("");
  const [description, setDescription] = useState("");
  const { user } = useUserContext();
  const navigate = useNavigate();

  function handleSubmit(e) {
    e.preventDefault();
    fetchIncome();
  }

  async function fetchIncome() {
    try {
      await createTransaction(
        { amount, description, type: "income" },
        user.token
      );
      navigate("/wallet");
    } catch (err) {
      alert(`${err.data}`);
    }
  }

  return (
    <TransactionsWrapper>
      <PageTitle>Nova entrada</PageTitle>
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
          <Button type="submit" disabled={false} text="Salvar Entrada" />
        </form>
      </FormWrapper>
    </TransactionsWrapper>
  );
}
