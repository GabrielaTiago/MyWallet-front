import { ButtonBox } from "./styles";

export function Button({ type, disabled, text }) {
  return (
    <ButtonBox type={type} disabled={disabled}>
      {text}
    </ButtonBox>
  );
}
