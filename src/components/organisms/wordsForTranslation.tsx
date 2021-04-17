type TWordsForTranslationProps = {
    children: JSX.Element
}

const WordsForTranslation = (props: TWordsForTranslationProps) => {
    return (
        <div className="words-for-translation">
            {props.children}
        </div>
    )
}

export default WordsForTranslation