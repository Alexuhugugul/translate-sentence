import React, { Fragment } from 'react';
import Header from "../components/organisms/header";
import StringForTranslation from "../components/organisms/stringForTranslation";
import WordsForTranslation from "../components/organisms/wordsForTranslation";
import WordsList from "../components/molecules/wordsList";
import SubmitButton from "../components/molecules/submitButton";
import Title from "../components/atoms/title";
import Image from "../components/atoms/image";
import Word from "../components/atoms/word";
import styled from "styled-components";


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
`;
const mainPage = (props: TMainPageProps) => {
    const { image, handlers, availableWords, selectedWords, checkResult, translationText, refTextError } = props
    return (
        <Fragment>
            <Header>
                <Title>Переведите данное предложение:{translationText}</Title>
            </Header>
            <Main className="main-page__body">
                <StringForTranslation
                    imageComponent={
                        <Image image={image} />
                    }
                >
                    <WordsList
                        className="string-for-translation__list"
                        handlers={handlers}
                        dataset="string-for-translation"
                    >
                        {selectedWords.map((selectedWord: TWord) =>
                            <Word
                                key={selectedWord.id}
                                handlers={handlers}
                                word={selectedWord}
                            />
                        )}
                    </WordsList>
                </StringForTranslation>

                <WordsForTranslation>
                    <WordsList
                        className="words-for-translation__words"
                        handlers={handlers}
                        dataset="words-for-translation"
                    >
                        {availableWords.map((availableWord: TWord) =>
                            <Word
                                key={availableWord.id}
                                handlers={handlers}
                                word={availableWord}
                            />
                        )}
                    </WordsList>
                </WordsForTranslation>
                <SubmitButton refTextError={refTextError} checkResult={checkResult} />
            </Main>
        </Fragment>
    )
}

export default mainPage