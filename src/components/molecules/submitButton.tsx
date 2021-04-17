import Button from "../atoms/button";
import Validation from "../atoms/validation";

type TSubmitFrom={
    checkResult:Function
}

const SubmitButton = (props:TSubmitFrom) => {
    const { checkResult } = props;

    return (
        <div className="submit-button">
            <Button checkResult={checkResult}/>
            <Validation/>
        </div>
    )
}

export default SubmitButton