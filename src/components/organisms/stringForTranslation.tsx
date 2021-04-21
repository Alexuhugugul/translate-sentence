import Image from "../molecules/image";
import styled from 'styled-components';
import WordsList from "../molecules/wordsList";

type TStringForTranslationProps = {
    selectedWords: any
    handlers: any
    image: any
}

const StringForTranslation = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  width: 600px;
  height: 200px;
  max-width: 600px;
  margin-left: auto;
  margin-right: auto;
`;

const StringForTranslationComponent = (props: TStringForTranslationProps) => {
    const { image, handlers, selectedWords } = props
    return (
        <StringForTranslation className="string-for-translation">
            <Image image={image} />
            <WordsList
                className="string-for-translation__list"
                handlers={handlers}
                dataset="string-for-translation"
                listWords={selectedWords}
            />

        </StringForTranslation>
    )
}

export default StringForTranslationComponent
