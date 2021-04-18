import FlipMove from "react-flip-move";
import debounce from "../../utils/debounce";

type TWordsListProps = {
    children?: JSX.Element[]
    className?: string
    handlers: TWordHandlers
    dataset?: string
}

type TWordHandlers = {
    dragOverHandler: Function
    dragEndHandler: Function
}

const WordsList = (props: TWordsListProps) => {
    const { handlers } = props;
    const { dragOverHandler, dragEndHandler } = handlers;

    return (
        <div
            data-field={props.dataset}
            className={props.className}
            onDragOver={(event) =>debounce( dragOverHandler(event),1000)}
            onDrop={(event) => dragEndHandler(event)}
        >
            <FlipMove  data-flip={`flip-${props.dataset}`} className={'flip-' + props.className}>
                {props.children}
            </FlipMove>
        </div>
    )
}

export default WordsList