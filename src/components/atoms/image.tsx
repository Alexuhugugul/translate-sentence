type TImageProps = {
    image: string,
}


const image = (props: TImageProps) => {
    const { image } = props
    return (
        <img className="image" src={image} alt="speak"/>
    )
}

export default image