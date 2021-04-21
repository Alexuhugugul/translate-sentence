import React, { Fragment } from 'react';
import styled from 'styled-components';
import Header from "../components/organisms/header";
import StringForTranslation from "../components/organisms/stringForTranslation";
import WordsForTranslation from "../components/organisms/wordsForTranslation";
import SubmitButton from "../components/organisms/submitButton";


type TWord = {
    id: number,
    order: number,
    text: string,
    translation: string
}

type TWordhandlers = {
    dragStartHandler: Function
    dragOverHandler: Function
    dragHandler: Function
    dragEndHandler: Function
    dragLeaveHandler: Function
}

type TMainPageProps = {
    image: string
    handlers: TWordhandlers
    availableWords: Array<TWord>
    selectedWords: Array<TWord>
    checkResult: Function
    translationText: string
    refTextError: React.RefObject<HTMLDivElement>
}

const Main = styled.main`
  height: 90%;
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  align-items: center;
`;

const mainPage = (props: TMainPageProps) => {
    const { image, handlers, availableWords, selectedWords, checkResult, translationText, refTextError } = props
    return (
        <Fragment>
            <Header translationText={translationText} />
            <Main>
                <StringForTranslation selectedWords={selectedWords} handlers={handlers} image={image}/>
                <WordsForTranslation handlers={handlers} availableWords={availableWords} />
                <SubmitButton refTextError={refTextError} checkResult={checkResult} />
            </Main>
        </Fragment>
    )
}

export default mainPage