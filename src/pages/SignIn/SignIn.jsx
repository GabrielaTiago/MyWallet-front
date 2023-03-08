import axios from "axios";
import { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import AuthContext from "../../shared/contexts/AuthContext";
import styled from "styled-components";
import { Title } from "../../shared/components";

export function SignIn() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const { setUser } = useContext(AuthContext);
    const navigate = useNavigate();

    function handleSignIn(event) {
        event.preventDefault();

        const promise = axios.post("https://git.heroku.com/mywallet-api-backend.git/sign-in", { email, password });

        promise.then((res) => {
            setUser(res.data);
            navigate("/personal-wallet")
        });
        
        promise.catch((res) =>
            alert(`${res.response.data.message}`));
    }

    return (
        <Container>
            <Title />
            <form onSubmit={handleSignIn}>
                <input
                    type="email"
                    placeholder="E-mail"
                    value={email}
                    onChange={e => setEmail(e.target.value)}
                    required
                />
                <input
                    type="password"
                    placeholder="Senha"
                    value={password}
                    onChange={e => setPassword(e.target.value)}
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

    input, button {
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
        background-color: #FFFFFF;
        color: #000000;
        padding-left: 15px;
    }

    button {
        color: #FFFFFF;
        background-color: #A328D6;
        font-weight: 700;
    }

    p {
        color: #FFFFFF;
        font-family: "Raleway";
        font-weight: 700;
        font-size: 15px;
        line-height: 18px;
    }
`