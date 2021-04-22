import styled from "styled-components";
import { Fragment } from "react";
import { TWordsForTranslationProps } from "../../types";
import SubmitButton from "../molecules/submitButton";
import WordsList from "../molecules/wordsList";


const WordsForTranslation = styled.div.attrs(() => ({
    className: "words-for-translation"
}))`
  height: 30%;
  margin: 0 20px;
`;

const WordsForTranslationComponent: React.FC<TWordsForTranslationProps> = (props) => {
    const { handlers, availableWords, checkResult, isTextError } = props
    return (
        <Fragment>
            <WordsForTranslation>
                <WordsList
                    className="words-for-translation__words"
                    handlers={handlers}
                    dataset="words-for-translation"
                    listWords={availableWords}
                />
            </WordsForTranslation>
            <SubmitButton checkResult={checkResult} isTextError={isTextError} />
        </Fragment>

    )
}

export default WordsForTranslationComponent
