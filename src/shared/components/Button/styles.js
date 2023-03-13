import styled from "styled-components";

const ButtonBox = styled.button`
  width: 100%;
  height: 46px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 5px;
  border: none;
  background-color: #a328d6;
  color: #ffffff;
  font-weight: 700;
  font-size: 20px;
  cursor: pointer;

  :disabled {
    opacity: 0.7;
    pointer-events: none;
  }
`;

export { ButtonBox };
