import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import { isEmail } from "validator";
import { Button, ErrorMessage, GoTo, Title } from "../../shared/components";
import { AuthWrapper, FormWrapper } from "../../shared/layout";
import { signUp } from "../../shared/services";

export function SignUp() {
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
    watch,
  } = useForm();

  const onSubmit = async (data) => {
    await signUpUser(data);
  };

  const matchPassword = watch("password");

  async function signUpUser({ name, email, password, confirmPassword }) {
    try {
      await signUp({ name, email, password, confirmPassword });
      Swal.fire({
        icon: "success",
        title: "Cadastrado com sucesso!",
        confirmButtonColor: "#8c17be",
      });
      navigate("/sign-in");
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
              className={errors?.name && "input-error"}
              type="text"
              placeholder="Nome"
              {...register("name", { required: true })}
            />
            {errors?.name?.type === "required" && (
              <ErrorMessage message="O campo nome é obrigatório" />
            )}
          </div>
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
              className={errors?.password && "input-error"}
              type="password"
              placeholder="Senha"
              {...register("password", {
                required: true,
                pattern: /^(?=.*\d)(?=.*\W+)(?=.*[A-Z])(?=.*[a-z])[^.\n]{8,}$/,
              })}
            />
            {errors?.password?.type === "required" && (
              <ErrorMessage message="O campo senha é obrigatório" />
            )}
            {errors?.password?.type === "pattern" && (
              <ErrorMessage message="A senha precisa ter no mínimo 8 caracteres, dentre eles conter: 1 letra maiúscula e 1 caracter especial" />
            )}
          </div>
          <div>
            <input
              className={errors?.confirmPassword && "input-error"}
              type="password"
              placeholder="Confirme a senha"
              {...register("confirmPassword", {
                required: true,
                validate: (value) => value === matchPassword,
              })}
            />
            {errors?.confirmPassword?.type === "required" && (
              <ErrorMessage message="O campo confirmação de senha é obrigatório" />
            )}
            {errors?.confirmPassword?.type === "validate" && (
              <ErrorMessage message="As senhas não são iguais" />
            )}
          </div>
          <Button type="submit" disabled={false} text="Cadastrar" />
        </form>
      </FormWrapper>
      <GoTo to="/" text="Já tem uma conta? Entre agora!" />
    </AuthWrapper>
  );
}
