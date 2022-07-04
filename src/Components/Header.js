import styled from "styled-components";
import { useContext } from "react";
import AuthContext from "../Contexts/AuthContext";

export default function Header() {
    const { user } = useContext(AuthContext);
    return (
        <Container>
            <h2>Olá, {user.name}</h2>
            <ion-icon name="log-out-outline"></ion-icon>
        </Container>
    );
}

const Container = styled.header`
    width: 100%;
    height: 71px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    
    h2 {
        font-family: 'Raleway';
        font-style: normal;
        font-weight: 700;
        font-size: 26px;
        line-height: 31px;
        color: #FFFFFF;
    }

    ion-icon {
        width: 23px;
        height: 24px;
        color: #FFFFFF;
    }
`