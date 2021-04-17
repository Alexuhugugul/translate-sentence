type TTitleProps = {
    children?: string
}

const Title = (props: TTitleProps) => {

    return (
        <h1>{props.children}</h1>
    )
}

export default Title