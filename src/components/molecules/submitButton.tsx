import Button from "../atoms/button";
import Validation from "../atoms/validation";
import styled from "styled-components";

type TSubmitFrom = {
    checkResult: Function
    refTextError: React.RefObject<HTMLDivElement>
}

const ButtonBlock = styled.div`
margin-bottom: 20%;
`;

const SubmitButton = (props: TSubmitFrom) => {
    const { checkResult, refTextError } = props;

    return (
        <ButtonBlock>
            <Button checkResult={checkResult} />
            <Validation refTextError={refTextError} />
        </ButtonBlock>
    )
}

export default SubmitButton