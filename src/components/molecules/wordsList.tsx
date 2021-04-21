import FlipMove from "react-flip-move";
import styled, { css } from "styled-components";
import debounce from "../../utils/debounce";
import Word from "../atoms/word";

type TWordsListProps = {
    className?: string
    handlers: TWordHandlers
    dataset?: string
    listWords: any
}
type TWord = {
    id: number,
    order: number,
    text: string,
    translation: string
};

type TWordHandlers = {
    dragStartHandler: Function
    dragOverHandler: Function
    dragHandler: Function
    dragEndHandler: Function
    dragLeaveHandler: Function
}

const WordsList = styled.div`
  border: 3px solid rgba(0, 0, 0, 0.979);
  border-radius: 15px;
  width: 400px;
  z-index: 10;

${props => props.className === "words-for-translation__words" && css`
  height: 200px;
  margin-left: auto;
  margin-right: auto;
  padding: 15px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`}

${props => props.className === "string-for-translation__list" && css`
  min-height: 50%;
`}
`;

const FlipMoveStyle = styled(FlipMove)`
  display: flex;
  align-items: center;
  width: 100%;
  height: 100%;
  ${props => props.className === "flip-words-for-translation__words" && css`
   justify-content: space-between;
`}
`;


const WordsListComponent = (props: TWordsListProps) => {
    const { handlers, listWords } = props;
    const { dragOverHandler, dragEndHandler } = handlers;

    return (
        <WordsList
            data-field={props.dataset}
            className={props.className}
            onDragOver={(event) => debounce(dragOverHandler(event), 1000)}
            onDrop={(event) => dragEndHandler(event)}
        >
            <FlipMoveStyle data-flip={`flip-${props.dataset}`} className={'flip-' + props.className}>
                {listWords.map((selectedWord: TWord) =>
                    <Word
                        key={selectedWord.id}
                        handlers={handlers}
                        word={selectedWord}
                    />
                )}
            </FlipMoveStyle>
        </WordsList>
    )
}

export default WordsListComponent