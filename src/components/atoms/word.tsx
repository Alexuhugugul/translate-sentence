import { forwardRef, useState } from "react";
import styled from "styled-components";
import { TWordProps } from "../../types";

const Word = styled.div`
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
        dragEndHandler } = handlers;

    const [isHoverWord, setIsHoverWord] = useState<boolean>(false);

    function dragOutElement(event: React.DragEvent<HTMLDivElement>) {
        setIsHoverWord(false);
        dragEndHandler(event, word);
    }

    function dragInElement(event: React.DragEvent<HTMLDivElement>) {
        setIsHoverWord(true);
        dragOverHandler(event);
    }
    
    return (
        <Word
            className={isHoverWord ? 'active words-for-translation__word' : 'words-for-translation__word'}
            ref={ref}
            onDragStart={(event) => dragStartHandler(event, word)}
            onDragLeave={(event) => dragOutElement(event)}
            onDragOver={(event) => dragInElement(event)}
            onDrag={(event) => dragHandler(event, word)}
            onDrop={(event) => dragOutElement(event)}
            draggable={true}
        >
            {word.text}
        </Word>
    )
})

export default WordComponent