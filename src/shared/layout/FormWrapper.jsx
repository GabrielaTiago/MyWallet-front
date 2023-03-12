import styled from "styled-components";

export function FormWrapper({ children }) {
  return <Container>{children}</Container>;
}

const Container = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;

  form {
    width: 100%;
    max-width: 500px;
    height: auto;
    display: flex;
    flex-direction: column;
    gap: 13px;
  }

  input {
    width: 100%;
    height: 58px;
    padding: 15px;
    border-radius: 5px;
    border: none;
    background-color: #ffffff;
    color: #000000;
    ::placeholder,
    ::-webkit-input-placeholder {
      color: #000000;
    }
    :focus::-webkit-input-placeholder {
      color: transparent;
    }
    :disabled {
      opacity: 0.7;
      pointer-events: none;
    }
  }
  .input-error {
    outline: 1px solid rgb(255, 72, 72);
  }
`;
