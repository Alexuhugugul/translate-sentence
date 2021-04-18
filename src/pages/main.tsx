import React, { useRef, useState } from 'react';
import Main from "../templates/main"
import image from "../assets/speak.png";
// @ts-ignore
import 'talkify-tts';

type TWord = {
    id: number,
    order: number,
    text: string,
    translation: string
    validOrder: number
}

const translationText = "Создавать интерактивные пользовательские интерфейсы";
const controlBoard = [
    { id: 2, order: 1, validOrder: 2, text: "interactive", translation: "интерактивные" },
    { id: 4, order: 4, validOrder: 4, text: "interfaces", translation: "интерфейсы" },
    { id: 3, order: 3, validOrder: 3, text: "user", translation: "пользовательские" },
    { id: 1, order: 2, validOrder: 1, text: "Create", translation: "Создавать" },
]

const MainPage = () => {

    const [availableWords, setAvailableWord] = useState<TWord[]>([...controlBoard].sort(sortWords));
    const [selectedWords, setSelectedWord] = useState<TWord[]>([]);
    const [currentWord, setCurrentWord] = useState<TWord | null>(null);
    const refTextError = useRef<HTMLDivElement>(null);

    function dragStartHandler(e: React.DragEvent<HTMLDivElement>, word: TWord) {
        const isFlipStringForTranslation = e.currentTarget.parentElement?.dataset.flip === "flip-string-for-translation";
        const isFlipWordsForTranslation = e.currentTarget.parentElement?.dataset.flip === "flip-words-for-translation";

        if (isFlipStringForTranslation) {
            const currentIndex = selectedWords.indexOf(word);
            const newSelectedWords = [...selectedWords];
            newSelectedWords.splice(currentIndex, 1);
            setSelectedWord(newSelectedWords);
            setCurrentWord(word);
        }

        if (isFlipWordsForTranslation) {
            const currentIndex = availableWords.indexOf(word);
            const newAvailableWords = [...availableWords];
            newAvailableWords.splice(currentIndex, 1);
            setAvailableWord(newAvailableWords);
            setCurrentWord(word);
        }

    }

    function dragOverHandler(e: React.DragEvent<HTMLDivElement>) {
        e.preventDefault()
        if (e.currentTarget.className === "words-for-translation__word") {
            e.currentTarget.style.boxShadow = "0 4px 3px gray"
        }
    }

    function dragHandler(e: React.DragEvent<HTMLDivElement>, word: TWord) {
        e.preventDefault()
        if (refTextError.current) {
            refTextError.current.style.opacity = "0"
        }
        if (currentWord) {
            return
        }
    }

    function dragEndHandler(e: React.DragEvent<HTMLDivElement>, word?: TWord) {
        e.preventDefault();
        e.stopPropagation();
        e.currentTarget.style.boxShadow = "none"

        const isStringForTranslation = e.currentTarget.dataset.field === "string-for-translation";
        const isWordsForTranslation = e.currentTarget.dataset.field === "words-for-translation";
        const isWord = e.currentTarget.className === "words-for-translation__word";
        if (isStringForTranslation && currentWord) {

                setSelectedWord([...selectedWords, currentWord]);
                setCurrentWord(null);
        

        } else
            if (isWordsForTranslation && currentWord) {

                setAvailableWord([...availableWords, currentWord]);
                setTimeout(() => {
                    setAvailableWord([...availableWords, currentWord].sort(sortWords));
                    setCurrentWord(null);
                }, 300);

            } else
                if (isWord && currentWord && word) {
                    if (e.currentTarget.parentElement?.dataset.flip === "flip-string-for-translation") {
                        const currentIndex = selectedWords.indexOf(word);
                        const newSelectedWords = [...selectedWords]
                        setTimeout(() => {
                            newSelectedWords.splice(currentIndex, 0, currentWord)
                            setSelectedWord(newSelectedWords)
                        }, 300)
                        setCurrentWord(null);
                    }


                } else {
                    if (currentWord) {
                        setAvailableWord([...availableWords, currentWord].sort(sortWords));
                        setTimeout(() => {
                            setAvailableWord([...availableWords, currentWord].sort(sortWords));
                            setCurrentWord(null);
                        }, 300)
                    }
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
        const resultString = selectedWords.map(word => word.translation);
        const sortControlBoard = [...controlBoard].sort(sortByValidOrder);
        const controlString = sortControlBoard.map(word => word.translation);

        if (resultString.join(" ") === controlString.join(" ")) {
            // @ts-ignore
            window.talkify.config.remoteService.host = 'https://talkify.net';
            // @ts-ignore
            window.talkify.config.remoteService.apiKey = 'd9929a37-d3c5-40a8-8d72-db51b8beb64c';
            // @ts-ignore
            const player = new window.talkify.TtsPlayer();
            const textForVoice = sortControlBoard.map(word => word.text).join(" ");
            player.playText(textForVoice);
        } else {
            if (refTextError.current) {
                refTextError.current.style.opacity = "1"
            }

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
        <div className="main-page"
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

export default MainPage