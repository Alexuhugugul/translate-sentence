import FlipMove from "react-flip-move";
import styled, { css } from "styled-components";
import Word from "../atoms/word";
import { TWordsListProps } from "../../types";

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


const WordsListComponent: React.FC<TWordsListProps> = (props) => {
  const { handlers, listWords, dataset, className } = props;
  const { dragOverHandler, dragEndBodyHandler } = handlers;

  return (
    <WordsList
      data-field={dataset}
      className={className}
      onDragOver={(event) => dragOverHandler(event)}
      onDrop={(event) => dragEndBodyHandler(event)}
    >
      <FlipMoveStyle data-flip={`flip-${dataset}`} className={'flip-' + props.className}>
        {listWords.map((selectedWord) =>
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