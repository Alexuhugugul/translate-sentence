import { forwardRef } from "react";

type TWord = {
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

const Word = forwardRef((props: TWordProps, ref) => {

    const { word, handlers } = props;
    const { dragStartHandler,
        dragOverHandler,
        dragHandler,
        dragEndHandler,
        dragLeaveHandler } = handlers;

    return (
        <div
            // @ts-ignore
            ref={ref}
            onDragStart={(event) => dragStartHandler(event, word)}
            onDragLeave={(event) => dragLeaveHandler(event)}
            onDragOver={(event) => dragOverHandler(event)}
            onDrag={(event) => dragHandler(event, word)}
            onDrop={(event) => dragEndHandler(event, word)}
            draggable={true}
            className="words-for-translation__word">
            {word.text}
        </div>
    )
})

export default Word