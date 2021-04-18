import styled from "styled-components";

type TWordsForTranslationProps = {
    children: JSX.Element
}

const Word = styled.div`
height: 30%;
margin: 0 20px;
`;

const WordsForTranslation = (props: TWordsForTranslationProps) => {
    return (
        <Word>
            {props.children}
        </Word>
    )
}

export default WordsForTranslation