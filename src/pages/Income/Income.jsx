import axios from "axios";
import { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import AuthContext from "../../Contexts/AuthContext";

export function Income() {
    const [amout, setAmout] = useState("");
    const [description, setDescription] = useState("");
    const { user } = useContext(AuthContext);
    const navigate = useNavigate();

    function handleNewEntry(event) {
        event.preventDefault();

        const config = { headers: { Authorization: `Bearer ${user.token}` } };
        const promise = axios.post("https://git.heroku.com/mywallet-api-backend.git/transactions", { amout, description, status: "IN" }, config);

        promise.then((res) => {
            navigate("/personal-wallet");
        });

        promise.catch((res) => alert(res.response.data.message));
    }

    return (
        <Container>
            <h2>Nova entrada</h2>
            <form onSubmit={handleNewEntry}>
                <input
                    type="text"
                    placeholder="Valor"
                    value={amout}
                    onChange={e => setAmout(e.target.value)}
                    required
                />
                <input
                    type="text"
                    placeholder="Descrição"
                    value={description}
                    onChange={e => setDescription(e.target.value)}
                    required
                />
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