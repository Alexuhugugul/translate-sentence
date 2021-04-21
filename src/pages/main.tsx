import React, { useRef, useState } from 'react';
import Main from "../templates/main"
import image from "../assets/speak.png";
import deleteFromArray from '../utils/deleteFromArray';
import insertBeforeItem from '../utils/insertBeforeItem';
import 'talkify-tts';

type TWord = {
    id: number,
    order: number,
    text: string,
    translation: string
    validOrder: number
};

const translationText = "Создавать интерактивные пользовательские интерфейсы";
const controlBoard = [
    { id: 2, order: 1, validOrder: 2, text: "interactive", translation: "интерактивные" },
    { id: 4, order: 4, validOrder: 4, text: "interfaces", translation: "интерфейсы" },
    { id: 3, order: 3, validOrder: 3, text: "user", translation: "пользовательские" },
    { id: 1, order: 2, validOrder: 1, text: "Create", translation: "Создавать" },
];

const MainPage = () => {

    const [availableWords, setAvailableWords] = useState<TWord[]>([...controlBoard].sort(sortWords));
    const [selectedWords, setSelectedWords] = useState<TWord[]>([]);
    const [currentWord, setCurrentWord] = useState<TWord | null>(null);
    const [fromField, setFromField] = useState<any>();
    const refTextError = useRef<HTMLDivElement>(null);

    function dragStartHandler(e: React.DragEvent<HTMLDivElement>, word: TWord) {
        const isFlipStringForTranslation = e.currentTarget.parentElement?.dataset.flip === "flip-string-for-translation";
        const isFlipWordsForTranslation = e.currentTarget.parentElement?.dataset.flip === "flip-words-for-translation";

        if (isFlipStringForTranslation) {
            setFromField("isFlipStringForTranslation");
        }

        if (isFlipWordsForTranslation) {
            setFromField("isFlipWordsForTranslation");

        }

        setCurrentWord(word);
    }

    function dragOverHandler(e: React.DragEvent<HTMLDivElement>) {
        e.preventDefault();

        const isWordElement = e.currentTarget.className === "words-for-translation__word";

        if (isWordElement) {
            e.currentTarget.style.boxShadow = "0 4px 3px gray";
        }
    }

    function dragHandler(e: React.DragEvent<HTMLDivElement>, word: TWord) {
        e.preventDefault();

        if (refTextError.current) {
            refTextError.current.style.opacity = "0";
        }
    }

    function dragEndHandler(e: React.DragEvent<HTMLDivElement>, word?: TWord) {
        e.preventDefault();
        e.stopPropagation();

        e.currentTarget.style.boxShadow = "none";

        if (!currentWord) {
            return
        }

        const isStringForTranslation = e.currentTarget.dataset.field === "string-for-translation";
        const isWordsForTranslation = e.currentTarget.dataset.field === "words-for-translation";
        const isFlipStringForTranslation = e.currentTarget.parentElement?.dataset.flip === "flip-string-for-translation";
        const currentSelcetedWordIndex = selectedWords.indexOf(currentWord);
        const currentAvailableWordIndex = availableWords.indexOf(currentWord);
        let newSelectedWords = [...selectedWords];
        let newAvailableWords = [...availableWords];


        if (fromField === "isFlipStringForTranslation" && isWordsForTranslation) {

            newAvailableWords = [...availableWords, currentWord];
            newSelectedWords = deleteFromArray(newSelectedWords, currentSelcetedWordIndex);

            setSelectedWords(newSelectedWords);
            setAvailableWords(newAvailableWords);

            setTimeout(() => {
                setAvailableWords(newAvailableWords.sort(sortWords));
                setCurrentWord(null);
            }, 300);

        }
        else
            if (fromField === "isFlipWordsForTranslation" && isStringForTranslation) {

                newAvailableWords = deleteFromArray(newAvailableWords, currentAvailableWordIndex);
                newSelectedWords = [...selectedWords, currentWord];

                setAvailableWords(newAvailableWords);
                setSelectedWords(newSelectedWords);
                setCurrentWord(null);

            }
            else
                if (isFlipStringForTranslation && word && fromField === "isFlipStringForTranslation") {

                    const wordIndex = selectedWords.indexOf(word);

                    newSelectedWords = deleteFromArray(newSelectedWords, currentSelcetedWordIndex);
                    newSelectedWords = insertBeforeItem(newSelectedWords, wordIndex, currentWord);

                    setSelectedWords(newSelectedWords);

                }
                else
                    if (isFlipStringForTranslation && word && fromField === "isFlipWordsForTranslation") {

                        const wordIndex = selectedWords.indexOf(word);

                        newAvailableWords = deleteFromArray(newAvailableWords, currentAvailableWordIndex);
                        newSelectedWords = insertBeforeItem(newSelectedWords, wordIndex, currentWord);

                        setAvailableWords(newAvailableWords);
                        setSelectedWords(newSelectedWords);
                    }

    }

    function dragLeaveHandler(e: React.DragEvent<HTMLDivElement>) {
        e.currentTarget.style.boxShadow = "none"
    }

    function sortWords(a: TWord, b: TWord) {
        return a.order - b.order
    }

    function sortByValidOrder(a: TWord, b: TWord) {
        return a.validOrder - b.validOrder
    }

    function checkResult() {
        const resultString = selectedWords.map(word => word.translation).join(" ");
        const sortedControlBoard = [...controlBoard].sort(sortByValidOrder);
        const controlString = sortedControlBoard.map(word => word.translation).join(" ");

        if (resultString === controlString) {
            // @ts-ignore
            const player = new window.talkify.TtsPlayer();
            const textForVoice = sortedControlBoard.map(word => word.text).join(" ");

            player.playText(textForVoice);
        } else
            if (refTextError.current) {
                refTextError.current.style.opacity = "1";
            }
    }

    const handlers = {
        dragStartHandler,
        dragOverHandler,
        dragHandler,
        dragEndHandler,
        dragLeaveHandler
    }

    return (
        <div
            className="page"
            onDragOver={(event) => dragOverHandler(event)}
            onDrop={(event) => dragEndHandler(event)}
        >
            <Main
                image={image}
                availableWords={availableWords}
                handlers={handlers}
                selectedWords={selectedWords}
                checkResult={checkResult}
                translationText={translationText}
                refTextError={refTextError} />
        </div>
    )
}

export default MainPage;