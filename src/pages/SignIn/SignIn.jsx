import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import { isEmail } from "validator";
import { useUserContext } from "../../shared/contexts";
import { Button, ErrorMessage, GoTo, Title } from "../../shared/components";
import { AuthWrapper, FormWrapper } from "../../shared/layout";
import { signIn } from "../../shared/services";

export function SignIn() {
  const { setUser } = useUserContext();
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    await signInUser(data);
  };

  async function signInUser({ email, password }) {
    try {
      const response = await signIn({ email, password });
      setUser(response);
      Swal.fire({
        icon: "success",
        title: `${response.message}`,
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
    <AuthWrapper>
      <Title />

      <FormWrapper>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div>
            <input
              className={errors?.email && "input-error"}
              type="text"
              placeholder="E-mail"
              {...register("email", {
                required: true,
                validate: (value) => isEmail(value),
              })}
            />
            {errors?.email?.type === "required" && (
              <ErrorMessage message="O campo email é obrigatório" />
            )}
            {errors?.email?.type === "validate" && (
              <ErrorMessage message="Email inválido" />
            )}
          </div>

          <div>
            <input
              className={errors?.email && "input-error"}
              type="password"
              placeholder="Senha"
              {...register("password", { required: true })}
            />
            {errors?.password?.type === "required" && (
              <ErrorMessage message="O campo senha é obrigatório" />
            )}
          </div>

          <Button type="submit" disabled={false} text="Entrar" />
        </form>
      </FormWrapper>

      <GoTo to="/sign-up" text="Primeira vez? Cadastre-se!" />
    </AuthWrapper>
  );
}
