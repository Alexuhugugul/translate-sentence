import styled from "styled-components";
import { TButton } from "../../types";

const Button = styled.button`
  width: 150px;
  height: 47px;
  background: transparent;
  border-radius: 10px;
  font-size: 14px;
  font-weight: bold;
  transition: all 0.5s;
  cursor: pointer;
  &:hover{
    background: lightgray;
  }
`;

const ButtonComponent: React.FC<TButton> = (props) => {
  const { checkResult } = props;

  return (
    <Button onClick={() => checkResult()}>Проверить</Button>
  )
}

export default ButtonComponent