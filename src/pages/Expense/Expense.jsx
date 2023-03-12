import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import { useUserContext } from "../../shared/contexts";
import { Button, ErrorMessage, PageTitle } from "../../shared/components";
import { FormWrapper, TransactionsWrapper } from "../../shared/layout";
import { createTransaction } from "../../shared/services";

export function Expense() {
  const {
    user: { token },
  } = useUserContext();
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    await fetchExpense(data);
  };

  async function fetchExpense({ amount, description }) {
    try {
      await createTransaction({ amount, description, type: "expense" }, token);
      Swal.fire({
        icon: "success",
        title: "Transação criada com sucesso!",
        confirmButtonColor: "#8c17be",
      });
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
      <PageTitle>Nova saída</PageTitle>
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
          <Button type="submit" disabled={false} text="Salvar saída" />
        </form>
      </FormWrapper>
    </TransactionsWrapper>
  );
}
