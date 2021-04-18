import styled from "styled-components";

type TImageProps = {
    image: string,
}

const Image = styled.img`
width: 200px;
height: 200px;
`;

const image = (props: TImageProps) => {
    const { image } = props
    return (
        <Image src={image} alt="speack"/>
    )
}

export default image