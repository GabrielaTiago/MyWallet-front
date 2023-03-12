import { AiOutlineClose } from "react-icons/ai";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import {
  Amount,
  Container,
  Day,
  Description,
  LeftBox,
  RightBox,
} from "./styles";
import { useUserContext } from "../../contexts";
import { deleteTransaction } from "../../services";
import { formatMoney } from "../../utils";

export function Transaction({ transaction }) {
  const { _id, day, amount, description, type } = transaction;
  const {
    user: { token },
  } = useUserContext();
  const navigate = useNavigate();
  let positive = false;

  if (type === "income") positive = !positive;

  const goToEdition = () => {
    navigate("/transaction", {
      state: { type, page: "edit", transactionId: _id },
    });
  };

  const deleteUserTransaction = () => {
    Swal.fire({
      icon: "warning",
      title: "Deseja mesmo deletar esta transação?",
      text: "Você não poderá reverter essa ação...",
      showCancelButton: true,
      confirmButtonColor: "#8c17be",
      cancelButtonColor: "#d33",
      confirmButtonText: "Sim, delete!",
      cancelButtonText: "Não, cancele!",
    }).then(async ({ isConfirmed, isDismissed }) => {
      if (isConfirmed) {
        await deleteTransaction(token, _id);
        Swal.fire({
          icon: "success",
          title: "Deletado!",
          text: "Sua transação foi deletada.",
          confirmButtonColor: "#8c17be",
        });
      }
      if (isDismissed) {
        Swal.fire({
          icon: "error",
          title: "Cancelado",
          text: "Sua transação está segura :)",
          confirmButtonColor: "#52B6FF",
        });
      }
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
          {formatMoney(amount)}
        </Amount>
        <AiOutlineClose onClick={deleteUserTransaction} />
      </LeftBox>
    </Container>
  );
}
