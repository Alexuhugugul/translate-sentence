import styled from "styled-components";

const Text = styled.span`
color: red;
font-weight: bold;
font-size: 20px;
`;

const TextWrapper = styled.div`
transition: all 0.5s;
opacity: 0;
margin-top: 20px;
`;

type TValidation = {
    refTextError: React.RefObject<HTMLDivElement>
}
const Validation = (props: TValidation) => {
    const { refTextError } = props;
    return (
        <TextWrapper  ref={refTextError}>
            <Text>Неверный перевод</Text>
        </TextWrapper>
    )
}

export default Validation