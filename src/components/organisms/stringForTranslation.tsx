type TStringForTranslationProps = {
    imageComponent: JSX.Element
    children: JSX.Element
}

const StringForTranslation = (props: TStringForTranslationProps) => {
    return (
        <div className="string-for-translation">
            <div className="string-for-translation__image">
                {props.imageComponent}
            </div>
            {props.children}
        </div>
    )
}

export default StringForTranslation