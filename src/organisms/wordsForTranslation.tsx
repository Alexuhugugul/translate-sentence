import React from 'react';
import WordsForTranslationWords from "../molecules/wordsForTranslationWords";

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

type TWordsForTranslationProps = {
    words: Array<TWord>,
    handlers:TWordhandlers
}


const WordsForTranslation = (props: TWordsForTranslationProps) => {
    const { words,handlers } = props
    return (
        <div className="words-for-translation">
            <WordsForTranslationWords handlers={handlers} words={words} />
        </div>
    )
}

export default WordsForTranslation