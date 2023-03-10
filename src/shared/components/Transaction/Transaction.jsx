import { Amount, Container, Day, Description } from "./styles";

export function Transaction({ transaction }) {
  const { day, amount, description, type } = transaction;
  let positive = false;

  if (type === "income") positive = true;

  return (
    <Container>
      <span>
        <Day>{day}</Day>
        <Description>{description}</Description>
      </span>
      <Amount positive={positive}>{amount}</Amount>
    </Container>
  );
}
