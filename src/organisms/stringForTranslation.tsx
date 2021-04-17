import React, { useRef } from 'react';
import StringForTranslationimage from "../molecules/stringForTranslationImage";
import Word from "../atoms/word";


type TStringForTranslationProps = {
    image: string
    handlers: TWordhandlers
    refBoard: any
    board: any
}
type TWordhandlers = {
    dragStartHandler: Function
    dragOverHandler: Function
    dragHandler: Function
    dragEndHandler: Function
    dragLeaveHandler: Function
}
type TWord = {
    id: number,
    order: number,
    text: string,
    translation: string
}

const StringForTranslation = (props: TStringForTranslationProps) => {
    const { image, handlers, refBoard, board } = props;
    const { dragStartHandler,
        dragOverHandler,
        dragHandler,
        dragEndHandler,
        dragLeaveHandler } = handlers

    return (
        <div className="string-for-translation">
            <StringForTranslationimage image={image} />
            <div className="string-for-translation__list"
                 onDragOver={(event) => dragOverHandler(event)}
                 onDrop={(event) => dragEndHandler(event)}
                ref={refBoard}>
                {board.map((text: TWord) =>

                    <Word
                        key={text.id}
                        handlers={handlers}
                        word={text} />
                )}
            </div>
        </div>
    )
}

export default StringForTranslation