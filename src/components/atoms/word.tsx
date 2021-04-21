import { forwardRef } from "react";
import styled from "styled-components";
import { TWordProps } from "../../types";

const Word = styled.div.attrs(() => ({
    className: "words-for-translation__word"
}))`
  border: 1px solid black;
  padding: 3px;
  border-radius: 5px;
  cursor: grab;
  margin:5px;
  &.active{
    box-shadow :0 4px 3px gray;
  }
`

const WordComponent = forwardRef<HTMLDivElement, TWordProps>((props, ref) => {

    const { word, handlers } = props;
    const { dragStartHandler,
        dragOverHandler,
        dragHandler,
        dragEndHandler,
        dragLeaveHandler } = handlers;

    return (
        <Word
            ref={ref}
            onDragStart={(event) => dragStartHandler(event, word)}
            onDragLeave={(event) => dragLeaveHandler(event)}
            onDragOver={(event) => dragOverHandler(event)}
            onDrag={(event) => dragHandler(event, word)}
            onDrop={(event) => dragEndHandler(event, word)}
            draggable={true}
        >
            {word.text}
        </Word>
    )
})

export default WordComponent