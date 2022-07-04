import styled from "styled-components";


export default function NewEntry() {
    return(
        <Container>
            <h2>Nova entrada</h2>
            <form>
                <input type="text" placeholder="Valor" required/>
                <input type="text" placeholder="Descrição" required/>
                <button type="submit">Salvar Entrada</button>
            </form>
        </Container>
    );
}

const Container = styled.div`
    width: 100%;
    height: 100%;
    padding: 0 25px;
    font-family: 'Raleway';

    h2{
        height: 96px;
        font-weight: 700;
        font-size: 26px;
        line-height: 31px;
        color: #FFFFFF;
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
        background-color: #FFFFFF;
        color: #000000;
        font-size: 20px;
        line-height: 23px;
        border-radius: 5px;
        border: none;
        padding-left: 15px;
    }
    button {
        height: 46px;
        background-color: #A328D6;
        color: #FFFFFF;
        font-weight: 700;
        font-size: 20px;
        line-height: 23px;
        border-radius: 5px;
        border: none;

    }

`