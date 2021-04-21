import React, { useRef, useState } from 'react';
import Main from "../templates/main"
import image from "../assets/speak.png";
import deleteFromArray from '../utils/deleteFromArray';
import insertBeforeItem from '../utils/insertBeforeItem';
import { TWord, TOnDragStart, TOnDragOver, TOnDrag, TOnDragEnd, TOnDragLeave, TCheckResult, TTranslationText, TWordHandlers, TOnDragEndBody } from "../types";

const apiKey = '4cd7814f94b3404fa5959de9d7cc090c';
const translationText: TTranslationText = "Создавать интерактивные пользовательские интерфейсы";
const controlBoard = [
    { id: 2, order: 1, validOrder: 2, text: "interactive", translation: "интерактивные" },
    { id: 4, order: 4, validOrder: 4, text: "interfaces", translation: "интерфейсы" },
    { id: 3, order: 3, validOrder: 3, text: "user", translation: "пользовательские" },
    { id: 1, order: 2, validOrder: 1, text: "Create", translation: "Создавать" },
];

const MainPage: React.FC = () => {

    const [availableWords, setAvailableWords] = useState<TWord[]>([...controlBoard].sort(sortWords));
    const [selectedWords, setSelectedWords] = useState<TWord[]>([]);
    const [currentWord, setCurrentWord] = useState<TWord | null>(null);
    const [fromField, setFromField] = useState<string>();
    const refTextError = useRef<HTMLDivElement>(null);
    const [speech, setSpeech] = useState<string>("");


    const dragStartHandler: TOnDragStart = (e, word) => {
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

    const dragOverHandler: TOnDragOver = (e) => {
        e.preventDefault();

        const isWordElement = e.currentTarget.classList.contains("words-for-translation__word");

        if (isWordElement) {
            e.currentTarget.classList.add("active");
        }
    }

    const dragHandler: TOnDrag = (e) => {
        e.preventDefault();

        if (refTextError.current) {
            refTextError.current.style.opacity = "0";
        }
    }
    const dragEndBodyHandler: TOnDragEndBody = (e) => {
        e.preventDefault();
        e.stopPropagation();

        if (!currentWord) {
            return
        }
        const isStringForTranslation = e.currentTarget.dataset.field === "string-for-translation";
        const isWordsForTranslation = e.currentTarget.dataset.field === "words-for-translation";
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
    }
    const dragEndHandler: TOnDragEnd = (e, word) => {
        e.preventDefault();
        e.stopPropagation();

        e.currentTarget.classList.remove("active")

        if (!currentWord) {
            return
        }

        const isFlipStringForTranslation = e.currentTarget.parentElement?.dataset.flip === "flip-string-for-translation";
        const currentSelcetedWordIndex = selectedWords.indexOf(currentWord);
        const currentAvailableWordIndex = availableWords.indexOf(currentWord);
        let newSelectedWords = [...selectedWords];
        let newAvailableWords = [...availableWords];



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

    const dragLeaveHandler: TOnDragLeave = (e) => {
        e.currentTarget.classList.remove("active")
    }

    function sortWords(a: TWord, b: TWord) {
        return a.order - b.order
    }

    function sortByValidOrder(a: TWord, b: TWord) {
        return a.validOrder - b.validOrder
    }

    const checkResult: TCheckResult = () => {
        const resultString = selectedWords.map(word => word.translation).join(" ");
        const sortedControlBoard = [...controlBoard].sort(sortByValidOrder);
        const controlString = sortedControlBoard.map(word => word.translation).join(" ");

        if (resultString === controlString) {
            const textForVoice = sortedControlBoard.map(word => word.text).join(" ");
            const audioSrc = `http://api.voicerss.org/?key=${apiKey}&hl=en-us&src=${textForVoice}`;
            
            setSpeech(audioSrc);
        } else
            if (refTextError.current) {
                refTextError.current.style.opacity = "1";
            }
    }

    const handlers: TWordHandlers = {
        dragStartHandler,
        dragOverHandler,
        dragHandler,
        dragEndHandler,
        dragLeaveHandler,
        dragEndBodyHandler
    }

    return (
        <div
            className="page"
            onDragOver={(event) => dragOverHandler(event)}
            onDrop={(event) => dragEndBodyHandler(event)}
        >
            <Main
                image={image}
                availableWords={availableWords}
                handlers={handlers}
                selectedWords={selectedWords}
                checkResult={checkResult}
                translationText={translationText}
                refTextError={refTextError} />
            { speech && <audio autoPlay src={speech}></audio>}

        </div>
    )
}

export default MainPage;