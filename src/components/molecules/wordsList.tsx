type TWordsListProps = {
    children?: JSX.Element[]
    className?: string
    handlers: TWordHandlers
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
            className={props.className}
            onDragOver={(event) => dragOverHandler(event)}
            onDrop={(event) => dragEndHandler(event)}
        >
            {props.children}
        </div>
    )
}

export default WordsList