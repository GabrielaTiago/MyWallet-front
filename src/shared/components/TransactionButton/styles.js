import styled from "styled-components";

const ButtonBox = styled.div`
  width: 100%;
  height: 100%;
  padding: 15px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  background-color: #a328d6;
  color: #ffffff;
  border-radius: 5px;
  border: none;

  h4 {
    width: 44px;
    height: 40px;
    font-weight: 700;
    font-size: 17px;

    @media (min-width: 463px) {
      h4 {
        width: 100px;
      }
    }
  }
`;

export { ButtonBox };
