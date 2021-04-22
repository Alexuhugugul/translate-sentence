import styled from "styled-components";
import { TValidation } from "../../types";


const Validation = styled.div`
  transition: all 0.5s;
  opacity: 0;
  margin-top: 20px;
  &.active{
  opacity: 1;
}
`;

const Text = styled.span`
  color: red;
  font-weight: bold;
  font-size: 20px;
`;

const ValidationComponent: React.FC<TValidation> = (props) => {
  const { isTextError } = props;

  return (
    <Validation className={isTextError ? 'active' : ''}>
      <Text>Неверный перевод</Text>
    </Validation>
  )
}

export default ValidationComponent