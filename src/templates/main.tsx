import React, { Fragment } from 'react';
import Header from "../organisms/header";
import StringForTranslation from "../organisms/stringForTranslation";
import WordsForTranslation from "../organisms/wordsForTranslation";

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
    words: Array<TWord>
    handlers:TWordhandlers
    refBoard:any
    board:any
}

const mainPage = (props: TMainPageProps) => {
    const { image, words,handlers,refBoard,board } = props
    return (
        <Fragment>
            <header className="main-page__header">
                <Header />
            </header>
            <main className="main-page__body">
                <StringForTranslation image={image} handlers={handlers} refBoard={refBoard} board={board}/>
                <WordsForTranslation handlers={handlers} words={words} />
            </main>
        </Fragment>
    )
}

export default mainPage