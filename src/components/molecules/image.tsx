import Image from "../atoms/image";
import { TImageProps } from "../../types";

const ImageBlock: React.FC<TImageProps> = (props) => {
    const { image } = props;
    
    return (
        <Image image={image} />
    );
}

export default ImageBlock;