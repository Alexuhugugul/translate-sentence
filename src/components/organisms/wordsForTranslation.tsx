import styled from "styled-components";
import WordsList from "../molecules/wordsList";


type TWordsForTranslationProps = {
    availableWords: any
    handlers: any
};

const WordsForTranslation = styled.div.attrs(() => ({
    className: "words-for-translation"
}))`
  height: 30%;
  margin: 0 20px;
`;

const WordsForTranslationComponent = (props: TWordsForTranslationProps) => {
    const { handlers, availableWords } = props
    return (
        <WordsForTranslation>
            <WordsList
                className="words-for-translation__words"
                handlers={handlers}
                dataset="words-for-translation"
                listWords={availableWords}
            />

        </WordsForTranslation>
    )
}

export default WordsForTranslationComponent
