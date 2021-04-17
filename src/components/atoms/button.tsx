type TButton = {
    checkResult: Function
}
const Button = (props: TButton) => {
    const { checkResult } = props;

    return (
        <div className="submit-button__btn">
            <button onClick={()=>checkResult()}>Проверить</button>
        </div>
    )
}

export default Button