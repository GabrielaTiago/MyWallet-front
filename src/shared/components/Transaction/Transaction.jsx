import { useNavigate } from "react-router-dom";
import {
  Amount,
  Container,
  Day,
  Description,
  LeftBox,
  RightBox,
} from "./styles";

export function Transaction({ transaction }) {
  const { _id, day, amount, description, type } = transaction;
  const navigate = useNavigate();
  let positive = false;

  if (type === "income") positive = !positive;

  const goToEdition = () => {
    navigate("/transaction", {
      state: { type, page: "edit", transactionId: _id },
    });
  };

  return (
    <Container>
      <RightBox onClick={goToEdition}>
        <Day>{day}</Day>
        <Description>{description}</Description>
      </RightBox>
      <LeftBox>
        <Amount positive={positive} onClick={goToEdition}>
          {amount}
        </Amount>
      </LeftBox>
    </Container>
  );
}
