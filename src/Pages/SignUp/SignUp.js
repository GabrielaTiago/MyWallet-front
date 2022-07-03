import styled from "styled-components";

export default function SignUp() {
    return (
        <Container>
            <form>
                <input
                    type="text"
                    placeholder="Nome"
                    required
                />
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
                <input
                    type="password"
                    placeholder="Confirme a senha"
                    required
                />
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

    input{
        width: 100%;
        height: 58px;
        background-color: #FFFFFF;
        border-radius: 5px;
        font-family: "Raleway";
        font-weight: 400;
        font-size: 20px;
        line-height: 23px;
        color: #000000;
        padding-left: 15px;
    }
`