import Image from "../atoms/image";


function ImageBlock(props: any) {
    const { image } = props;
    return (
        <Image image={image} />
    );
}

export default ImageBlock;