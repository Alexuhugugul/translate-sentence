export type TOnDragStart = (event: React.DragEvent<HTMLDivElement>, word: TWord) => void;
export type TOnDragOver = (event: React.DragEvent<HTMLDivElement>) => void;
export type TOnDrag = (event: React.DragEvent<HTMLDivElement>, word: TWord) => void;
export type TOnDragEnd = (event: React.DragEvent<HTMLDivElement>, word: TWord) => void;
export type TOnDragEndBody = (event: React.DragEvent<HTMLDivElement>) => void;
export type TCheckResult = () => void;
export type TTranslationText = string;
type TImage = string;

export type TWord = {
    id: number
    order: number
    text: string
    translation: string
    validOrder: number
};

export type TWordHandlers = {
    dragStartHandler: TOnDragStart
    dragOverHandler: TOnDragOver
    dragHandler: TOnDrag
    dragEndHandler: TOnDragEnd
    dragEndBodyHandler:TOnDragEndBody
};

export type TMainPageProps = {
    image: TImage
    handlers: TWordHandlers
    availableWords: Array<TWord>
    selectedWords: Array<TWord>
    checkResult: TCheckResult
    translationText: TTranslationText
    refTextError: React.RefObject<HTMLDivElement>
};

export type TWordsListProps = {
    className: string
    handlers: TWordHandlers
    dataset: string
    listWords: Array<TWord>
};

export type TWordsForTranslationProps = {
    availableWords: Array<TWord>
    handlers: TWordHandlers
    checkResult:TCheckResult
    refTextError: React.RefObject<HTMLDivElement>
};

export type TSubmitFrom = {
    checkResult: TCheckResult
    refTextError: React.RefObject<HTMLDivElement>
};

export type TStringForTranslationProps = {
    selectedWords: Array<TWord>
    handlers: TWordHandlers
    image: TImage
};

export type TValidation = {
    refTextError: React.RefObject<HTMLDivElement>
};

export type THeaderProps = {
    translationText: TTranslationText
};

export type TWordProps = {
    word: TWord
    handlers: TWordHandlers
};

export type TImageProps = {
    image: TImage
};

export type TButton = {
    checkResult: TCheckResult
}