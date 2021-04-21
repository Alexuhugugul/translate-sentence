import styled from "styled-components";
import Button from "../atoms/button";
import Validation from "../atoms/validation";
import { TSubmitFrom } from "../../types";

const SubmitButton = styled.div`
  margin-bottom: 20%;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const SubmitButtonComponent: React.FC<TSubmitFrom> = (props) => {
    const { checkResult, refTextError } = props;

    return (
        <SubmitButton>
            <Button checkResult={checkResult} />
            <Validation refTextError={refTextError} />
        </SubmitButton>
    )
}

export default SubmitButtonComponent