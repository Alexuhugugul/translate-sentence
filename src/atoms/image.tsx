import React, { Fragment } from 'react';

type TImageProps = {
    image: string,
}


const image = (props: TImageProps) => {
    const { image } = props
    return (
        <Fragment>
            <img className="image" src={image}/>
        </Fragment>
    )
}

export default image