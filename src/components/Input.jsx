import { styled } from "styled-components";

const Input = () => {
  return <InputContainer />;
};

const InputContainer = styled.input`
  width: 800px;
  height: 25px;
  border-width: 0 0 3px;
  color: gray;
  font-size: 20px;
`;

export default Input;
