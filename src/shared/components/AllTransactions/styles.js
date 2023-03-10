import styled from "styled-components";

const Container = styled.main`
  width: 100%;
  height: 100%;
  padding: 2%;
  background-color: #ffffff;
  border-radius: 5px;
  display: flex;
  flex-direction: column;
  gap: 5px;
  position: relative;
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
  height: 25px;
  padding: 0 5px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  position: absolute;
  bottom: 0;
  left: 0;
  z-index: 2;
  background-color: #ffffff;
  border-radius: 5px;
  font-size: 17px;
  line-height: 20px;
`;

const Text = styled.div`
  font-weight: 700;
  color: #000000;
`;

const Total = styled.div`
  color: ${({ positive }) => (positive ? "#03AC00" : "#C70000")};
`;

export { Container, Balance, NoContent, Text, Total };
