import React, { Fragment } from 'react';
import styled from 'styled-components';
import Header from "../components/organisms/header";
import StringForTranslation from "../components/organisms/stringForTranslation";
import WordsForTranslation from "../components/organisms/wordsForTranslation";
import { TMainPageProps } from "../types";


const Main = styled.main`
  height: 90%;
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  align-items: center;
`;

const mainPage: React.FC<TMainPageProps> = (props) => {
    const { image, handlers, availableWords, selectedWords, checkResult, translationText, refTextError } = props
    return (
        <Fragment>
            <Header translationText={translationText} />
            <Main>
                <StringForTranslation selectedWords={selectedWords} handlers={handlers} image={image} />
                <WordsForTranslation handlers={handlers} availableWords={availableWords} refTextError={refTextError} checkResult={checkResult} />
            </Main>
        </Fragment>
    )
}

export default mainPage