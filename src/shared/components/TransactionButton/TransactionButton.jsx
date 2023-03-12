import {
  MdAddCircleOutline,
  MdOutlineRemoveCircleOutline,
} from "react-icons/md";
import { useNavigate } from "react-router-dom";
import { ButtonBox } from "./styles";

export function TransactionButton({ type, page }) {
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
    <ButtonBox
      onClick={() =>
        navigate("/transaction", {
          state: { type, page },
        })
      }
    >
      {PROPS.icon[type]}
      <h4>{PROPS.transaction[type]}</h4>
    </ButtonBox>
  );
}
