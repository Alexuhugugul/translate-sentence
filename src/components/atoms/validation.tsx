import styled from "styled-components";
import { TValidation } from "../../types";


const Validation = styled.div`
  transition: all 0.5s;
  opacity: 0;
  margin-top: 20px;

`;

const Text = styled.span`
color: red;
  font-weight: bold;
  font-size: 20px;
`;

const ValidationComponent: React.FC<TValidation> = (props) => {
  const { refTextError } = props;

  return (
    <Validation ref={refTextError}>
      <Text>Неверный перевод</Text>
    </Validation>
  )
}

export default ValidationComponent