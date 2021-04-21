import styled from "styled-components"
import { TImageProps } from "../../types";

const Image = styled.img`
  width: 200px;
  height: 200px;
`;

const ImageComponent: React.FC<TImageProps> = (props) => {
    const { image } = props;
    
    return (
        <Image className="image" src={image} alt="speak" />
    )
}

export default ImageComponent