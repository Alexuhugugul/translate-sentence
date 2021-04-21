import styled from "styled-components"

type TImageProps = {
    image: string,
}

const Image = styled.img`
  width: 200px;
  height: 200px;
`;

const ImageComponent = (props: TImageProps) => {
    const { image } = props
    return (
        <Image className="image" src={image} alt="speak"/>
    )
}

export default ImageComponent