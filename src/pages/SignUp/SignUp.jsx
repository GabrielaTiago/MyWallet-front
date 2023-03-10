import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button, GoTo, Title } from "../../shared/components";
import { AuthWrapper, FormWrapper } from "../../shared/layout";
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
    <AuthWrapper>
      <Title />
      <FormWrapper>
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
          <Button type="submit" disabled={false} text="Cadastrar" />
        </form>
      </FormWrapper>
      <GoTo to="/" text="Já tem uma conta? Entre agora!" />
    </AuthWrapper>
  );
}
