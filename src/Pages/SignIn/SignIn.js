import styled from "styled-components";
import Title from "../../Components/Title";

export default function SignIn() {
    return (
        <Container>
            <Title />
            <form>
                <input
                    type="text"
                    placeholder="E-mail"
                    required
                />
                <input
                    type="password"
                    placeholder="Senha"
                    required
                />
                <button type="submit">Entrar</button>
            </form>
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

`