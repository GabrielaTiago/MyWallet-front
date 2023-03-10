import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useUserContext } from "../../shared/contexts";
import { Button, GoTo, Title } from "../../shared/components";
import { AuthWrapper, FormWrapper } from "../../shared/layout";
import { signIn } from "../../shared/services";

export function SignIn() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { setUser } = useUserContext();
  const navigate = useNavigate();

  function handleSignIn(event) {
    event.preventDefault();
    signInUser();
  }

  async function signInUser() {
    try {
      const response = await signIn({ email, password });
      setUser(response);
      navigate("/wallet");
    } catch (err) {
      alert(`${err.data}`);
    }
  }

  return (
    <AuthWrapper>
      <Title />

      <FormWrapper>
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
          <Button type="submit" disabled={false} text="Entrar" />
        </form>
      </FormWrapper>

      <GoTo to="/sign-up" text="Primeira vez? Cadastre-se!" />
    </AuthWrapper>
  );
}
