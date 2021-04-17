import React from 'react';
import Word from "../atoms/word"

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
type TWordsForTranslationWordsProps = {
    words: Array<TWord>,
    handlers:TWordhandlers
}



const WordsForTranslationWords = (props: TWordsForTranslationWordsProps) => {
    const { words,handlers } = props
    const {dragOverHandler,dragEndHandler}=handlers
    return (
        <div className="words-for-translation__words"
        onDragOver={(event) => dragOverHandler(event)}
        onDrop={(event) => dragEndHandler(event)}
        >
            {words.map(word =>
                <Word
                key={word.id} word={word} handlers={handlers} />
            )}

        </div>
    )
}

export default WordsForTranslationWords