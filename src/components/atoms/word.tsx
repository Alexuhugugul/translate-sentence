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

const WordWrapper = styled.div`
border: 1px solid black;
padding: 3px;
border-radius: 5px;
cursor: grab;
margin:5px;
`;

const Word = forwardRef((props: TWordProps, ref) => {

    const { word, handlers } = props;
    const { dragStartHandler,
        dragOverHandler,
        dragHandler,
        dragEndHandler,
        dragLeaveHandler } = handlers;

    return (
        <WordWrapper
            // @ts-ignore
            ref={ref}
            onDragStart={(event) =>debounce( dragStartHandler(event, word),1000)}
            onDragLeave={(event) =>debounce( dragLeaveHandler(event),1000)}
            onDragOver={(event) =>debounce( dragOverHandler(event),1000)}
            onDrag={(event) =>debounce( dragHandler(event, word),1000)}
            onDrop={(event) =>debounce( dragEndHandler(event, word),1000)}
            draggable={true}
            className="words-for-translation__word">
            {word.text}
        </WordWrapper>
    )
})

export default Word