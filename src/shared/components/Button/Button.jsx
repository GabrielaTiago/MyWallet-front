import { ThreeDots } from "react-loader-spinner";
import { ButtonBox } from "./styles";

export function Button({ type, disabled, text }) {
  return (
    <ButtonBox type={type} disabled={disabled}>
      {disabled ? <ThreeDots color="#ffffff"  height={25} width={55} /> : text}
    </ButtonBox>
  );
}
