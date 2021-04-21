import SubmitButton from "../molecules/submitButton";

type TSubmitFrom = {
    checkResult: Function
    refTextError: React.RefObject<HTMLDivElement>
}


const ButtonBlock = (props: TSubmitFrom) => {
    const { checkResult, refTextError } = props; 

    return (
        <SubmitButton checkResult={checkResult} refTextError={refTextError} />
    )
}

export default ButtonBlock