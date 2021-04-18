
type TValidation = {
    refTextError: React.RefObject<HTMLDivElement> 
}
const Validation = (props: TValidation) => {
    const { refTextError } = props;
    return (
        <div className="submit-button__validation" ref={refTextError}>
            <span>Неверный перевод</span>
        </div>
    )
}

export default Validation