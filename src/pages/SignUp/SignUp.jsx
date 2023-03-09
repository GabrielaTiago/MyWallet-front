import axios from "axios";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import styled from "styled-components";
import { Title } from "../../shared/components";
import { signUp } from "../../shared/services";

export function SignUp() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const navigate = useNavigate();

  function handleSignUp(event) {
    event.preventDefault();
    signUpUser();
  }

  async function signUpUser() {
    try {
      await signUp({ name, email, password, confirmPassword });
      navigate("/sign-in");
    } catch (err) {
      alert(`${err.data}`);
    }
  }

  return (
    <Container>
      <Title />
      <form onSubmit={handleSignUp}>
        <input
          type="text"
          placeholder="Nome"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />
        <input
          type="email"
          placeholder="E-mail"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <input
          type="password"
          placeholder="Senha"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        <input
          type="password"
          placeholder="Confirme a senha"
          value={confirmPassword}
          onChange={(e) => setConfirmPassword(e.target.value)}
          required
        />
        <button type="submit">Cadastrar</button>
      </form>
      <Link to="/">
        <p>Já tem uma conta? Entre agora!</p>
      </Link>
    </Container>
  );
}

const Container = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  form {
    width: 326px;
    height: auto;
    display: flex;
    flex-direction: column;
    gap: 13px;
    margin: 28px auto 32px;
  }

  input,
  button {
    width: 100%;
    height: 58px;
    border-radius: 5px;
    font-family: "Raleway";
    font-weight: 400;
    font-size: 20px;
    line-height: 23px;
    border: none;
  }

  input {
    background-color: #ffffff;
    color: #000000;
    padding-left: 15px;
  }

  button {
    color: #ffffff;
    background-color: #a328d6;
    font-weight: 700;
  }

  p {
    color: #ffffff;
    font-family: "Raleway";
    font-weight: 700;
    font-size: 15px;
    line-height: 18px;
  }
`;
