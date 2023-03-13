import styled from "styled-components";

const Container = styled.main`
  width: 100%;
  height: calc(100% - 37px);
  padding-top: 2%;
  background-color: #ffffff;
  border-radius: 5px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  overflow: hidden;
  position: relative;
`;

const Transactions = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  gap: 8px;
  overflow-y: scroll;
  &::-webkit-scrollbar {
    width: 5px;
  }
  &::-webkit-scrollbar-thumb {
    background-color: #a328d6;
    border-radius: 5px;
  }
`;

const NoContent = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  color: #868686;
`;

const Balance = styled.div`
  width: 100%;
  height: 37px;
  padding: 1% 2% 1% 2%;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  z-index: 2;
  background-color: #ffffff;
  border-radius: 5px;
  font-size: 17px;
`;

const Text = styled.div`
  font-weight: 700;
  color: #000000;
`;

const Total = styled.div`
  color: ${({ positive }) => (positive ? "#03AC00" : "#C70000")};
`;

export { Container, Balance, NoContent, Text, Total, Transactions };
