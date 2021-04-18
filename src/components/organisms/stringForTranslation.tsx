import styled from "styled-components";

type TStringForTranslationProps = {
    imageComponent: JSX.Element
    children: JSX.Element
}

const StringForTranslationWrapper = styled.div`
display: flex;
flex-direction: row;
justify-content: space-between;
align-items: center;
width: 100%;
height: 200px;
max-width: 600px;
margin-left: auto;
margin-right: auto;
`;

const StringForTranslation = (props: TStringForTranslationProps) => {
    return (
        <StringForTranslationWrapper >
            <div>
                {props.imageComponent}
            </div>
            {props.children}
        </StringForTranslationWrapper>
    )
}

export default StringForTranslation