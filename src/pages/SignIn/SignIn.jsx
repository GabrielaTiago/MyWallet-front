import { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import AuthContext from "../../shared/contexts/AuthContext";
import styled from "styled-components";
import { Title } from "../../shared/components";
import { signIn } from "../../shared/services";

export function SignIn() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { setUser } = useContext(AuthContext);
  const navigate = useNavigate();

  function handleSignIn(event) {
    event.preventDefault();
    signInUser();
  }

  async function signInUser() {
    try {
      const response = await signIn({ email, password });
      setUser(response.token);
      navigate("/wallet")
    } catch (err) {
      alert(`${err.data}`);
    }
  }

  return (
    <Container>
      <Title />
      <form onSubmit={handleSignIn}>
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
        <button type="submit">Entrar</button>
      </form>
      <Link to="/sign-up">
        <p>Primeira vez? Cadastre-se!</p>
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
    margin: 24px auto 36px;
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
