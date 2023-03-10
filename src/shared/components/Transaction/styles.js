import styled from "styled-components";

const Container = styled.div`
  width: 100%;
  height: 25px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  font-size: 16px;
  line-height: 19px;

  span {
    width: auto;
    display: flex;
    flex-direction: row;
    gap: 8px;
  }
`;

const Day = styled.div`
  height: 100%;
  color: #c6c6c6;
`;

const Description = styled.div`
  height: 100%;
  color: #000000;
  word-break: break-all;
`;

const Amount = styled.div`
  max-width: 65px;
  color: ${({ positive }) => (positive ? "#03AC00" : "#C70000")};
`;

export { Amount, Container, Day, Description };
