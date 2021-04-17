import { type } from 'os';
import React from 'react';
import Text from "../atoms/text";

type TWordhandlers = {
    dragStartHandler: Function
    dragOverHandler: Function
    dragHandler: Function
    dragEndHandler: Function
    dragLeaveHandler: Function
}

type TStringForTranslationText = {
    handlers: TWordhandlers
    text: any
}

const StringForTranslationText = (props: TStringForTranslationText) => {
    const { handlers, text } = props
    console.log(text)
    return (
        <div
            className="string-for-translation__text">
            {text.text}
        </div>
    )
}

export default StringForTranslationText