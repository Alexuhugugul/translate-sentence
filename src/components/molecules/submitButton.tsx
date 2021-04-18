import Button from "../atoms/button";
import Validation from "../atoms/validation";

type TSubmitFrom = {
    checkResult: Function
    refTextError:React.RefObject<HTMLDivElement> 
}

const SubmitButton = (props: TSubmitFrom) => {
    const { checkResult, refTextError } = props;

    return (
        <div className="submit-button">
            <Button checkResult={checkResult} />
            <Validation refTextError={refTextError} />
        </div>
    )
}

export default SubmitButton