import { useForm } from "react-hook-form";
import { useLocation, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import { useUserContext } from "../../shared/contexts";
import { Button, ErrorMessage, PageTitle } from "../../shared/components";
import { FormWrapper, TransactionsWrapper } from "../../shared/layout";
import { createTransaction, updateTransaction } from "../../shared/services";

export function Transaction() {
  const {
    user: { token },
  } = useUserContext();
  const navigate = useNavigate();
  const {
    state: { type, page, transactionId },
  } = useLocation();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const PROPS = {
    title: {
      income: { create: "Nova entrada", edit: "Editar entrada" },
      expense: { create: "Nova saída", edit: "Editar saída" },
    },
    button: {
      income: { create: "Salvar entrada", edit: "Atualizar entrada" },
      expense: { create: "Salvar saída", edit: "Atualizar saída" },
    },
  };

  const onSubmit = async (data) => {
    await fetchTransaction(data);
  };

  async function fetchTransaction({ amount, description }) {
    try {
      if (page === "create") {
        await createTransaction({ amount, description, type }, token);
        Swal.fire({
          icon: "success",
          title: "Transação criada com sucesso!",
          confirmButtonColor: "#8c17be",
        });
      } else {
        await updateTransaction(
          { amount, description, type },
          token,
          transactionId
        );
        Swal.fire({
          icon: "success",
          title: "Transação editada com sucesso!",
          confirmButtonColor: "#8c17be",
        });
      }
      navigate("/wallet");
    } catch (err) {
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: `${err.data}`,
        confirmButtonColor: "#8c17be",
      });
    }
  }

  return (
    <TransactionsWrapper>
      <PageTitle>{PROPS.title[type][page]}</PageTitle>
      <FormWrapper>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div>
            <input
              className={errors?.amount && "input-error"}
              type="text"
              placeholder="Valor"
              {...register("amount", {
                required: true,
                pattern: /^\d{1,3}(?:[.,]?\d{3})*(?:[.,]\d{2})?$/,
              })}
            />
            {errors?.amount?.type === "required" && (
              <ErrorMessage message="O campo valor é obrigatório" />
            )}
            {errors?.amount?.type === "pattern" && (
              <ErrorMessage message="Apenas números são permitidos. exemplo: 1.234,56" />
            )}
          </div>
          <div>
            <input
              className={errors?.description && "input-error"}
              type="text"
              placeholder="Descrição"
              {...register("description", { required: true })}
            />
            {errors?.description?.type === "required" && (
              <ErrorMessage message="O campo descrição é obrigatório" />
            )}
          </div>
          <Button
            type="submit"
            disabled={false}
            text={PROPS.button[type][page]}
          />
        </form>
      </FormWrapper>
    </TransactionsWrapper>
  );
}
