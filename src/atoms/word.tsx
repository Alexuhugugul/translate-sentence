import React from 'react';

export type TWord = {
    id: number
    order: number
    text: string
    translation: string
}


type TWordhandlers = {
    dragStartHandler: Function
    dragOverHandler: Function
    dragHandler: Function
    dragEndHandler: Function
    dragLeaveHandler: Function
}

type TWordProps = {
    word: TWord
    handlers: TWordhandlers
}


const Word = (props: TWordProps) => {
    const { word, handlers: { dragStartHandler,
        dragOverHandler,
        dragHandler,
        dragEndHandler,
        dragLeaveHandler } } = props

    return (
        <div
            onDragStart={(event) => dragStartHandler(event)}
            onDragLeave={(event) => dragLeaveHandler(event)}
            // onDragEnd={(event) => dragEndHandler(event)}
            onDragOver={(event) => dragOverHandler(event)}
            onDrag={(event) => dragHandler(event,word)}
            onDrop={(event) => dragEndHandler(event,word)}
            draggable={true}
            className="words-for-translation__word">
            {word.text}
        </div>
    )
}

export default Word