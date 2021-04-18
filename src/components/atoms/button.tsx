import styled from "styled-components";

type TButton = {
    checkResult: Function
}

const ButtonCheck = styled.button`
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

const Button = (props: TButton) => {
    const { checkResult } = props;

    return (
        <div>
            <ButtonCheck onClick={() => checkResult()}>Проверить</ButtonCheck>
        </div>
    )
}

export default Button