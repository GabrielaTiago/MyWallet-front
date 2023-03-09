import { useState } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { useUserContext } from "../../shared/contexts";
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
    <Container>
      <h2>Nova saída</h2>
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
        <button type="submit">Salvar Saída</button>
      </form>
    </Container>
  );
}

const Container = styled.div`
  width: 100%;
  height: 100%;
  padding: 0 25px;
  font-family: "Raleway";

  h2 {
    height: 96px;
    font-weight: 700;
    font-size: 26px;
    line-height: 31px;
    color: #ffffff;
    display: flex;
    align-items: center;
  }

  form {
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: 13px;
  }

  input {
    height: 58px;
    background-color: #ffffff;
    color: #000000;
    font-size: 20px;
    line-height: 23px;
    border-radius: 5px;
    border: none;
    padding-left: 15px;
  }
  button {
    height: 46px;
    background-color: #a328d6;
    color: #ffffff;
    font-weight: 700;
    font-size: 20px;
    line-height: 23px;
    border-radius: 5px;
    border: none;
  }
`;
