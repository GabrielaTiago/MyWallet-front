import {
  MdAddCircleOutline,
  MdOutlineRemoveCircleOutline,
} from "react-icons/md";
import { useNavigate } from "react-router-dom";
import { ButtonBox } from "./styles";

export function TransactionButton({ type }) {
  const navigate = useNavigate();
  const PROPS = {
    icon: {
      income: <MdAddCircleOutline />,
      expense: <MdOutlineRemoveCircleOutline />,
    },
    transaction: {
      income: "Nova entrada",
      expense: "Nova saída",
    },
  };
  
  return (
    <ButtonBox onClick={() => navigate(`/${type}`)}>
      {PROPS.icon[type]}
      <h4>{PROPS.transaction[type]}</h4>
    </ButtonBox>
  );
}
