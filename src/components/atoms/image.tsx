import React, { Fragment } from 'react';

type TImageProps = {
    image: string,
}


const image = (props: TImageProps) => {
    const { image } = props
    return (
            <img className="image" src={image}/>
    )
}

export default image