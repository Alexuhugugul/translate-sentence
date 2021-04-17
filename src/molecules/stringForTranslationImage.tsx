import React from 'react';
import Image from "../atoms/image";

type TStringForTranslationImageProps = {
    image: string
}

const StringForTranslationimage = (props: TStringForTranslationImageProps) => {
    const { image } = props
    return (
        <div className="string-for-translation__image">
            <Image image={image}/>
        </div>
    )
}

export default StringForTranslationimage