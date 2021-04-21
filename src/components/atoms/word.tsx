import { forwardRef } from "react";
import styled from "styled-components";
import debounce from "../../utils/debounce"

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

const Word = styled.div.attrs(() => ({
    className: "words-for-translation__word"
}))`
  border: 1px solid black;
  padding: 3px;
  border-radius: 5px;
  cursor: grab;
  margin:5px;
`

const WordComponent = forwardRef((props: TWordProps, ref) => {

    const { word, handlers } = props;
    const { dragStartHandler,
        dragOverHandler,
        dragHandler,
        dragEndHandler,
        dragLeaveHandler } = handlers;

    return (
        <Word
            // @ts-ignore
            ref={ref}
            onDragStart={(event) => debounce(dragStartHandler(event, word), 1000)}
            onDragLeave={(event) => debounce(dragLeaveHandler(event), 1000)}
            onDragOver={(event) => debounce(dragOverHandler(event), 1000)}
            onDrag={(event) => debounce(dragHandler(event, word), 1000)}
            onDrop={(event) => debounce(dragEndHandler(event, word), 1000)}
            draggable={true}
        >
            {word.text}
        </Word>
    )
})

export default WordComponent