import styled from "styled-components";
import Button from "../atoms/button";
import Validation from "../atoms/validation";

type TSubmitFrom = {
    checkResult: Function
    refTextError:React.RefObject<HTMLDivElement> 
}

const SubmitButton = styled.div`
  margin-bottom: 20%;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const SubmitButtonComponent = (props: TSubmitFrom) => {
    const { checkResult, refTextError } = props;

    return (
        <SubmitButton>
            <Button checkResult={checkResult} />
            <Validation refTextError={refTextError} />
        </SubmitButton>
    )
}

export default SubmitButtonComponent