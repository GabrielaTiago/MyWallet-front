import styled from "styled-components";

const Container = styled.div`
  width: 100%;
  min-height: 25px;
  padding: 0 2%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  font-size: 16px;
  line-height: 19px;
  color: #c6c6c6;
  cursor: pointer;
  :hover {
    background-color: #f5f5f5;
    filter: brightness(0.9);
  }

  span {
    display: flex;
    flex-direction: row;
    align-items: center;
    gap: 8px;
  }
`;

const RightBox = styled.span`
  width: calc(100% - 90px);
`;

const LeftBox = styled.span`
  width: 100%;
  max-width: 90px;
`;

const Day = styled.div`
  width: 45px;
  height: 100%;
`;

const Description = styled.div`
  height: 100%;
  color: #000000;
  white-space: nowrap;
  text-overflow: ellipsis;
  overflow: hidden;
  max-width: calc(100% - 50px); 
`;

const Amount = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row-reverse;
  color: ${({ positive }) => (positive ? "#03AC00" : "#C70000")};
`;

export { Amount, Container, Day, Description, LeftBox, RightBox };
