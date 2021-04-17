import React, { BaseSyntheticEvent, SyntheticEvent, useState, useRef } from 'react';
import Main from "../templates/main"
import image from "../assets/speak.png";
// @ts-ignore
import 'talkify-tts';
const controlBoard = [
    { id: 2, order: 1, validOrder: 2, text: "interactive", translation: "интерактивные" },
    { id: 4, order: 4, validOrder: 4, text: "interfaces", translation: "интерфейсы" },
    { id: 3, order: 3, validOrder: 3, text: "user", translation: "пользовательские" },
    { id: 1, order: 2, validOrder: 1, text: "Create", translation: "Создавать" },
]

const MainPage = () => {
    type TWord = {
        id: number,
        order: number,
        text: string,
        translation: string
    }
    const [words, setWords] = useState<TWord[]>([...controlBoard].sort(sortWords));

    const [board, setBoard] = useState<TWord[]>([])
    const [currentWord, setCurrentWord] = useState<TWord | null>(null)
    const [translationText, setTranslationText] = useState("Создавать интерактивные пользовательские интерфейсы");

    function dragStartHandler(e: React.DragEvent<HTMLDivElement>) {

        // console.dir(e.currentTarget.style)
    }
    function dragOverHandler(e: React.DragEvent<HTMLDivElement>) {
        e.preventDefault()
        if (e.currentTarget.className === "words-for-translation__word") {
            e.currentTarget.style.boxShadow = "0 4px 3px gray"
        }
    }
    function dragHandler(e: React.DragEvent<HTMLDivElement>, word: TWord) {
        e.preventDefault()
        console.log('asd', e.currentTarget.parentElement)
        if (e.currentTarget.parentElement?.className === "string-for-translation__list") {
            const currentIndex = board.indexOf(word)
            board.splice(currentIndex, 1)
            setCurrentWord(word)
        }
        if (e.currentTarget.parentElement?.className === "words-for-translation__words") {
            const currentIndex = words.indexOf(word)
            words.splice(currentIndex, 1)
            setCurrentWord(word)
        }

    }
    function dragEndHandler(e: React.DragEvent<HTMLDivElement>) {
        e.preventDefault()
        e.stopPropagation()
        e.currentTarget.style.boxShadow = "none"
        if (e.currentTarget.className === "string-for-translation__list") {
            console.log('werw')
            if (currentWord) {
                setBoard([...board, currentWord])
                setCurrentWord(null)

            }
        } else if (e.currentTarget.className === "words-for-translation__words") {
            console.log('88')
            if (currentWord) {
                setWords([...words, currentWord].sort(sortWords))
                setCurrentWord(null)

            }
        } else {
            console.log('1111')
            if (currentWord) {

                setWords([...words, currentWord].sort(sortWords))
                setCurrentWord(null)

            }
        }
    }
    function dragLeaveHandler(e: React.DragEvent<HTMLDivElement>) {
        e.currentTarget.style.boxShadow = "none"
    }
    const handlers = {
        dragStartHandler,
        dragOverHandler,
        dragHandler,
        dragEndHandler,
        dragLeaveHandler
    }
    function sortWords(a: any, b: any) {
        return a.order - b.order
    }

    function sortByValidOrder(a: any, b: any) {
        return a.validOrder - b.validOrder
    }

    function checkResult() {
        const resultString = board.map(word => word.translation)
        const controlString = [...controlBoard].sort(sortByValidOrder).map(word => word.translation)
        
        if (resultString.join(" ") === controlString.join(" ")) {
            // @ts-ignore
            window.talkify.config.remoteService.host = 'https://talkify.net';
            // @ts-ignore
            window.talkify.config.remoteService.apiKey = 'd9929a37-d3c5-40a8-8d72-db51b8beb64c';
            // @ts-ignore
            const player = new window.talkify.TtsPlayer(); //or new talkify.Html5Player()
            player.playText([...controlBoard].sort(sortByValidOrder).map(word => word.text).join(" "));
        }
    }
    return (
        <div className="main-page"
            onDragOver={(event) => dragOverHandler(event)}
            onDrop={(event) => dragEndHandler(event)}
        >
            <Main
                image={image}
                availableWords={words}
                handlers={handlers}
                selectedWords={board}
                checkResult={checkResult}
                translationText={translationText} />
        </div>
    )
}

export default MainPage